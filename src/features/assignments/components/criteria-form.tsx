"use client";
import { Plus } from "lucide-react";
import { Course, Criteria } from "../types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Input } from "@/components/ui/input";
import { addCriteriaAction } from "../actions";

type Props = {
  courses: Course[];
};

export default function CriteriaForm({ courses }: Props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Criteria>({
    defaultValues: {
      course: "",
      grade: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<Criteria> = async (data: Criteria) => {
    await addCriteriaAction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="space-y-2">
        <Label htmlFor="category">Course</Label>
        <Controller
          name="course"
          control={control}
          rules={{ required: "Pleas select a course" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="pick a course" />
              </SelectTrigger>
              <SelectContent>
                {courses?.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
                {/* <SelectItem value="44246493-08f0-4f79-9d5a-5b79e4f5d12d">
                  c1
                </SelectItem>
                <SelectItem value="2">c2</SelectItem>
                <SelectItem value="3">c3</SelectItem> */}
              </SelectContent>
            </Select>
          )}
        />
        {errors.course && (
          <p className="text-sm text-red-500">{errors.course.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="grade">Grade</Label>
        <Controller
          name="grade"
          control={control}
          rules={{ required: "Pleas select a grade" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="pick a grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="C">C</SelectItem>
                <SelectItem value="E">E</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.course && (
          <p className="text-sm text-red-500">{errors.course.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          {...register("description", {
            required: "please enter a description.",
            minLength: {
              value: 2,
              message: "The description needs to be longer.",
            },
          })}
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>
      <button className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4 my-2">
        <Plus />
        Add
      </button>
    </form>
  );
}
