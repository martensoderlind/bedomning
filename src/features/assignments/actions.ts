"use server";

import { revalidatePath } from "next/cache";
import { AddAssignment, Criteria } from "./types";
import { assignmentService } from "./instance";

export async function addAssignmentAction(assignment: AddAssignment) {
  assignmentService.addAssignment(assignment);
  revalidatePath("/course-management/assignments");
}
export async function addCourseAction(name: string) {
  await assignmentService.addCourse(name);
  revalidatePath("/course-management/assignments");
}
export async function addCriteriaAction(criteria: Criteria) {
  await assignmentService.addCriteria(criteria);
  revalidatePath("/assignments");
}
