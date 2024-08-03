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
  DriverLicense, ProductCategories, ProductsCatalog, CheckoutPayment
} from "pages/index.ts";

import ProfessionalServicesCategories from "pages/ProfessionalServicesCategories.tsx";

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
    element: ProductCategories,
    isAuthRequired: false,
    userRole: ['Buyer', 'Vendor', 'NoAuth'],
  },
  {
    path: "/products/:category",
    element: ProductsCatalog,
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
    isAuthRequired: true,
    userRole: ['Buyer', 'Vendor'],
  },
  {
    path: "/shopping-cart",
    element: ShoppingCart,
    isAuthRequired: false,
    userRole: ['Buyer'],
  },
  {
    path: "/wishlist",
    element: Wishlist,
    isAuthRequired: false,
    userRole: ['Buyer'],
  },
  {
    path: "/checkout-payment",
    element: CheckoutPayment,
    isAuthRequired: false,
    userRole: ['Buyer'],
  },
  {
    path: "/driver-license",
    element: DriverLicense,
    isAuthRequired: true,
    userRole: ['Buyer'],
  },
]