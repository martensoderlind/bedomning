import React from "react";
import { AssignmentType } from "../types";

type Props = {
  assignment: AssignmentType;
};

export default function Assignment({ assignment }: Props) {
  return (
    <div className="flex">
      <p>Assignment {assignment.assignment}</p>
      <p>criteria {assignment.criteria}</p>
    </div>
  );
}
