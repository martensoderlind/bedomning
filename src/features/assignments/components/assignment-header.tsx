import { assignmentService } from "../instance";
import AssignmentForm from "./assignment-form";

export default async function AssignmentHeader() {
  const criterias = await assignmentService.getAllCriteria();

  return (
    <div className="mx-8 my-4">
      <p className="text-2xl font-bold pt-2">Assignments</p>
      <AssignmentForm criterias={criterias} />
    </div>
  );
}
