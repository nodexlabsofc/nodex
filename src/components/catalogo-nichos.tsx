"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { GRUPOS, NICHOS, type Grupo, type Nicho } from "@/lib/catalogo";

const TODOS = "Todos";

/** Normaliza para a busca ignorar acento e caixa. */
function plain(text: string) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function matches(nicho: Nicho, query: string) {
  if (!query) return true;
  const haystack = plain(
    [
      nicho.nome,
      nicho.dor,
      nicho.sistema,
      nicho.primeiraEntrega,
      ...nicho.agentes,
      ...nicho.automacoes,
    ].join(" "),
  );
  return plain(query)
    .split(/\s+/)
    .every((word) => haystack.includes(word));
}

/**
 * Filtro por grupo + busca livre sobre a lista de nichos. Cada nicho abre num
 * card com o que o agente faz, o sistema por trás e a primeira entrega.
 */
export function CatalogoNichos() {
  const [grupo, setGrupo] = useState<Grupo | typeof TODOS>(TODOS);
  const [query, setQuery] = useState("");

  // Link direto para um ramo (/catalogo#advocacia) já abre o card certo.
  useEffect(() => {
    const slug = window.location.hash.slice(1);
    const card = slug ? document.getElementById(slug) : null;
    if (card instanceof HTMLDetailsElement) {
      card.open = true;
      // Espera o layout assentar; sem isso o scroll volta para o topo.
      setTimeout(
        () => card.scrollIntoView({ block: "start", behavior: "instant" }),
        150,
      );
    }
  }, []);

  const visiveis = useMemo(
    () =>
      NICHOS.filter(
        (n) => (grupo === TODOS || n.grupo === grupo) && matches(n, query),
      ),
    [grupo, query],
  );

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5">
        <label className="block max-w-[520px]">
          <span className="sr-only">Buscar nicho ou solução</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busque seu ramo ou uma tarefa: clínica, cobrança, estoque…"
            className="nx-input"
          />
        </label>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar por área"
        >
          {[TODOS, ...GRUPOS].map((g) => {
            const active = g === grupo;
            return (
              <button
                key={g}
                type="button"
                aria-pressed={active}
                onClick={() => setGrupo(g as Grupo | typeof TODOS)}
                className={`cursor-pointer rounded-full border px-4 py-[10px] font-mono text-[11px]/[1] font-medium tracking-[0.14em] uppercase transition-colors duration-160 ${
                  active
                    ? "border-nx-red bg-nx-red text-white"
                    : "border-nx-border text-nx-muted hover:border-nx-red hover:text-nx-red-hover"
                }`}
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      {visiveis.length === 0 ? (
        <div className="nx-card p-8">
          <p className="nx-h3 mb-2">Seu ramo não está na lista?</p>
          <p className="nx-body mb-6">
            A lista é um ponto de partida. Se a tarefa se repete, dá para
            automatizar.
          </p>
          <Link href="/contato" className="nx-btn">
            Fale com a Nodex
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,360px),1fr))] gap-5">
          {visiveis.map((n) => (
            <NichoCard key={n.slug} nicho={n} />
          ))}
        </div>
      )}
    </div>
  );
}

function NichoCard({ nicho }: { nicho: Nicho }) {
  return (
    <details
      id={nicho.slug}
      className="nx-card nx-card-hover group scroll-mt-28 self-start"
    >
      <summary className="flex cursor-pointer list-none flex-col gap-3 p-7 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[11px]/[1] font-medium tracking-[0.18em] text-nx-red uppercase">
            {nicho.grupo}
          </span>
          <span
            aria-hidden
            className="font-mono text-[20px]/[1] text-nx-red transition-transform duration-160 group-open:rotate-45"
          >
            +
          </span>
        </div>
        <h3 className="nx-h3">{nicho.nome}</h3>
        <p className="nx-body">{nicho.dor}</p>
      </summary>

      <div className="flex flex-col gap-6 border-t border-nx-border px-7 pt-6 pb-7">
        <Bloco titulo="Agentes de IA">
          <ul className="flex flex-col gap-[10px]">
            {nicho.agentes.map((a) => (
              <li
                key={a}
                className="flex gap-3 text-[15px]/[1.6] font-light text-nx-text-2"
              >
                <span
                  aria-hidden
                  className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-[1px] bg-nx-red"
                />
                {a}
              </li>
            ))}
          </ul>
        </Bloco>
        <Bloco titulo="Sistema">
          <p className="text-[15px]/[1.6] font-light text-nx-text-2">
            {nicho.sistema}
          </p>
        </Bloco>
        <Bloco titulo="Automações">
          <div className="flex flex-wrap gap-2">
            {nicho.automacoes.map((a) => (
              <span
                key={a}
                className="rounded-full border border-nx-border px-3 py-[7px] text-[13px]/[1] text-nx-muted"
              >
                {a}
              </span>
            ))}
          </div>
        </Bloco>
        <div className="nx-card-warm p-5">
          <span className="font-mono text-[11px]/[1] font-medium tracking-[0.18em] text-nx-red">
            PRIMEIRA ENTREGA
          </span>
          <p className="mt-3 text-[16px]/[1.5] text-white">
            {nicho.primeiraEntrega}
          </p>
        </div>
        {nicho.caseHref ? (
          <Link
            href={nicho.caseHref}
            className="text-[14px]/[1] font-medium text-nx-red"
          >
            Ver o case em produção →
          </Link>
        ) : null}
      </div>
    </details>
  );
}

function Bloco({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 font-mono text-[11px]/[1] font-medium tracking-[0.18em] text-nx-muted uppercase">
        {titulo}
      </p>
      {children}
    </div>
  );
}
