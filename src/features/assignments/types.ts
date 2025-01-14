export type AssignmentGrade = {
  id: number;
  assignment: number;
  studentId: number;
  grade: string;
  criteria: number;
};

export type AssignmentType = {
  id: string;
  assignment: string;
  description: string;
};
export type Criteria = {
  id: string;
  course: string;
  grade: string;
  description: string;
};
