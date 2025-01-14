import { Plus } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { AddAssignment, AssignmentType } from "../types";
import { addAssignmentAction } from "../actions";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  setAddAssignment: Dispatch<SetStateAction<boolean>>;
  addAssignment: boolean;
};

export default function AssignmentForm({
  setAddAssignment,
  addAssignment,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAssignment>();

  const onSubmit: SubmitHandler<AddAssignment> = async (
    data: AssignmentType
  ) => {
    await addAssignmentAction(data);
    setAddAssignment(!addAssignment);
  };
  return (
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
  );
}
