import {
  Home,
  Login,
  Registration,
  ForgotPassword,
  NewPassword,
  ContactUs,
  ShoppingCartPage,
  WishlistPage, RentingCategories
} from "@/viewes/index.ts";
import ProfessionalServicesCategories from "../viewes/ProfessionalServicesCategories.tsx";

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

  // Public
  {
    path: "/contact-us",
    element: ContactUs,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/renting",
    element: RentingCategories,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/products",
    element: ContactUs,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/professional-services",
    element: ProfessionalServicesCategories,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/profile",
    element: ProfessionalServicesCategories,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor'],
  },
  {
    path: "/shopping-cart",
    element: ShoppingCartPage,
    isAuthRequired: false,
    userRole: ['Buyer'],
  },
  {
    path: "/wishlist",
    element: WishlistPage,
    isAuthRequired: false,
    userRole: ['Buyer'],
  },
]