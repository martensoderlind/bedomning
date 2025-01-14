"use client";
import { ClassInfo } from "@/features/types";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addClassAction } from "../actions";

export default function AddClassButton() {
  const [addClass, setAddClass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClassInfo>();

  const onSubmit: SubmitHandler<ClassInfo> = async (data) => {
    await addClassAction(data.className);
    setAddClass(!addClass);
  };

  if (addClass) {
    return (
      <button
        className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4 my-0"
        onClick={() => setAddClass(!addClass)}
      >
        <Plus />
        Add Class
      </button>
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <input
          type="text"
          alt="Name"
          placeholder="Class name"
          className="py-2 px-2 pr-4 my-0 rounded-md mx-2"
          {...register("className", {
            required: true,
            pattern: /^[A-Za-z1-9]+$/i,
          })}
        />
        <button className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-3 my-0">
          Add
        </button>
      </div>
      {errors.className && (
        <span className="text-red-500 text-xs ml-2 pl-2">
          This field is required
        </span>
      )}
    </form>
  );
}
