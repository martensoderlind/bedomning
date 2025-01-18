"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ToggleMenu() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div className="flex bg-slate-200 rounded-md m-4 ml-6 pl-2">
      <Link
        href={"/course-management/assignments"}
        className={`my-2 pt-1 pr-2 rounded-md ${
          isActive("/course-management/assignments")
            ? "bg-black text-white"
            : "bg-slate-300 text-black"
        }`}
      >
        <p className="pt-1 pl-2">Assignments</p>
      </Link>
      <Link
        href={"/course-management/criteria"}
        className={`ml-2 my-2 pt-1 pr-2 text-slate-500 hover:text-slate-900 rounded-md ${
          isActive("/course-management/criteria")
            ? "bg-black text-white"
            : "bg-slate-300 text-black"
        }`}
      >
        <p className="pt-1 pl-2">Criteria</p>
      </Link>
      <Link
        href={"/course-management/course"}
        className={`mx-2 my-2 py-1 pr-2 text-slate-500 hover:text-slate-900 rounded-md ${
          isActive("/course-management/course")
            ? "bg-black text-white"
            : "bg-slate-300 text-black"
        }`}
      >
        <p className="pt-1 pl-2">Course</p>
      </Link>
      <Link
        href={"/course-management/students"}
        className={`mx-2 my-2 py-1 pr-2 text-slate-500 hover:text-slate-900 rounded-md ${
          isActive("/course-management/students")
            ? "bg-black text-white"
            : "bg-slate-300 text-black"
        }`}
      >
        <p className="pt-1 pl-2">Students</p>
      </Link>
      <Link
        href={"/course-management/classes"}
        className={`mx-2 my-2 py-1 pr-2 text-slate-500 hover:text-slate-900 rounded-md ${
          isActive("/course-management/classes")
            ? "bg-black text-white"
            : "bg-slate-300 text-black"
        }`}
      >
        <p className="pt-1 pl-2">Classes</p>
      </Link>
    </div>
  );
}
