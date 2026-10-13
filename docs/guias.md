# Guias (iscas) no site

Guia é material gratuito entregue em troca do contato. Cada post com CTA de comentário leva a um
guia; o lead preenche o formulário, cai no conteúdo e pode baixar o PDF.

## Onde fica cada coisa

```
src/lib/guias.ts                    # registro de todos os guias (a API só aceita os daqui)
src/app/api/guias/lead/route.ts     # grava o lead no Supabase (tabela isca_leads)
src/components/guia-lead-form.tsx   # formulário de captura (preserva as UTMs)
src/app/guias/{slug}/lead/page.tsx  # página de captura
src/app/guias/{slug}/page.tsx       # conteúdo
src/app/guias/{slug}/pdf/route.ts   # PDF (jsPDF)
docs/INDICE-CTAS.md                 # palavras-chave de CTA já usadas
```

`/guias/teste` é o guia de teste da estrutura: copie a pasta como molde e não o publique como
conteúdo (está com `noindex`).

## Criar um guia novo

1. **Reserve a palavra do CTA** em `docs/INDICE-CTAS.md` (sem repetir, sem ser pedaço de outra).
2. **Registre o guia** em `src/lib/guias.ts`: `slug` (minúsculo, com hífen), `isca` (único, ex.
   `agentes-pme-2026`), `titulo` e `publico: true` quando for pro ar.
3. **Copie `src/app/guias/teste/`** para `src/app/guias/{slug}/` e troque:
   - no `lead/page.tsx`, o texto e as props `isca` e `slug` do `GuiaLeadForm`;
   - no `page.tsx`, o conteúdo;
   - no `pdf/route.ts`, o texto e o nome do arquivo.
   Tire o `robots: { index: false }` das páginas de um guia público.
4. **Pesquise antes de escrever** (skill `gerar-iscas`, `materiais/02-pesquisa/`): o guia entrega
   de 3 a 5 vezes mais profundidade que o post. Nunca invente número, cliente, prazo ou link; dado
   de terceiro entra atribuído à fonte.
5. **Identidade e voz:** só as classes e componentes do site (`nx-h1-sub`, `nx-body-l`, `nx-card`,
   `nx-btn`, `Section`, `CtaForm`). Tom da Nodex: frase curta, verbo no presente, sem
   "revolucionário", "mágico" ou "infinito".
6. **PDF sem acento:** o jsPDF usa Helvetica padrão, que quebra com acentuação. Escreva "conversao",
   "voce" no texto do `route.ts`.
7. **Sitemap:** guia público entra em `PUBLIC_PAGES` de `src/lib/seo.ts`.
8. **Confira:** `npm run lint`, `npm run build`, e no `npm run dev` abra `/guias/{slug}/lead`,
   envie o formulário e confira o lead no Supabase e o download do PDF.
9. **Publique por pull request.** O merge na `main` publica em www.nodexlabs.com.br.

## Link pro post

Sempre o link completo, com a origem:

```
https://www.nodexlabs.com.br/guias/{slug}/lead?utm_source=instagram&utm_medium=reels&utm_campaign={tema}&utm_content={AAAA-MM-DD}
```

## Variáveis de ambiente

`SUPABASE_URL` e `SUPABASE_ANON_KEY`, lidas só pelo servidor (sem `NEXT_PUBLIC_`). Na Vercel:
Project → Settings → Environment Variables, em Production e Preview. A anon key só consegue
gravar (o RLS da tabela não tem policy de leitura). Nunca use a `service_role` aqui.
