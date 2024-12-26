import { ClassInfo } from "@/features/types";
import { ChevronRight } from "lucide-react";
import React from "react";

type Prop = {
  classInfo: ClassInfo;
};

export default function ClassInformation({ classInfo }: Prop) {
  return (
    <div className="flex justify-between my-2 border-b-2">
      <p>{classInfo.name}</p>
      <ChevronRight />
    </div>
  );
}
