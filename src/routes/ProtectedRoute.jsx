import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // If not logged in → redirect to login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → allow access
  return children;
}