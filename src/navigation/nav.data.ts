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
  DriverLicense, ProductCategories, ProductsCatalog, CheckoutPayment, ProductPage
} from "pages/index.ts";

import ProfessionalServicesCategories from "pages/ProfessionalServicesCategories.tsx";

export const routes = [
  {
    path: "/",
    element: Home,
    isAuthRequired: false,
  },
  {
    path: "/privacy-policy",
    element: PrivacyPolicy,
    isAuthRequired: false,
  },
  {
    path: "/cookie-policy",
    element: CookiePolicy,
    isAuthRequired: false,
  },
  {
    path: "/shipping-policy",
    element: ShippingPolicy,
    isAuthRequired: false,
  },
  {
    path: "/terms-conditions",
    element: TermsConditions,
    isAuthRequired: false,
  },
  {
    path: "/faqs",
    element: Faqs,
    isAuthRequired: false,
  },
  {
    path: "/login",
    element: Login,
    isAuthRequired: false,
  },
  {
    path: "/register",
    element: Registration,
    isAuthRequired: false,
  },
  {
    path: "/forgot-password",
    element: ForgotPassword,
    isAuthRequired: false,
  },
  {
    path: "/forgot-password/reset/:token",
    element: NewPassword,
    isAuthRequired: false,
  },
  {
    path: "/contact-us",
    element: ContactUs,
    isAuthRequired: false,
  },
  {
    path: "/renting",
    element: RentingCategories,
    isAuthRequired: false,
  },
  {
    path: "/products",
    element: ProductCategories,
    isAuthRequired: false,
  },
  {
    path: "/products/:category",
    element: ProductsCatalog,
    isAuthRequired: false,
  },
  {
    path: "/products/:category/:id",
    element: ProductPage,
    isAuthRequired: false,
  },
  {
    path: "/professional-services",
    element: ProfessionalServicesCategories,
    isAuthRequired: false,
  },
  {
    path: "/profile",
    element: ProfessionalServicesCategories,
    isAuthRequired: true,
  },
  {
    path: "/shopping-cart",
    element: ShoppingCart,
    isAuthRequired: false,
  },
  {
    path: "/wishlist",
    element: Wishlist,
    isAuthRequired: false,
  },
  {
    path: "/checkout-payment",
    element: CheckoutPayment,
    isAuthRequired: false,
  },
  {
    path: "/driver-license",
    element: DriverLicense,
    isAuthRequired: true,
  },
]