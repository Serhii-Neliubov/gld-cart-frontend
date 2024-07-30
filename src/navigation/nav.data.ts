import {Home, Login, Registration, ForgotPassword, NewPassword} from "@/viewes/index.ts";

export const routes = [
  {
    path: "/",
    element: Home,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },

  // Auth
  {
    path: "/login",
    element: Login,
    isAuthRequired: false,
    userRole: ['NoAuth'],
  },
  {
    path: "/register",
    element: Registration,
    isAuthRequired: false,
    userRole: ['NoAuth'],
  },
  {
    path: "/forgot-password",
    element: ForgotPassword,
    isAuthRequired: false,
    userRole: ['NoAuth'],
  },
  {
    path: "/forgot-password/reset/:token",
    element: NewPassword,
    isAuthRequired: false,
    userRole: ['NoAuth'],
  },
]