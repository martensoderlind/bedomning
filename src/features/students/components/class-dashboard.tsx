import React from "react";
import { Plus } from "lucide-react";
import ClassInformation from "./class";
import { studentsService } from "../instance";

export default async function ClassDashboard() {
  const classes = await studentsService.getAllClasses();
  return (
    <div className="container mx-auto my-4 w-full">
      <div className="flex justify-between mx-8 my-4">
        <p className="text-2xl font-bold pt-2 pl-3">Classes</p>
        <button className="flex rounded-md bg-black text-gray-200 py-2 px-2 pr-4 my-0">
          <Plus />
          Add Class
        </button>
      </div>
      <div className="rounded-md bg-white mx-8 my-2 py-2 px-4 border-1">
        {classes.map((classInfo) => (
          <ClassInformation key={classInfo.id} classInfo={classInfo} />
        ))}
      </div>
    </div>
  );
}
