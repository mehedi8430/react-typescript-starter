import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../axiosInstance";

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axiosInstance.get("/users");
  return data;
};

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

// Useage example
// const { data: users, isLoading, isError, error } = useUsers();
