import React from "react";
import CriteriaForm from "./criteria-form";
import { assignmentService } from "../instance";

export async function CriteriaDashboard() {
  const courses = await assignmentService.getAllCourses();
  return (
    <div className="mx-8 my-4">
      <p className="text-2xl font-bold pt-2">Criteria</p>
      <CriteriaForm courses={courses} />
    </div>
  );
}
