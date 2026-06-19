import { pgTable, integer, text, boolean, varchar } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const todo = pgTable("todo", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "todo_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	text: text().notNull(),
	done: boolean().default(false).notNull(),
});

export const postTable = pgTable("post-table", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: ""post-table_id_seq"", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647 }),
	title: varchar().notNull(),
	descriptions: varchar().notNull(),
});
