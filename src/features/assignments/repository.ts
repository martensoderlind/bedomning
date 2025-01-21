import { Db } from "@/db";
import { assignmentCriteria, assignments, course, criteria } from "./db";
import { AssignmentType, Criteria, CriteriaForm } from "./types";
import { eq } from "drizzle-orm";

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
    async addAssignmentCriteria(
      criteriaIds: CriteriaForm[],
      assignmentId: string
    ) {
      const valuesToInsert = criteriaIds.map((criteriaId) => ({
        assignmentId: assignmentId,
        criteriaId: criteriaId.id,
      }));

      await db.insert(assignmentCriteria).values(valuesToInsert);
    },
    async addAssignment(assignment: AssignmentType, id: string) {
      await db.insert(assignments).values({
        id: id,
        assignment: assignment.assignment,
        course: assignment.course,
        description: assignment.description,
      });
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
