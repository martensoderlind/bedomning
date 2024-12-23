export type AssignmentGrade = {
  id: number;
  assignment: number;
  studentId: number;
  grade: string;
  criteria: number;
};

export type AssignmentType = {
  id: number;
  assignment: string;
  criteria: number[];
  description: string;
};
