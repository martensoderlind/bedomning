"use server";

import { revalidatePath } from "next/cache";
import { AssignmentType, Criteria } from "./types";
import { assignmentService } from "./instance";

export async function addAssignmentAction(assignment: AssignmentType) {
  assignmentService.addAssignment(assignment);
  revalidatePath("/assignments");
}
export async function addCourseAction(name: string) {
  await assignmentService.addCourse(name);
  revalidatePath("/assignments");
}
export async function addCriteriaAction(criteria: Criteria) {
  await assignmentService.addCriteria(criteria);
  revalidatePath("/assignments");
}