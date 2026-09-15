import {
  breadcrumbJsonLd,
  faqJsonLd,
  type FaqEntry,
} from "@/lib/seo";

export function JsonLd({ data }: { data: unknown }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function PageJsonLd({
  path,
  faq,
}: {
  path: string;
  faq?: readonly FaqEntry[];
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(path)} />
      {faq && faq.length > 0 ? <JsonLd data={faqJsonLd(faq)} /> : null}
    </>
  );
}
