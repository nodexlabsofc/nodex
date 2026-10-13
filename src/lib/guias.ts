/**
 * Guias (iscas): material gratuito entregue em troca do contato.
 *
 * Cada guia mora em três endereços:
 *   /guias/{slug}/lead  → formulário de captura
 *   /guias/{slug}       → o conteúdo
 *   /guias/{slug}/pdf   → o mesmo conteúdo em PDF
 *
 * `isca` é o identificador gravado no Supabase (coluna `isca` da tabela
 * `isca_leads`) e precisa ser único entre todos os guias. A API só aceita
 * leads de guias registrados aqui. Como criar um guia novo: docs/guias.md.
 */
export type Guia = {
  slug: string;
  isca: string;
  titulo: string;
  /** false = fora do sitemap e com noindex (teste ou rascunho). */
  publico: boolean;
};

export const GUIAS: readonly Guia[] = [
  {
    slug: "teste",
    isca: "teste-setup-2026",
    titulo: "Guia de teste",
    publico: false,
  },
];

/** Parâmetros de origem preservados do link do post até o banco. */
export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
] as const;

export function guiaPorIsca(isca: string) {
  return GUIAS.find((guia) => guia.isca === isca);
}
