// lib/auth/index.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import { account, session, user, verification } from "../db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // ← tell Better Auth this is Postgres
    schema: {
      user: user,
      session: session,
      account: account,
      verification: verification,
    },
  }),

  // (optional) enable email+password if you haven’t already:
  emailAndPassword: {
    enabled: true,
  },
});
