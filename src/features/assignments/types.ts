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
  criteria: number[] | null;
  description: string;
};
