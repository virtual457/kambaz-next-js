import axios from 'axios';

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

interface Module {
  _id?: string;
  name: string;
  description?: string;
  course?: string;
  lessons?: Lesson[];
}

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

export const fetchModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: string, module: Module) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

export const updateModule = async (courseId: string, module: Module) => {
  const response = await axiosWithCredentials.put(`${COURSES_API}/${courseId}/modules/${module._id}`, module);
  return response.data;
};

export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
  return response.data;
};
