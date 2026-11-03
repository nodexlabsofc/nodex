import type { Metadata } from "next";
import Link from "next/link";

import { CatalogoNichos } from "@/components/catalogo-nichos";
import { CtaButtons } from "@/components/cta-buttons";
import { PageJsonLd } from "@/components/json-ld";
import { HeroBackdrop, Section, SectionHead } from "@/components/ui";
import { NICHOS, TRANSVERSAIS } from "@/lib/catalogo";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/catalogo", {
  title: "Catálogo de soluções por ramo",
  description:
    "Agentes de IA, sistemas e automações para advocacia, saúde, comércio, serviços, indústria e mais. Veja o que dá para tirar das mãos da sua equipe.",
});

const CAMADAS = [
  {
    kicker: "01 · AGENTE DE IA",
    title: "Faz o trabalho repetido",
    text: "Atende, lê documento, decide o próximo passo e registra. Dentro do sistema, não ao lado dele.",
  },
  {
    kicker: "02 · SISTEMA",
    title: "Onde a operação acontece",
    text: "Painel, CRM ou app feito para a regra do seu negócio. Os agentes trabalham ali dentro.",
  },
  {
    kicker: "03 · AUTOMAÇÃO",
    title: "Liga o que já existe",
    text: "Conecta as ferramentas que vocês usam e tira a digitação do meio do caminho.",
  },
];

export default function CatalogoPage() {
  return (
    <>
      <PageJsonLd path="/catalogo" />
      <section className="relative overflow-hidden">
        <HeroBackdrop glowAt="70%" />
        <div className="relative mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-12 px-5 pt-28 pb-24 md:px-8 lg:px-12">
          <div>
            <span className="nx-label">CATÁLOGO</span>
            <p className="nx-label-red mt-[18px] text-[13px]">
              {NICHOS.length} RAMOS DE ATUAÇÃO
            </p>
            <h1 className="nx-h1-sub mt-[22px] max-w-[22ch]">
              O que dá para tirar das mãos da sua equipe.
            </h1>
            <p className="nx-body-l mt-6 max-w-[62ch]">
              Agentes de IA, sistemas e automações por ramo. Encontre o seu e
              veja por onde começar.
            </p>
            <div className="mt-9 flex flex-wrap gap-[14px]">
              <a href="#ramos" className="nx-btn">
                Encontrar meu ramo
              </a>
              <Link href="/contato" className="nx-btn-ghost">
                Fale com a Nodex
              </Link>
            </div>
          </div>
          <img
            src="/assets/symbol.svg"
            alt=""
            aria-hidden
            width={520}
            height={339}
            className="pointer-events-none hidden h-auto w-full max-w-[520px] justify-self-end md:block"
          />
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="COMO MONTAMOS"
          eyebrowTone="red"
          title="Três camadas, uma operação"
          lead="Cada solução combina as três na medida do problema. Às vezes um agente basta. Às vezes é um sistema inteiro."
          className="mb-12"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
          {CAMADAS.map((c) => (
            <div key={c.kicker} className="nx-card p-8">
              <span className="font-mono text-[11px]/[1] font-medium tracking-[0.2em] text-nx-red">
                {c.kicker}
              </span>
              <p className="nx-h3 mt-5 mb-3">{c.title}</p>
              <p className="nx-body">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="PARA QUALQUER EMPRESA"
          title="O que serve em quase todo ramo"
          lead="Tarefas que aparecem em toda operação, do consultório à indústria."
          className="mb-12"
        />
        <div className="nx-grid-hairline grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]">
          {TRANSVERSAIS.map((t) => (
            <div key={t.titulo} className="p-7">
              <p className="mb-2 font-display text-[18px]/[1.35] font-medium text-white">
                {t.titulo}
              </p>
              <p className="nx-body text-[15px]">{t.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div id="ramos" className="scroll-mt-28" />
        <SectionHead
          eyebrow="POR RAMO"
          eyebrowTone="red"
          title="Encontre o seu ramo"
          lead="Abra o card para ver o que o agente faz, o sistema por trás e a primeira entrega que já muda o dia."
          className="mb-10"
        />
        <CatalogoNichos />
      </Section>

      <CtaButtons
        title="Não achou o seu caso?"
        lead="Se a tarefa se repete, dá para automatizar. Na conversa de diagnóstico a gente aponta a menor entrega que já muda a operação."
        secondaryHref="/cases"
        secondaryLabel="Ver cases"
      />
    </>
  );
}
