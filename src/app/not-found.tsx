import Link from "next/link";

import { HeroBackdrop } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop glowAt="30%" glowStrength={0.3} />
      <div className="relative mx-auto max-w-[1280px] px-5 py-28 md:px-8 lg:px-12">
        <span className="nx-label">404</span>
        <h1 className="nx-h1-sub mt-[22px]">Essa página não existe.</h1>
        <p className="nx-body-l mt-6 max-w-[46ch]">
          O endereço mudou ou nunca existiu. Escolhe uma página abaixo.
        </p>
        <div className="mt-11 flex flex-wrap gap-[14px]">
          <Link href="/" className="nx-btn">
            Sistemas
          </Link>
          <Link href="/solucoes" className="nx-btn-ghost">
            Soluções
          </Link>
          <Link href="/cases" className="nx-btn-ghost">
            Cases
          </Link>
          <Link href="/contato" className="nx-btn-ghost">
            Contato
          </Link>
        </div>
      </div>
    </section>
  );
}
