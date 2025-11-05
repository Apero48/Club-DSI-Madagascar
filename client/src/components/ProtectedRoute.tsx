import { useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const [location, setLocation] = useLocation();

  // Redirect client-side when unauthenticated
  useEffect(() => {
    if (!isAuthenticated) {
      setLocation(`/login?redirect=${encodeURIComponent(location)}`);
    }
  }, [isAuthenticated, location, setLocation]);

  // While redirecting, render nothing
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}