import { Db } from "@/db";
import { assignmentCriteria, assignments } from "./db/schema";
import { AssignmentType } from "./types";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

export function createRepository(db: Db) {
  return {
    async getAll() {
      return db.select().from(assignments);
    },
    async addAssignment(assignment: AssignmentType) {
      const assignmentId = uuidv4();
      await db.insert(assignments).values({
        id: assignmentId,
        assignment: assignment.assignment,
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
    async delete(id: string) {
      db.delete(assignments).where(eq(assignments.id, id));
    },
  };
}
