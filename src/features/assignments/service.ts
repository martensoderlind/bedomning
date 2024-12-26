import { Db } from "@/db";
import { createRepository } from "./repository";

export async function createService(db: Db) {
  const repository = createRepository(db);
  return {
    async getAll() {
      return repository.getAll();
    },
  };
}
