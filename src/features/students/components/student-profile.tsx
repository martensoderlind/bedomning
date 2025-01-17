import React from "react";
import { BackgroundBasicInfo } from "./basic-info";
import { db } from "../db/";

type Props = {
  id: string;
};

export async function StudentProfile({ id }: Props) {
  const student = db[parseInt(id)];
  return (
    <div className="space-y-2 max-w-96">
      <div className="flex justify-between items-start">
        <BackgroundBasicInfo student={student} />
      </div>
    </div>
  );
}
