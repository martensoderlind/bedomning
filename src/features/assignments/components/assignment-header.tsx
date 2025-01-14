"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import AssignmentForm from "./assignment-form";
import CourseForm from "./course-form";
import CriteriaForm from "./criteria-form";

export default function AssignmentHeader() {
  const [addAssignment, setAddAssignment] = useState(false);

  function toggleForm() {
    setAddAssignment(!addAssignment);
  }

  if (!addAssignment) {
    return (
      <div className="flex justify-between mx-8 my-4">
        <p className="text-2xl font-bold pt-2 pl-3">Assignments</p>
        <div>
          <button
            className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4 my-0"
            onClick={toggleForm}
          >
            <Plus />
            Add Assignments
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-8 my-4">
      <p className="text-2xl font-bold pt-2 pl-3">Assignments</p>
      <AssignmentForm
        setAddAssignment={setAddAssignment}
        addAssignment={addAssignment}
      />
      <CourseForm
        setAddAssignment={setAddAssignment}
        addAssignment={addAssignment}
      />
      <CriteriaForm
        setAddAssignment={setAddAssignment}
        addAssignment={addAssignment}
      />
    </div>
  );
}
