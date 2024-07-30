import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";

type ProtectedRouteProps = {
  element: React.ReactNode;
  userRole: string[];
};

export default function ProtectedRoute({element, userRole}: ProtectedRouteProps): React.ReactNode {
  const user = useSelector(userDataSelector);
  console.log(userRole);

  if (!user._id) {
    return <Navigate to="/login" replace/>;
  }

  return element;
}