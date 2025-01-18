import { Db } from "@/db";
import { createRepository } from "./repository";
import { StudentType } from "../types";

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
    addStudent: async (student: StudentType) => {
      await repository.addStudent(student);
    },
    deleteClass: async (id: string) => {
      await repository.deleteClass(id);
    },
  };
}
