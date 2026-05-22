import { NextResponse } from "next/server";
import { betterFetch } from "@better-fetch/fetch";

export async function middleware(request) {
  // Try to get session using better-auth's recommended approach for middleware
  // BetterAuth uses cookies internally. We need to proxy the cookie header.
  const authCookie = request.headers.get("cookie") || "";

  // The base URL must point to your Next.js app's absolute URL in middleware
  const baseURL = process.env.BETTER_AUTH_URL || request.nextUrl.origin;
  
  try {
    const { data: session } = await betterFetch("/api/auth/get-session", {
      baseURL,
      headers: {
        cookie: authCookie,
      },
    });

    // Protect `/profile` and `/products/[id]` routes
    const isProtectedRoute = 
      request.nextUrl.pathname.startsWith("/profile") || 
      /^\/products\/[^\/]+$/.test(request.nextUrl.pathname);

    if (!session && isProtectedRoute) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }

    // Prevent authenticated users from accessing signin/signup
    const isAuthRoute = request.nextUrl.pathname.startsWith("/signin") || request.nextUrl.pathname.startsWith("/signup");
    if (session && isAuthRoute) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    // If fetch fails (e.g. network error), allow next to handle it or redirect
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/products/:path*",
    "/signin",
    "/signup"
  ]
};
