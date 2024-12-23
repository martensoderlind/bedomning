import React from "react";
import { db } from "../db/mockdb";
import Student from "./student-row";

export default function StudentList() {
  const students = db;
  return (
    <div className="container">
      <p className="text-2xl font-bold mx-8 my-4">Students</p>
      <div className="m-8  rounded-md bg-white my-4">
        <div className="grid grid-cols-7 gap-3 border-b-2 py-2">
          <p className="pl-12 text-gray-500 col-span-2">Name</p>
          <p className="text-gray-500 col-span-2">Grade</p>
          <p className="text-gray-500 col-span-2">Class</p>
        </div>
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
