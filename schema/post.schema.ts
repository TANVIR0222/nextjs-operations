import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const postTable = pgTable("post-table", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title").notNull(),
  descriptions: varchar("descriptions").notNull(),
});
