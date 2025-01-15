import CourseForm from "./course-form";

export default async function CourseDashboard() {
  return (
    <div className="mx-8 my-4">
      <p className="text-2xl font-bold pt-2 pl-3">Add Course</p>
      <CourseForm />
    </div>
  );
}
