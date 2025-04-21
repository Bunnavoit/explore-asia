// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of routes where authenticated users should be redirected *away* from
const authPages = ["/auth/sign-in", "/auth/sign-up"];
const protectedPages = ["/destiny"]; // Only logged-in users can access

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("better-auth.session_token")?.value; // Replace with your actual cookie name

  // 🚫 If logged in and trying to go to login or signup, redirect to homepage
  if (token && authPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If token exists and user tries to access login/signup -> redirect to home
  if (!token && protectedPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/destiny"],
};
