import { NextResponse, type NextRequest } from "next/server";

function isTruthyEnv(value: string | undefined) {
  if (!value) return false;
  return value === "1" || value.toLowerCase() === "true" || value.toLowerCase() === "yes";
}

function shouldAllowWithoutGate(pathname: string) {
  if (pathname.startsWith("/_next")) return true;
  if (pathname === "/favicon.ico") return true;
  if (pathname === "/robots.txt") return true;
  if (pathname === "/sitemap.xml") return true;
  if (pathname === "/manifest.webmanifest") return true;
  if (pathname.startsWith("/__preview")) return true;
  if (pathname.startsWith("/coming-soon")) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldAllowWithoutGate(pathname)) {
    return NextResponse.next();
  }

  const vercelEnv = process.env.VERCEL_ENV;
  const comingSoon = isTruthyEnv(process.env.COMING_SOON);
  const previewSecret = process.env.PREVIEW_SECRET ?? "";

  const isProductionDeployment = vercelEnv === "production";
  const gateEnabled = comingSoon && isProductionDeployment && previewSecret.length > 0;

  if (!gateEnabled) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("cv_preview")?.value;
  if (cookie === previewSecret) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
