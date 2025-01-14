import { Db } from "@/db";
import { createRepository } from "./repository";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    getAllClasses: async () => {
      return await repository.getAllClasses();
    },
    getAllStudents: async () => {
      return await repository.getAllStudents();
    },
    addClass: async (name: string) => {
      await repository.addClass(name);
    },
  };
}
