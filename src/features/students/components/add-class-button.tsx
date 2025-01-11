"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function AddClassButton() {
  const [addClass, setAddClass] = useState(false);

  function handleClick() {
    setAddClass(!addClass);
  }

  function submit() {
    setAddClass(!addClass);
  }

  if (addClass) {
    return (
      <button
        className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4 my-0"
        onClick={handleClick}
      >
        <Plus />
        Add Class
      </button>
    );
  }
  return (
    <form action="" className="flex">
      <input
        type="text"
        alt="Name"
        placeholder="Class name"
        className="py-2 px-2 pr-4 my-0 rounded-md mx-2"
      />
      <button
        onClick={submit}
        className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4 my-0"
      >
        Add
      </button>
    </form>
  );
}
