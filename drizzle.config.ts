import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import path from "path";

export default defineConfig({
  out: "./drizzle",
  schema: "./common/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ||
      (() => {
        throw new Error("DATABASE_URL is not defined");
      })(),
  },
});
