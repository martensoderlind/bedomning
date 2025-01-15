"use client";
import { Plus } from "lucide-react";
import { Course } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { addCourseAction } from "../actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function CourseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Course>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<Course> = async (data: Course) => {
    await addCourseAction(data.name);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-2">
      <div className="space-y-2">
        <Label htmlFor="name">Course name</Label>
        <Input
          {...register("name", {
            required: "please the name of the course.",
            minLength: {
              value: 2,
              message: "The name needs to be longer.",
            },
          })}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <button className="flex rounded-md bg-black text-gray-200 py-2 my-2 px-2 pr-4">
        <Plus />
        Add
      </button>
    </form>
  );
}
