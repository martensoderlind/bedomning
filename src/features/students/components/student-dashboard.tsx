import React from "react";
import StudentForm from "./student-form";
import { studentsService } from "../instance";

export async function StudentDashboard() {
  const className = await studentsService.getAllClasses();
  return (
    <div className="mx-8 my-4">
      <p className="text-2xl font-bold pt-2">Criteria</p>
      <StudentForm classes={className} />
    </div>
  );
}
