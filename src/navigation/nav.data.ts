import {
  Home,
  Login,
  Registration,
  ForgotPassword,
  NewPassword,
  ContactUs,
  RentingCategories,
  ShoppingCart,
  Wishlist,
  PrivacyPolicy,
  CookiePolicy,
  ShippingPolicy,
  TermsConditions,
  Faqs,
} from "@/pages/index.ts";

import ProfessionalServicesCategories from "../pages/ProfessionalServicesCategories.tsx";

export const routes = [
  {
    path: "/",
    element: Home,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/privacy-policy",
    element: PrivacyPolicy,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/cookie-policy",
    element: CookiePolicy,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/shipping-policy",
    element: ShippingPolicy,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/terms-conditions",
    element: TermsConditions,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/faqs",
    element: Faqs,
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
    element: ShoppingCart,
    isAuthRequired: true,
    userRole: ['Buyer'],
  },
  {
    path: "/wishlist",
    element: Wishlist,
    isAuthRequired: true,
    userRole: ['Buyer'],
  },
]