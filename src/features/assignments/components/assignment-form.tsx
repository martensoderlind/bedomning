"use client";
import { Plus } from "lucide-react";
import { AddAssignment, AssignmentType, Criteria } from "../types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Label,
} from "@/components";

type Props = {
  criterias: Criteria[];
};

export default function AssignmentForm({ criterias }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddAssignment>({
    defaultValues: {
      assignment: "",
      criteria: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<AddAssignment> = async (
    data: AssignmentType
  ) => {
    console.log(data);
    // await addAssignmentAction(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-2">
      <div className="space-y-2 mt-2">
        <Label htmlFor="assignment">Assignment</Label>
        <Input
          {...register("assignment", {
            required: "please the name of the course.",
            minLength: {
              value: 2,
              message: "The name needs to be longer.",
            },
          })}
        />
        {errors.assignment && (
          <p className="text-sm text-red-500">{errors.assignment.message}</p>
        )}
      </div>

      <div className="space-y-2 mt-2">
        <Label htmlFor="criteria">Criteria</Label>
        <Controller
          name="criteria"
          control={control}
          rules={{ required: "Pleas select a criteria" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="pick a criteria" />
              </SelectTrigger>
              {criterias && (
                <SelectContent>
                  {criterias?.map((criteria: Criteria) => (
                    <SelectItem key={criteria.id} value={criteria.id!}>
                      {criteria.criteria}
                    </SelectItem>
                  ))}
                </SelectContent>
              )}
            </Select>
          )}
        />
        {errors.criteria && (
          <p className="text-sm text-red-500">{errors.criteria.message}</p>
        )}
      </div>

      <div className="space-y-2 mt-2">
        <Label htmlFor="description">Description</Label>
        <Input
          {...register("description", {
            required: "please the name of the course.",
            minLength: {
              value: 2,
              message: "The name needs to be longer.",
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
