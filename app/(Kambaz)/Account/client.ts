import axios from 'axios';

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;

interface Credentials {
  username: string;
  password: string;
}

interface User {
  _id?: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
  role?: string;
  loginId?: string;
  section?: string;
  lastActivity?: string;
  totalActivity?: string;
}

export const signin = async (credentials: Credentials) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const signup = async (user: User) => {
  const response = await axios.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const profile = async () => {
  const response = await axios.get(`${USERS_API}/profile`);
  return response.data;
};

export const updateUser = async (user: User) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const signout = async () => {
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};
