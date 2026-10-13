import type { Metadata } from "next";
import Link from "next/link";

import { PageJsonLd } from "@/components/json-ld";
import { HeroBackdrop, Section, SectionHead } from "@/components/ui";
import { GUIAS } from "@/lib/guias";
import { pageMeta } from "@/lib/seo";
import { PHONE_DISPLAY, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta("/comece", {
  title: "Por onde começar",
  description:
    "Conversa de diagnóstico gratuita, chatbots, automações, sistemas ou cases em produção. Escolha por onde a sua empresa começa.",
});

/**
 * Hub do link da bio. Cada porta atende um momento diferente de quem chega
 * do Instagram, e o texto pronto do WhatsApp identifica que veio daqui.
 */
const DIAGNOSTICO_URL = whatsappUrl(
  "Oi! Vim pela página Por onde começar e quero o diagnóstico gratuito.",
);

const FRENTES = [
  {
    href: "/solucoes/chatbots",
    title: "Chatbot",
    text: "Atendimento no WhatsApp e no site que conhece o seu negócio.",
  },
  {
    href: "/solucoes/automacoes",
    title: "Automação",
    text: "Documento, aprovação e cobrança correndo sem alguém empurrar a fila.",
  },
  {
    // A frente de sistemas mora na home.
    href: "/",
    title: "Sistema",
    text: "Software sob medida para a regra da sua operação.",
  },
];

const ETAPAS = ["Diagnóstico", "Desenho", "Construção", "Operação"];

function DoorLabel({ children }: { children: string }) {
  return <span className="nx-label-red block">{children}</span>;
}

export default function ComecePage() {
  const guias = GUIAS.filter((guia) => guia.publico);

  return (
    <>
      <PageJsonLd path="/comece" />
      <section className="relative overflow-hidden">
        <HeroBackdrop glowAt="22%" glowStrength={0.3} />
        {/* Topo curto de propósito: no celular, vindo da bio, a primeira porta
            precisa aparecer sem rolar. */}
        <div className="relative mx-auto max-w-[1280px] px-5 pt-12 pb-10 md:px-8 md:pt-24 md:pb-14 lg:px-12">
          <span className="nx-label">POR ONDE COMEÇAR</span>
          <h1 className="nx-h1-sub mt-[18px] max-w-[18ch]">
            Escolha por onde a sua empresa{" "}
            <span className="text-nx-red">começa.</span>
          </h1>
          <p className="nx-body-l mt-5 max-w-[56ch]">
            Na dúvida, comece pela conversa de diagnóstico.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 pb-24 md:px-8 lg:px-12">
        <div className="flex flex-col gap-5">
          <div className="nx-card-warm flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-10">
            <div className="max-w-[60ch]">
              <DoorLabel>NÃO SABE POR ONDE COMEÇAR?</DoorLabel>
              <h2 className="nx-h2 mt-5 mb-4">
                Conversa de diagnóstico, sem custo
              </h2>
              <p className="nx-body-l">
                A gente entende a sua operação, mostra o que dá para
                automatizar primeiro e define a menor entrega que já muda o
                dia da equipe.
              </p>
            </div>
            <a
              href={DIAGNOSTICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nx-btn shrink-0 self-start md:self-auto"
            >
              Quero meu diagnóstico →
            </a>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            <div className="nx-card p-8">
              <DoorLabel>JÁ SABE O QUE PRECISA?</DoorLabel>
              <p className="nx-h3 mt-5 mb-6">Vá direto à frente certa</p>
              <div className="flex flex-col">
                {FRENTES.map((frente) => (
                  <Link
                    key={frente.title}
                    href={frente.href}
                    className="group flex items-start justify-between gap-4 border-t border-nx-border py-4 hover:text-inherit"
                  >
                    <span>
                      <span className="block text-[17px]/[1.4] font-medium text-white">
                        {frente.title}
                      </span>
                      <span className="nx-body mt-1 block">{frente.text}</span>
                    </span>
                    <span
                      aria-hidden
                      className="pt-[2px] text-nx-red transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/cases"
              className="nx-card nx-card-hover flex flex-col p-8 hover:text-inherit"
            >
              <DoorLabel>QUER VER O QUE JÁ RODA?</DoorLabel>
              <p className="nx-h3 mt-5 mb-3">Cases em produção</p>
              <p className="nx-body mb-6">
                Cleanox e AppexCRM: sistemas que a Nodex construiu e que operam
                hoje.
              </p>
              <span className="mt-auto text-[14px]/[1] font-medium text-nx-red">
                Ver cases →
              </span>
            </Link>

            {guias.length > 0 ? (
              <div className="nx-card p-8">
                <DoorLabel>QUER APRENDER ANTES?</DoorLabel>
                <p className="nx-h3 mt-5 mb-6">Guias gratuitos</p>
                <div className="flex flex-col">
                  {guias.map((guia) => (
                    <Link
                      key={guia.slug}
                      href={`/guias/${guia.slug}/lead`}
                      className="flex items-center justify-between gap-4 border-t border-nx-border py-4 hover:text-inherit"
                    >
                      <span className="text-[16px]/[1.5] text-white">
                        {guia.titulo}
                      </span>
                      <span aria-hidden className="text-nx-red">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <Link
              href="/contato"
              className="nx-card nx-card-hover flex flex-col p-8 hover:text-inherit"
            >
              <DoorLabel>PREFERE ESCREVER COM CALMA?</DoorLabel>
              <p className="nx-h3 mt-5 mb-3">Formulário de contato</p>
              <p className="nx-body mb-6">
                Conta o problema em uma frase. A gente responde com o próximo
                passo.
              </p>
              <span className="mt-auto text-[14px]/[1] font-medium text-nx-red">
                Ir para o contato →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Section>
        <SectionHead
          eyebrow="COMO A GENTE TRABALHA"
          title="Do diagnóstico ao sistema em produção"
          lead="Quatro etapas, cada uma com uma entrega concreta. Você não troca o que já funciona: a gente liga no que já roda."
          className="mb-10"
        />
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px overflow-hidden rounded-[14px] border border-nx-border bg-nx-border">
          {ETAPAS.map((etapa, index) => (
            <li key={etapa} className="bg-nx-surface p-6">
              <span className="font-mono text-[12px]/[1] font-medium tracking-[0.2em] text-nx-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-[18px]/[1.3] font-medium text-white">
                {etapa}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-10 font-mono text-[13px]/[1.6] text-nx-muted">
          WHATSAPP ·{" "}
          <a
            href={DIAGNOSTICO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-nx-red"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
      </Section>
    </>
  );
}
