"use client";
import React from "react";
import ToggleMenuButton from "./toggle-menu-button";

export default function ToggleMenu() {
  return (
    <div className="flex bg-slate-200 rounded-md m-4 ml-6">
      <ToggleMenuButton route="assignments" />
      <ToggleMenuButton route="criteria" />
      <ToggleMenuButton route="course" />
      <ToggleMenuButton route="students" />
    </div>
  );
}
