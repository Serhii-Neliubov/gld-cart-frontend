import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {userDataSelector} from "store/slices/userDataSlice.ts";

type ProtectedRouteProps = {
  element: React.ReactNode;
};

export default function ProtectedRoute({element}: ProtectedRouteProps): React.ReactNode {
  const user = useSelector(userDataSelector);

  const accessToken = localStorage.getItem('token');

  if (!user._id && !accessToken) {
    return <Navigate to="/login" replace/>;
  }

  return element;
}