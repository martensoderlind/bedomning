import { Db } from "@/db";
import { createRepository } from "./repository";
import { AssignmentType } from "./types";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    getAll: async () => {
      return await repository.getAll();
    },
    addAssignment: async (data: AssignmentType) => {
      await repository.addAssignment(data);
    },
    deleteAssignment: async (id: string) => {
      await repository.delete(id);
    },
  };
}
