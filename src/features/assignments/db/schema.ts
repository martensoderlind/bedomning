import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const assignments = pgTable("assignments", {
  id: uuid("id").defaultRandom().primaryKey(),
  assignment: varchar("assignment").notNull(),
  criteria: integer("numbers").array(),
  description: varchar("description").notNull(),
});
