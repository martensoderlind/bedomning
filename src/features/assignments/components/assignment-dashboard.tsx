import React from "react";
import { dbAssignments } from "../db/mockdb";
import Assignment from "./assignment";
import { Plus } from "lucide-react";

export default function AssignmentDashboard() {
  const assignments = dbAssignments;
  return (
    <div className="container mx-auto my-4 w-full">
      <div className="flex justify-between mx-8 my-0">
        <p className="text-2xl font-bold pt-2 pl-3">Assignments</p>
        <button className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4">
          <Plus />
          Add Assignments
        </button>
      </div>
      <div className="rounded-md bg-white mx-8 my-2 py-2 px-4 border-1">
        {assignments.map((assignment) => (
          <Assignment key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}
