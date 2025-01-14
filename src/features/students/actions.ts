"use server";

import { revalidatePath } from "next/cache";
import { studentsService } from "./instance";

export async function addClassAction(name: string) {
  studentsService.addClass(name);
  revalidatePath("/classes");
}
export async function deleteClassAction(id: string) {
  studentsService.deleteClass(id);
  revalidatePath("/classes");
}
