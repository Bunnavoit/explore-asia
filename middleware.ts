// middleware.ts
export { auth as middleware } from "@/common/lib/db/auth";

export const config = {
  matcher: [
    "/user",
    "/user/:path*", // Protect everything inside /user
    "/desnity/:path*", // Protect everything inside /desnity
    "/desnity", // Also protect the main /desnity route
  ],
};
