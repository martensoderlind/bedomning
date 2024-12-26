import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const assignments = pgTable("assignments", {
  id: uuid("id").defaultRandom().primaryKey(),
  assignment: varchar("assignment").notNull(),
  criteria: integer("numbers").array(),
  description: varchar("description").notNull(),
});
export const studentAssignment = pgTable("studentAssignment", {
  id: uuid("id").defaultRandom().primaryKey(),
  assignmentId: varchar("assignmentId").notNull(),
  studentId: varchar("studentId").notNull(),
  grade: integer("grade").array(),
  criteria: varchar("criteria").notNull(),
  comment: varchar("comment"),
});
