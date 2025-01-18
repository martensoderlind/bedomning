"use server";

import { revalidatePath } from "next/cache";
import { studentsService } from "./instance";
import { StudentType } from "../types";

export async function addClassAction(name: string) {
  await studentsService.addClass(name);
  revalidatePath("/classes");
}
export async function addStudentAction(student: StudentType) {
  await studentsService.addStudent(student);
  revalidatePath("/classes");
}
export async function deleteClassAction(id: string) {
  await studentsService.deleteClass(id);
  revalidatePath("/classes");
}
