import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();
  if (loading) return null; // tu peux mettre un spinner ici
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
