import { useQuery } from "@tanstack/react-query";
import { getUsers, type User } from "./userApi";

export const useGetUsers = () =>
  useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
