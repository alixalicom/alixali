import { NextResponse, type NextRequest } from "next/server";

function isSafeRelativePath(value: string) {
  if (!value.startsWith("/")) return false;
  if (value.startsWith("//")) return false;
  if (value.includes("\\")) return false;
  if (value.includes(":")) return false;
  return true;
}

export function GET(request: NextRequest) {
  const url = request.nextUrl;
  const token = url.searchParams.get("token") ?? "";
  const redirectTo = url.searchParams.get("redirect") ?? "/";

  const previewSecret = process.env.PREVIEW_SECRET ?? "";
  if (!previewSecret) {
    return NextResponse.json(
      { error: "Preview is not configured (missing PREVIEW_SECRET)." },
      { status: 500 },
    );
  }

  if (token !== previewSecret) {
    const denied = url.clone();
    denied.pathname = "/coming-soon";
    denied.search = "";
    denied.hash = "";
    return NextResponse.redirect(denied);
  }

  const destination = isSafeRelativePath(redirectTo) ? redirectTo : "/";
  const response = NextResponse.redirect(new URL(destination, url));

  const host = request.headers.get("host") ?? "";
  const isLocalhost =
    host.startsWith("localhost") || host.startsWith("127.0.0.1");

  response.cookies.set({
    name: "cv_preview",
    value: previewSecret,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
    secure: !isLocalhost,
    httpOnly: true,
  });

  return response;
}
