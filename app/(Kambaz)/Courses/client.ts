import axios from 'axios';

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

interface Course {
  _id?: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  image?: string;
}

export const fetchAllCourses = async () => {
  const response = await axiosWithCredentials.get(COURSES_API);
  return response.data;
};

export const fetchCourseById = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}`);
  return response.data;
};

export const createCourse = async (course: Course) => {
  const response = await axiosWithCredentials.post(COURSES_API, course);
  return response.data;
};

export const updateCourse = async (course: Course) => {
  const response = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}`);
  return response.data;
};
