import type { Metadata } from "next";

import { CNPJ, EMAIL, PHONE_WHATSAPP } from "./site";

/** Host canônico em produção. O apex redireciona para www. */
export const SITE_URL = "https://www.nodexlabs.com.br";
export const SITE_NAME = "Nodex Labs";
export const SITE_DESCRIPTION =
  "Nodex Labs constrói chatbots, automações e sistemas sob medida. Engenharia e IA no mesmo time.";

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

export function pageCanonical(
  path: string,
): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: { url: path },
  };
}

export function siteJsonLd() {
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
        knowsAbout: [
          "chatbots",
          "automações",
          "sistemas sob medida",
          "inteligência artificial",
        ],
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
