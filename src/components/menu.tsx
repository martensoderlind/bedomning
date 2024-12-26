"use client";
import { usePathname } from "next/navigation";
import { FileText, House, User, Users } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div className="h-screen bg-white border-r w-auto px-2 pr-4">
      <Link
        href={"/"}
        className={`flex ml-2 my-2 p-2 text-slate-500 hover:text-slate-900 ${
          isActive("/") ? "bg-slate-200 rounded-md" : undefined
        }`}
      >
        <House />
        <p className="pt-1 pl-2 ">Home</p>
      </Link>
      <Link
        href={"/students"}
        className={`flex ml-2 my-2 p-2 text-slate-500 hover:text-slate-900 ${
          isActive("/students") ? "bg-slate-200 rounded-md" : undefined
        }`}
      >
        <User />
        <p className="pt-1 pl-2">Students</p>
      </Link>
      <Link
        href={"/classes"}
        className={`flex ml-2 my-2 p-2 text-slate-500 hover:text-slate-900 ${
          isActive("/classes") ? "bg-slate-200 rounded-md" : undefined
        }`}
      >
        <Users />
        <p className="pt-1 pl-2">Classes</p>
      </Link>
      <Link
        href={"/assignments"}
        className={`flex ml-2 my-2 p-2 text-slate-500 hover:text-slate-900 ${
          isActive("/assignments") ? "bg-slate-200 rounded-md" : undefined
        }`}
      >
        <FileText />
        <p className="pt-1 pl-2">Assignments</p>
      </Link>
    </div>
  );
}
