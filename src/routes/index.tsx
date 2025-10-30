import App from "@/App";
import DashboardLayout from "@/layouts/DashboardLayout";
import LoginPage from "@/pages/Auth/Login";
import DashboardPage from "@/pages/Dashboard";
import TablesPage from "@/pages/Dashboard/Tables";
import UnderWorking from "@/pages/Dashboard/UnderWorking";
import NotFoundPage from "@/pages/NotFoundPage";
import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/home" replace />,
      },
      {
        path: "/dashboard/home",
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/tables",
        element: <TablesPage />,
      },
      {
        path: "/dashboard/profile",
        children: [
          {
            path: "/dashboard/profile/preferences",
            element: <UnderWorking />,
          },
          {
            path: "/dashboard/profile/personal-info",
            element: <UnderWorking />,
          },
          {
            path: "/dashboard/profile/website",
            element: <UnderWorking />,
          },
          {
            path: "/dashboard/profile/payment-methods",
            element: <UnderWorking />,
          },
          {
            path: "/dashboard/profile/linked-accounts",
            element: <UnderWorking />,
          },
          {
            path: "/dashboard/profile/app-appearance",
            element: <UnderWorking />,
          },
        ],
      },
    ],
  },
  // authentication
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
