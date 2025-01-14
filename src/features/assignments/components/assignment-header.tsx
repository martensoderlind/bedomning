"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { AssignmentType } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { addAssignmentAction } from "../actions";

export default function AssignmentHeader() {
  const [addAssignment, setAddAssignment] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssignmentType>();

  function toggleForm() {
    setAddAssignment(!addAssignment);
  }

  const onSubmit: SubmitHandler<AssignmentType> = async (data) => {
    await addAssignmentAction(data);
    setAddAssignment(!addAssignment);
  };

  if (!addAssignment) {
    return (
      <div className="flex justify-between mx-8 my-4">
        <p className="text-2xl font-bold pt-2 pl-3">Assignments</p>
        <div>
          <button
            className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4 my-0"
            onClick={toggleForm}
          >
            <Plus />
            Add Assignments
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-8 my-4">
      <p className="text-2xl font-bold pt-2 pl-3">Assignments</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          type="text"
          alt="name of assignment"
          placeholder="Assignment"
          className="py-2 px-2 pr-4 my-2 rounded-md mx-2"
          {...register("assignment", {
            required: true,
            pattern: /^[A-Za-z1-9]+$/i,
          })}
        />
        {errors.assignment && (
          <span className="text-red-500 text-xs ml-2 pl-2">
            This field is required
          </span>
        )}
        <input
          type="text"
          alt="criteria"
          placeholder="criteria"
          className="py-2 px-2 pr-4 my-2 rounded-md mx-2"
          {...register("criteria", {
            required: true,
            pattern: /^[A-Za-z1-9]+$/i,
          })}
        />
        {errors.criteria && (
          <span className="text-red-500 text-xs ml-2 pl-2">
            This field is required
          </span>
        )}
        <input
          type="text"
          alt="description"
          placeholder="description"
          className="my-2 py-2 px-2 pr-4 rounded-md mx-2"
          {...register("description", {
            required: true,
            pattern: /^[A-Za-z1-9]+$/i,
          })}
        />
        {errors.description && (
          <span className="text-red-500 text-xs ml-2 pl-2">
            This field is required
          </span>
        )}
        <button className="flex rounded-md bg-black text-gray-200 py-2 mx-2 px-2 pr-4 my-0">
          <Plus />
          Add
        </button>
      </form>
    </div>
  );
}
