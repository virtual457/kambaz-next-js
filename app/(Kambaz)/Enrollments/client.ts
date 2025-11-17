import axios from 'axios';

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const API_BASE = `${HTTP_SERVER}/api`;

export const fetchEnrollmentsForUser = async (userId: string) => {
  const response = await axios.get(`${API_BASE}/users/${userId}/enrollments`);
  return response.data;
};

export const fetchEnrollmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${API_BASE}/courses/${courseId}/enrollments`);
  return response.data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(`${API_BASE}/users/${userId}/courses/${courseId}`);
  return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(`${API_BASE}/users/${userId}/courses/${courseId}`);
  return response.data;
};
