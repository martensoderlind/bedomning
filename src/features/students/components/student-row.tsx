import { StudentType } from "@/features/types";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  student: StudentType;
};

export default function Student({ student }: Props) {
  return (
    <Link href={`/students/${student.id - 1}`}>
      <div className="flex flex-row gap-3 align-baseline py-2">
        <div className="flex">
          <CircleUser className="mt-3 mx-2" size={32} />
          <div>
            <p>{student.name}</p>
            <p className="text-sm">{student.email}</p>
          </div>
        </div>
        <p className="mt-3">{student.class}</p>
      </div>
    </Link>
  );
}
