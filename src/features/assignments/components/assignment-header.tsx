"use client";
import AssignmentForm from "./assignment-form";

export default function AssignmentHeader() {
  return (
    <div className="mx-8 my-4">
      <p className="text-2xl font-bold pt-2 pl-3">Assignments</p>
      <AssignmentForm />
    </div>
  );
}
