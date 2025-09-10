import { create } from "zustand";
import type { LoginResponse } from "../api/auth/authApi";

interface AuthState {
  user: Omit<LoginResponse, "accessToken" | "refreshToken"> | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setAuth: (data: LoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const storedUser = localStorage.getItem("user");

  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    accessToken,
    refreshToken,
    isAuthenticated: !!accessToken,
    setAuth: (data: LoginResponse) => {
      const userData = {
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        image: data.image,
      };
      set({
        user: userData,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        isAuthenticated: true,
      });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", JSON.stringify(userData));
    },
    logout: () => {
      set({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      window.location.href = "/auth";
    },
  };
});
