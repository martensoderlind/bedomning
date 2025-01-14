import { relations } from "drizzle-orm";
import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const assignments = pgTable("assignments", {
  id: uuid("id").defaultRandom().primaryKey(),
  course: uuid("course_id")
    .notNull()
    .references(() => course.id, { onDelete: "cascade" }),
  assignment: varchar("assignment").notNull(),
  description: varchar("description").notNull(),
});

export const criteria = pgTable("criteria", {
  id: uuid("id").defaultRandom().primaryKey(),
  course: uuid("course_id")
    .notNull()
    .references(() => course.id, { onDelete: "cascade" }),
  grade: varchar("grade").notNull(),
  criteria: varchar("criteria").notNull(),
});

export const course = pgTable("course", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name").notNull(),
});

export const assignmentCriteria = pgTable("assignment_criteria", {
  assignmentId: uuid("assignment_id").references(() => assignments.id),
  criteriaId: uuid("criteria_id").references(() => criteria.id),
});

export const assignmentRelations = relations(assignments, ({ many }) => ({
  criteria: many(assignmentCriteria),
}));

export const criteriaRelations = relations(criteria, ({ many }) => ({
  assignments: many(assignmentCriteria),
}));

export const assignmentCriteriaRelations = relations(
  assignmentCriteria,
  ({ one }) => ({
    assignment: one(assignments, {
      fields: [assignmentCriteria.assignmentId],
      references: [assignments.id],
    }),
    criteria: one(criteria, {
      fields: [assignmentCriteria.criteriaId],
      references: [criteria.id],
    }),
  })
);

export const studentAssignment = pgTable("studentAssignment", {
  id: uuid("id").defaultRandom().primaryKey(),
  assignmentId: varchar("assignmentId").notNull(),
  studentId: varchar("studentId").notNull(),
  grade: integer("grade").array(),
  criteria: varchar("criteria").notNull(),
  comment: varchar("comment"),
});
