import { Db } from "@/db";
import { assignmentCriteria, assignments, course, criteria } from "./db";
import { AssignmentType, Criteria } from "./types";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

export function createRepository(db: Db) {
  return {
    async getAll() {
      return db.select().from(assignments);
    },
    async getAllCourses() {
      return db.select().from(course);
    },
    async getAllCriteria() {
      return db.select().from(criteria);
    },
    async addAssignment(assignment: AssignmentType) {
      const assignmentId = uuidv4();
      await db.insert(assignments).values({
        id: assignmentId,
        assignment: assignment.assignment,
        course: assignment.course,
        description: assignment.description,
      });
      await db.insert(assignmentCriteria).values([
        {
          assignmentId: assignmentId,
          criteriaId: "första-criteria-id",
        },
        {
          assignmentId: assignmentId,
          criteriaId: "andra-criteria-id",
        },
      ]);
    },
    async deleteAssignment(id: string) {
      db.delete(assignments).where(eq(assignments.id, id));
    },
    async addCriteria(newCriteria: Criteria) {
      await db.insert(criteria).values({
        course: newCriteria.course,
        grade: newCriteria.grade,
        criteria: newCriteria.criteria,
      });
    },
    async addCourse(name: string) {
      await db.insert(course).values({ name: name });
    },
  };
}
