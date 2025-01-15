import { Db } from "@/db";
import { createRepository } from "./repository";
import { AssignmentType, Criteria } from "./types";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    getAll: async () => {
      return await repository.getAll();
    },
    getAllCourses: async () => {
      return await repository.getAllCourses();
    },
    addAssignment: async (data: AssignmentType) => {
      await repository.addAssignment(data);
    },
    deleteAssignment: async (id: string) => {
      await repository.deleteAssignment(id);
    },
    addCourse: async (id: string) => {
      await repository.addCourse(id);
    },
    addCriteria: async (criteria: Criteria) => {
      await repository.addCriteria(criteria);
    },
  };
}
