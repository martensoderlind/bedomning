"use server";

import { revalidatePath } from "next/cache";
import { AssignmentType } from "./types";
import { assignmentService } from "./instance";

export async function addAssignmentAction(assignment: AssignmentType) {
  assignmentService.addAssignment(assignment);
  revalidatePath("/assignments");
}
