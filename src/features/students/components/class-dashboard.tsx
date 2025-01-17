import ClassInformation from "./class";
import { studentsService } from "../instance";
import AddClassButton from "./add-class-button";

export async function ClassDashboard() {
  const classes = await studentsService.getAllClasses();
  const lastClassIndex = classes.length;
  return (
    <div className="container mx-auto my-4 w-full">
      <div className="justify-between mx-8 my-4">
        <p className="text-2xl font-bold pt-2 pl-3">Classes</p>
        <AddClassButton />
      </div>
      <div className="rounded-md bg-white mx-8 my-2 py-2 px-4 border-1">
        {classes.map((classInfo, index) => (
          <ClassInformation
            key={index}
            classInfo={classInfo}
            lastClass={index + 1 === lastClassIndex ? true : false}
          />
        ))}
      </div>
    </div>
  );
}
