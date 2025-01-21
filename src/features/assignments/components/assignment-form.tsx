"use client";
import { Plus, PlusCircle, X } from "lucide-react";
import { AddAssignment, Course, Criteria } from "../types";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFieldArray,
} from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Label,
} from "@/components";
import { addAssignmentAction } from "../actions";

type Props = {
  criterias: Criteria[];
  courses: Course[];
};

export default function AssignmentForm({ criterias, courses }: Props) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<AddAssignment>({
    defaultValues: {
      assignment: "",
      course: "",
      criteria: [{ id: "" }],
      description: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "criteria",
  });

  const onSubmit: SubmitHandler<AddAssignment> = async (
    data: AddAssignment
  ) => {
    await addAssignmentAction(data);
    reset();
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
        <Label htmlFor="criteria">Course</Label>
        <Controller
          name="course"
          control={control}
          rules={{ required: "Pleas select a course" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="pick a course" />
              </SelectTrigger>
              {courses && (
                <SelectContent>
                  {courses?.map((course: Course) => (
                    <SelectItem key={course.id} value={course.id!}>
                      {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              )}
            </Select>
          )}
        />
        {errors.course && (
          <p className="text-sm text-red-500">{errors.course.message}</p>
        )}
      </div>
      <div className="space-y-2 mt-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="criteria">Criteria</Label>
          <button
            type="button"
            onClick={() => append({ id: "" })}
            className="text-sm text-gray-600 flex items-center gap-1"
          >
            <PlusCircle size={16} />
            Add criteria
          </button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <Controller
              name={`criteria.${index}.id`}
              control={control}
              rules={{ required: "Please select a criteria" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="pick a criteria" />
                  </SelectTrigger>
                  <SelectContent>
                    {criterias?.map((criteria: Criteria) => (
                      <SelectItem key={criteria.id} value={criteria.id!}>
                        {criteria.criteria}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <X size={16} />
              </button>
            )}
          </div>
        ))}
        {errors.criteria && (
          <p className="text-sm text-red-500">{errors.criteria.message}</p>
        )}
      </div>

      <div className="space-y-2 mt-2">
        <Label htmlFor="description">Description</Label>
        <Input
          {...register("description", {
            required: "please enter a description.",
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
