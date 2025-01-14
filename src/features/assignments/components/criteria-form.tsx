import { Plus } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { Criteria } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  setAddAssignment: Dispatch<SetStateAction<boolean>>;
  addAssignment: boolean;
};

export default function CriteriaForm({
  setAddAssignment,
  addAssignment,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Criteria>();

  const onSubmit: SubmitHandler<Criteria> = async (data: Criteria) => {
    console.log(data);
    setAddAssignment(!addAssignment);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <input
        type="text"
        alt="name of course"
        placeholder="Course"
        className="py-2 px-2 pr-4 my-2 rounded-md mx-2"
        {...register("course", {
          required: true,
          pattern: /^[A-Za-z1-9]+$/i,
        })}
      />
      {errors.course && (
        <span className="text-red-500 text-xs ml-2 pl-2">
          This field is required
        </span>
      )}
      <input
        type="text"
        alt="Grade"
        placeholder="Grade"
        className="py-2 px-2 pr-4 my-2 rounded-md mx-2"
        {...register("grade", {
          required: true,
          pattern: /^[A-Za-z1-9]+$/i,
        })}
      />
      {errors.grade && (
        <span className="text-red-500 text-xs ml-2 pl-2">
          This field is required
        </span>
      )}
      <input
        type="text"
        alt="description"
        placeholder="description"
        className="py-2 px-2 pr-4 my-2 rounded-md mx-2"
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
