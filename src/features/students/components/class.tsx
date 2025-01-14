"use client";
import { ClassInfo } from "@/features/types";
import { ChevronRight, Trash2 } from "lucide-react";
import React from "react";
import { deleteClassAction } from "../actions";

type Prop = {
  classInfo: ClassInfo;
  lastClass: boolean;
};

export default function ClassInformation({ classInfo, lastClass }: Prop) {
  async function deleteClass() {
    await deleteClassAction(classInfo.id);
  }
  return (
    <div
      className={`flex justify-between my-2 py-2 ${
        lastClass ? undefined : "border-b-2"
      }`}
    >
      <p>{classInfo.className}</p>
      <div className="flex">
        <ChevronRight className="mx-4" />
        <button onClick={deleteClass}>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
