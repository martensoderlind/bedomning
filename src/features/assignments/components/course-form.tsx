"use client";
import { Plus } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { Course } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { addCourseAction } from "../actions";

type Props = {
  setAddAssignment: Dispatch<SetStateAction<boolean>>;
  addAssignment: boolean;
};

export default function CourseForm({ setAddAssignment, addAssignment }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Course>();

  const onSubmit: SubmitHandler<Course> = async (data: Course) => {
    await addCourseAction(data.name);
    setAddAssignment(!addAssignment);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col border-b-2 pb-2"
    >
      <input
        type="text"
        alt="name of course"
        placeholder="Course"
        className="py-2 px-2 pr-4 my-2 rounded-md mx-2"
        {...register("name", {
          required: true,
          pattern: /^[a-öA-Ö\s]+$/i,
        })}
      />
      {errors.name && (
        <span className="text-red-500 text-xs ml-2 pl-2">
          This field is required
        </span>
      )}

      <button className="flex rounded-md bg-black text-gray-200 py-2 mx-2 px-2 pr-4 my-0">
        <Plus />
        Add
      </button>
    </form>
  );
}
