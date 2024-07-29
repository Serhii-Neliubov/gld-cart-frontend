import {Home, Login, Registration} from "@/viewes/index.ts";

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
]