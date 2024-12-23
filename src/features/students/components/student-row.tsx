import { StudentType } from "@/features/types";
import { CircleUser, Ellipsis } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  student: StudentType;
};

export default function Student({ student }: Props) {
  return (
    <div className="grid grid-cols-7  align-baseline py-2 w-full">
      <div className="flex col-span-2">
        <CircleUser className="mt-3 mx-2" size={32} />
        <div>
          <Link href={`/students/${student.id - 1}`}>
            <p className="text-low">{student.name}</p>
          </Link>
          <p className="text-gray-500 text-sm pt-0">{student.email}</p>
        </div>
      </div>
      <p className="mt-3 pl-5 col-span-2">{student.grade}</p>
      <p className="mt-3 pl-4 col-span-2">{student.class}</p>
      <Ellipsis className="mt-4 col-span-1 items-end" />
    </div>
  );
}
