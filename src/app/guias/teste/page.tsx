import type { Metadata } from "next";

import { CtaForm } from "@/components/cta-block";
import { HeroBackdrop } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

// Guia de teste da estrutura: fora do Google e do sitemap.
export const metadata: Metadata = {
  ...pageMeta("/guias/teste", {
    title: "Guia de teste",
    description: "Conteúdo de teste da estrutura de guias da Nodex Labs.",
  }),
  robots: { index: false, follow: false },
};

export default function GuiaTestePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <HeroBackdrop glowAt="70%" glowStrength={0.22} scan="none" />
        <div className="relative mx-auto max-w-[860px] px-5 pt-28 pb-20 md:px-8">
          <span className="nx-label">GUIA · TESTE</span>
          <h1 className="nx-h1-sub mt-[22px]">O conteúdo do guia aparece aqui.</h1>
          <p className="nx-body-l mt-6 max-w-[60ch]">
            Se você chegou nesta página depois do formulário, o fluxo
            funcionou: o lead foi gravado e os parâmetros de origem vieram
            junto no endereço.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/guias/teste/pdf" className="nx-btn-ghost" download>
              Baixar em PDF
            </a>
          </div>
        </div>
      </section>

      <CtaForm
        title="Quer isso rodando na sua empresa?"
        lead="Conta o problema em poucas linhas. A gente volta em um dia útil com o próximo passo."
      />
    </>
  );
}
