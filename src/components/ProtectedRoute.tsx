import React from "react";
import {Navigate} from "react-router-dom";

type ProtectedRouteProps = {
  element: React.ReactNode;
  userRole: string[];
};

export default function ProtectedRoute({element, userRole}: ProtectedRouteProps): React.ReactNode {
  // Replace the following line with your authentication logic
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  if(userRole.includes('NoAuth')) {
    return <Navigate to="/" replace/>;
  }

  return element;
}