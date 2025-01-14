import { Db } from "@/db";
import { classTable, student } from "./db/schema";
import { eq } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async getAllStudents() {
      return await db.select().from(student);
    },
    async getAllClasses() {
      return await db.select().from(classTable);
    },
    async addClass(name: string) {
      await db.insert(classTable).values({ className: name });
    },
    async deleteClass(id: string) {
      await db.delete(classTable).where(eq(classTable.id, id));
    },
  };
}
