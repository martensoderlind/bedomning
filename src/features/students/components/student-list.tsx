import React from "react";
import { db } from "../db/mockdb";
import Student from "./student-row";

export default function StudentList() {
  const students = db;
  return (
    <div className="container mx-auto">
      {students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
}
