import { Db } from "@/db";
import { assignments } from "./db/schema";

export function createRepository(db: Db) {
  return {
    async getAll() {
      return db.select().from(assignments);
    },
  };
}
