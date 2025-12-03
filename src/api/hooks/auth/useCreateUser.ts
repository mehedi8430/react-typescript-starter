import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../axiosInstance";

interface NewUser {
  name: string;
  email: string;
}

interface CreatedUser extends NewUser {
  id: number;
}

const createUser = async (newUser: NewUser): Promise<CreatedUser> => {
  const { data } = await axiosInstance.post("/users", newUser);
  return data;
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation<CreatedUser, Error, NewUser>({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Invalidate 'users' cache after successful creation
    },
  });
};

// Usage example
//  const { mutate: createUserMutation, isLoading, isError, error } = useCreateUser();
