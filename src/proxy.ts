import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.nodexlabs.com.br";

/**
 * Concentra o Google no domínio canônico e impede que as URLs *.vercel.app
 * virem cópia indexada do site.
 */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host === "nodex-gold.vercel.app") {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  if (host.endsWith(".vercel.app")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|assets/).*)"],
};
