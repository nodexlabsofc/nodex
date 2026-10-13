import { jsPDF } from "jspdf";

// O conteúdo não muda entre pedidos: gera uma vez no build e serve do cache.
export const dynamic = "force-static";

const RED = [225, 6, 0] as const;
const INK = [20, 20, 20] as const;
const GRAY = [110, 110, 110] as const;

/**
 * PDF do guia de teste. O jsPDF usa Helvetica padrão, que não tem acento:
 * texto do PDF vai sem acentuação (ver docs/guias.md).
 */
export async function GET() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const marginX = 20;
  const width = doc.internal.pageSize.getWidth() - marginX * 2;
  let y = 24;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...RED);
  doc.text("NODEX LABS - GUIA DE TESTE", marginX, y);
  y += 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...INK);
  doc.text("O conteudo do guia aparece aqui.", marginX, y);
  y += 6;

  doc.setDrawColor(...RED);
  doc.setLineWidth(0.8);
  doc.line(marginX, y, marginX + 40, y);
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...GRAY);
  const body = doc.splitTextToSize(
    "Este PDF existe para validar a geracao do arquivo na estrutura de guias do site da Nodex Labs.",
    width,
  ) as string[];
  doc.text(body, marginX, y);

  doc.setFontSize(9);
  doc.text("nodexlabs.com.br", marginX, doc.internal.pageSize.getHeight() - 14);

  return new Response(doc.output("arraybuffer"), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="nodex-guia-teste.pdf"',
    },
  });
}
