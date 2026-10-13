import { NextResponse } from "next/server";

import { guiaPorIsca, UTM_KEYS } from "@/lib/guias";

const SUPABASE_URL = process.env.SUPABASE_URL?.trim();
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY?.trim();

function campo(form: FormData, nome: string, max: number) {
  return String(form.get(nome) ?? "").trim().slice(0, max);
}

/**
 * Recebe o formulário de um guia e grava o lead na tabela `isca_leads` do
 * Supabase. A chave usada é a anon: o RLS da tabela só permite INSERT, então
 * ninguém consegue ler os leads com ela.
 */
export async function POST(request: Request) {
  const form = await request.formData();

  const nome = campo(form, "nome", 120);
  const email = campo(form, "email", 200);
  const whatsapp = campo(form, "whatsapp", 40);
  const guia = guiaPorIsca(campo(form, "isca", 120));

  if (!nome || !email.includes("@") || !whatsapp) {
    return NextResponse.json(
      { error: "Preencha nome, e-mail e WhatsApp." },
      { status: 400 },
    );
  }

  if (!guia) {
    return NextResponse.json({ error: "Guia não encontrado." }, { status: 400 });
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error("[guias] SUPABASE_URL ou SUPABASE_ANON_KEY ausente");
    return NextResponse.json(
      { error: "Não conseguimos enviar agora. Tente de novo." },
      { status: 503 },
    );
  }

  const utm = Object.fromEntries(
    UTM_KEYS.map((key) => [key, campo(form, key, 200) || null]),
  );

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/isca_leads`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        nome,
        email,
        whatsapp,
        isca: guia.isca,
        ...utm,
        ip:
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          null,
        user_agent: request.headers.get("user-agent")?.slice(0, 500) || null,
      }),
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) {
      console.error("[guias] Supabase recusou o lead", response.status);
      return NextResponse.json(
        { error: "Não conseguimos enviar agora. Tente de novo." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[guias] erro ao gravar lead", error);
    return NextResponse.json(
      { error: "Não conseguimos enviar agora. Tente de novo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, redirect: `/guias/${guia.slug}` });
}
