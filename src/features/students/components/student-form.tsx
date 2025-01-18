"use client";
import { Plus } from "lucide-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
} from "@/components/";
import { ClassInfo, StudentType } from "@/features/types";

type Props = {
  classes: ClassInfo[];
};

export default function StudentForm({ classes }: Props) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentType>({
    defaultValues: {
      name: "",
      email: "",
      grade: "",
      className: "",
    },
  });

  const onSubmit: SubmitHandler<ClassInfo> = async (data: ClassInfo) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="space-y-2">
        <Label htmlFor="criteria">Name</Label>
        <Input
          {...register("name", {
            required: "please enter a description.",
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
      <div className="space-y-2">
        <Label htmlFor="criteria">Email</Label>
        <Input
          {...register("email", {
            required: "please enter a description.",
            minLength: {
              value: 2,
              message: "The name needs to be longer.",
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
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
        {errors.grade && (
          <p className="text-sm text-red-500">{errors.grade.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="className">Class</Label>
        <Controller
          name="className"
          control={control}
          rules={{ required: "Pleas select a class" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="pick a class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((classItem, index) => (
                  <SelectItem key={index} value={classItem.id}>
                    {classItem.className}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.grade && (
          <p className="text-sm text-red-500">{errors.grade.message}</p>
        )}
      </div>

      <button className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4 my-2">
        <Plus />
        Add
      </button>
    </form>
  );
}
