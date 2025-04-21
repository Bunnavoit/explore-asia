import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import path from "path";

export default defineConfig({
  out: "./drizzle",
  schema: "./common/lib/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
