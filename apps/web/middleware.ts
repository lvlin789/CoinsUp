import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(ua);

  if (request.nextUrl.pathname === "/") {
    const target = isMobile ? "/mobile" : "/pc";
    return NextResponse.rewrite(new URL(target, request.url));
  }

  return NextResponse.next();
}
