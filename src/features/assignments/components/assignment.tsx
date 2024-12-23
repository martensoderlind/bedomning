import React from "react";
import { AssignmentType } from "../types";
import { ChevronDown } from "lucide-react";

type Props = {
  assignment: AssignmentType;
};

export default function Assignment({ assignment }: Props) {
  return (
    <div className="flex justify-between my-2 border-b-2">
      <p>{assignment.assignment}</p>
      <ChevronDown />
    </div>
  );
}
