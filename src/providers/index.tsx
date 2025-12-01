import { RouterProvider } from "react-router";
import { ThemeProvider } from "../theme";
import router from "../routes";

export default function Providers() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
