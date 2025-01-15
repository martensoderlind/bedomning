import CourseForm from "./course-form";

export async function CourseDashboard() {
  return (
    <div className="mx-8 my-4">
      <p className="text-2xl font-bold pt-2">Add Course</p>
      <CourseForm />
    </div>
  );
}
