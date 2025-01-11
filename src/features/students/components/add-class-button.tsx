"use client";
import { Plus } from "lucide-react";
import React from "react";

export default function AddClassButton() {
  function addClass() {
    console.log("add class");
  }
  return (
    <button
      className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4 my-0"
      onClick={addClass}
    >
      <Plus />
      Add Class
    </button>
  );
}
