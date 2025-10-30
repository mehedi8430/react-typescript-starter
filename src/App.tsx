import { Navigate } from "react-router";

export default function App() {
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/dashboard/home" replace />
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
}
