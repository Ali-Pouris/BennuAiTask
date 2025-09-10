import axiosInstance from "../_config/axiosConfig";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  username: string;
  password: string;
  image: string;
  gender: string;
}

export const getUsers = async (): Promise<User[]> => {
  const res = await axiosInstance.get<{ users: User[] }>("/users");
  return res.data.users;
};
