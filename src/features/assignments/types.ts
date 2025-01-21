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
  course: string;
  description: string;
};
export type Criteria = {
  id?: string;
  course: string;
  criteria: string;
  grade: string;
};
export type CriteriaForm = {
  id: string;
};

export type AddAssignment = {
  id: string;
  assignment: string;
  course: string;
  criteria: CriteriaForm[];
  description: string;
};

export type Course = {
  id: string;
  name: string;
};
export type AssignmentCriteria = {
  assignmentId: string;
  criteriaId: string;
};
