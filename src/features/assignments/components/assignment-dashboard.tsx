import React from "react";
import Assignment from "./assignment";
import { assignmentService } from "../instance";
import AssignmentHeader from "./assignment-header";

export async function AssignmentDashboard() {
  const assignments = await assignmentService.getAll();
  console.log(assignments);
  if (!assignments) {
    return (
      <div className="container mx-auto my-4 w-full">
        <AssignmentHeader />
        <div className="rounded-md bg-white mx-8 my-2 py-2 px-4 border-1"></div>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-4 w-full">
      <AssignmentHeader />
      <div className="rounded-md bg-white mx-8 my-2 py-2 px-4 border-1">
        {assignments.map((assignment) => (
          <Assignment key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}
