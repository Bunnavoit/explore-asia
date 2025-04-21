import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("todo", {
  id: integer("id").primaryKey().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  completed: integer("completed").notNull(),
});
