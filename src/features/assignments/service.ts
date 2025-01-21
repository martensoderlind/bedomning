import { Db } from "@/db";
import { createRepository } from "./repository";
import { AddAssignment, Criteria } from "./types";
import { v4 as uuidv4 } from "uuid";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    getAll: async () => {
      return await repository.getAll();
    },
    getAllCourses: async () => {
      return await repository.getAllCourses();
    },
    getAllCriteria: async () => {
      return await repository.getAllCriteria();
    },
    addAssignment: async (data: AddAssignment) => {
      const id = uuidv4();
      await repository.addAssignment(data, id);

      await repository.addAssignmentCriteria(data.criteria, id);
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
