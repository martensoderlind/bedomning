import React from "react";
import { dbAssignments } from "../db/mockdb";
import Assignment from "./assignment";

export default function AssignmentDashboard() {
  const assignments = dbAssignments;
  return (
    <div>
      {assignments.map((assignment) => (
        <Assignment key={assignment.id} assignment={assignment} />
      ))}
    </div>
  );
}
