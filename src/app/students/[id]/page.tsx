import StudentProfile from "@/features/students/components/student-profile";
import React from "react";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Params) {
  const { id } = await params;
  return (
    <div className="space-y-2 max-w-96">
      <StudentProfile id={id} />
    </div>
  );
}
