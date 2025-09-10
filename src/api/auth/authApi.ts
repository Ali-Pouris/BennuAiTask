import axiosInstance from "../_config/axiosConfig";

export interface LoginPayload {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const res = await axiosInstance.post<LoginResponse>("/auth/login", payload);
  return res.data;
};
