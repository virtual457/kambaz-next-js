import axios from 'axios';

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

interface Assignment {
  _id?: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFromDate?: string;
  availableUntilDate?: string;
}

export const fetchAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: Assignment) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return response.data;
};

export const updateAssignment = async (assignment: Assignment) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
