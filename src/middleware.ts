import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const searchParams = request.nextUrl.search;
  headers.set("x-current-path", request.nextUrl.pathname);
  headers.set("x-current-search", JSON.stringify(searchParams));

  return NextResponse.next({ headers });
}

export const config = {
  matcher: [
    // Match all dynamic routes except for sitemap.xml and robots.txt
    "/((?!sitemap.xml|robots.txt|api|_next/static|_next/image|favicon.ico|images|fonts|css|js).*)",
  ],
};
