import { useMutation } from "@tanstack/react-query";
import { login, type LoginPayload, type LoginResponse } from "./authApi";
import { useAuthStore } from "../../stores/authStore";

export const useLogin = () => {
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: login,
    onSuccess: (data) => {
      setAuth(data);
    },
  });
};
