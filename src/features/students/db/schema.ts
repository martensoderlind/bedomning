import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const classTable = pgTable("classTable", {
  id: uuid("id").defaultRandom().primaryKey(),
  className: varchar("class").notNull(),
});
export const student = pgTable("student", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  className: varchar("class").notNull(),
});
