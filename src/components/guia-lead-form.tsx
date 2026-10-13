"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { UTM_KEYS } from "@/lib/guias";

type Status = "editing" | "sending" | "error";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[12px]/[1] font-medium tracking-[0.16em] text-nx-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

/**
 * Formulário de captura de um guia. Grava o lead via /api/guias/lead e leva a
 * pessoa ao conteúdo, mantendo os parâmetros de origem (UTM) do link do post.
 */
export function GuiaLeadForm({
  isca,
  slug,
  cta = "Quero o guia",
}: {
  isca: string;
  slug: string;
  cta?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("editing");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const data = new FormData(event.currentTarget);
    data.set("isca", isca);

    // Lido na hora do envio: dispensa useSearchParams e o Suspense que ele exige.
    const query = new URLSearchParams(window.location.search);
    const origem = new URLSearchParams();
    for (const key of UTM_KEYS) {
      const value = query.get(key);
      if (value) {
        data.set(key, value);
        origem.set(key, value);
      }
    }

    try {
      const response = await fetch("/api/guias/lead", {
        method: "POST",
        body: data,
      });
      if (!response.ok) throw new Error(String(response.status));

      const fbq = (window as Window & { fbq?: (...args: unknown[]) => void })
        .fbq;
      fbq?.("track", "Lead", { content_name: isca });

      const suffix = origem.toString();
      router.push(`/guias/${slug}${suffix ? `?${suffix}` : ""}`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
      <Field label="NOME">
        <input
          type="text"
          name="nome"
          required
          autoComplete="name"
          placeholder="Digite seu nome"
          className="nx-input"
        />
      </Field>

      <Field label="E-MAIL">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Informe um e-mail válido"
          className="nx-input"
        />
      </Field>

      <Field label="WHATSAPP">
        <input
          type="tel"
          name="whatsapp"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="Digite seu WhatsApp"
          className="nx-input"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="nx-btn mt-1 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : cta}
      </button>

      {status === "error" ? (
        <p
          role="alert"
          className="text-[14px]/[1.5] font-light text-nx-red-hover"
        >
          Não conseguimos enviar agora. Tente de novo.
        </p>
      ) : null}

      <p className="text-[13px]/[1.5] font-light text-nx-dim">
        Ao enviar, você recebe o guia e pode receber conteúdos relacionados da
        Nodex Labs. Leia a{" "}
        <a href="/privacidade" className="text-nx-muted underline">
          política de privacidade
        </a>
        ; você pode pedir a exclusão dos seus dados quando quiser.
      </p>
    </form>
  );
}
