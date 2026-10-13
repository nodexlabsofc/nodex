import type { Metadata } from "next";

import { GuiaLeadForm } from "@/components/guia-lead-form";
import { HeroBackdrop } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

// Guia de teste da estrutura: fora do Google e do sitemap.
export const metadata: Metadata = {
  ...pageMeta("/guias/teste/lead", {
    title: "Guia de teste",
    description: "Página de teste da estrutura de guias da Nodex Labs.",
  }),
  robots: { index: false, follow: false },
};

export default function GuiaTesteLeadPage() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop glowAt="30%" glowStrength={0.3} />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-start gap-14 px-5 pt-28 pb-24 md:px-8 lg:px-12">
        <div>
          <span className="nx-label">GUIA GRATUITO</span>
          <p className="nx-label-red mt-[18px] text-[13px]">TESTE</p>
          <h1 className="nx-h1-sub mt-[22px]">Guia de teste.</h1>
          <p className="nx-body-l mt-6 max-w-[52ch]">
            Esta página existe para validar o formulário, a gravação do lead e
            o redirecionamento para o conteúdo.
          </p>
        </div>
        <div className="nx-card nx-card-hover p-[34px]">
          <GuiaLeadForm isca="teste-setup-2026" slug="teste" />
        </div>
      </div>
    </section>
  );
}
