import { RouterProvider } from "react-router";
import { ThemeProvider } from "../theme";
import router from "../routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data is considered "stale" after 5 minutes
      refetchOnWindowFocus: false, // Prevents unnecessary refetching on focus
      retry: 3, // Retry failed queries 3 times
      // Use the global error type from TanStack Query docs if needed
    },
    mutations: {
      // Global mutation options can be set here
    },
  },
});

export default function Providers() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {import.meta.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
