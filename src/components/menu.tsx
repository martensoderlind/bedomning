"use client";
import { FileText, House, User, Users } from "lucide-react";
import SideMenuLink from "./side-menu-link";

export default function Menu() {
  return (
    <div className="h-screen bg-white border-r w-auto px-2 pr-4">
      <SideMenuLink route="home">
        <House />
      </SideMenuLink>
      <SideMenuLink route="students">
        <User />
      </SideMenuLink>
      <SideMenuLink route="classes">
        <Users />
      </SideMenuLink>
      <SideMenuLink route="course-management">
        <FileText />
      </SideMenuLink>
    </div>
  );
}
