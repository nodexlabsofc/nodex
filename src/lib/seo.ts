import type { Metadata } from "next";

import { CNPJ, EMAIL, PHONE_WHATSAPP } from "./site";

/** Host canônico em produção. O apex redireciona para www. */
export const SITE_URL = "https://www.nodexlabs.com.br";
export const SITE_NAME = "Nodex Labs";
export const SITE_DESCRIPTION =
  "Nodex Labs constrói chatbots, automações e sistemas sob medida. Engenharia e IA no mesmo time.";

export type FaqEntry = { question: string; answer: string };

export const PUBLIC_PAGES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/solucoes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solucoes/chatbots", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solucoes/automacoes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/cases", changeFrequency: "monthly", priority: 0.8 },
  { path: "/cases/cleanox", changeFrequency: "monthly", priority: 0.7 },
  { path: "/cases/appexcrm", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sobre", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contato", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacidade", changeFrequency: "yearly", priority: 0.2 },
  { path: "/termos", changeFrequency: "yearly", priority: 0.2 },
] as const;

const HOME = { name: "Nodex Labs", path: "/" };

export const BREADCRUMBS: Record<string, { name: string; path: string }[]> = {
  "/solucoes": [HOME, { name: "Soluções", path: "/solucoes" }],
  "/solucoes/chatbots": [
    HOME,
    { name: "Soluções", path: "/solucoes" },
    { name: "Chatbots", path: "/solucoes/chatbots" },
  ],
  "/solucoes/automacoes": [
    HOME,
    { name: "Soluções", path: "/solucoes" },
    { name: "Automações", path: "/solucoes/automacoes" },
  ],
  "/cases": [HOME, { name: "Cases", path: "/cases" }],
  "/cases/cleanox": [
    HOME,
    { name: "Cases", path: "/cases" },
    { name: "Cleanox", path: "/cases/cleanox" },
  ],
  "/cases/appexcrm": [
    HOME,
    { name: "Cases", path: "/cases" },
    { name: "AppexCRM", path: "/cases/appexcrm" },
  ],
  "/sobre": [HOME, { name: "Sobre", path: "/sobre" }],
  "/contato": [HOME, { name: "Contato", path: "/contato" }],
  "/privacidade": [HOME, { name: "Privacidade", path: "/privacidade" }],
  "/termos": [HOME, { name: "Termos", path: "/termos" }],
};

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function pageMeta(
  path: string,
  meta: { title?: string; description?: string } = {},
): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      ...(meta.title ? { title: meta.title } : {}),
      ...(meta.description ? { description: meta.description } : {}),
    },
  };
}

export function breadcrumbJsonLd(path: string) {
  const items = BREADCRUMBS[path];
  if (!items) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: readonly FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function siteJsonLd() {
  const sistemas = absoluteUrl("/");
  const chatbots = absoluteUrl("/solucoes/chatbots");
  const automacoes = absoluteUrl("/solucoes/automacoes");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo-on-black.png`,
        image: `${SITE_URL}/assets/logo-on-black.png`,
        email: EMAIL,
        telephone: `+${PHONE_WHATSAPP}`,
        taxID: CNPJ,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Marcos Albino, 300, km 12",
          addressLocality: "Itajaí",
          addressRegion: "SC",
          addressCountry: "BR",
        },
        areaServed: { "@type": "Country", name: "Brazil" },
        founder: [
          { "@type": "Person", name: "Dennis Fernandes" },
          { "@type": "Person", name: "Leonardo Groff" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: EMAIL,
          telephone: `+${PHONE_WHATSAPP}`,
          availableLanguage: ["Portuguese", "English"],
        },
        knowsAbout: [
          "chatbots",
          "automações",
          "sistemas sob medida",
          "inteligência artificial",
          "WhatsApp",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Soluções Nodex Labs",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sistemas sob medida",
                url: sistemas,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Chatbots",
                url: chatbots,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Automações",
                url: automacoes,
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
