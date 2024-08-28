import { ProfessionalServicesFormVendor } from "@/pages/professional-services-vendor/ProfessionalServicesFormVendor";
import ProfessionalServicesVendor from "@/pages/professional-services-vendor/ProfessionalServicesVendor";

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
  DriverLicense,
  ProductCategories,
  ProductsCatalog,
  CheckoutPayment,
  ProductPage,
  HelpCenter,
  ProfessionalServicesCategories,
  ProfilePage,
  ProductsVendor,
  RentingCategoryPage
} from "pages/index.ts";

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
    path: "/renting-vendor",
    element: RentingCategoryPage,
    isAuthRequired: false,
  },
  {
    path: "/products",
    element: ProductCategories,
    isAuthRequired: false,
  },
  {
    path: "/products-vendor",
    element: ProductsVendor,
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
    path: "/professional-services-vendor",
    element: ProfessionalServicesVendor,
    isAuthRequired: false,
  },
  {
    path: "/professional-services-vendor/:category/:subcategory/:service",
    element: ProfessionalServicesFormVendor,
    isAuthRequired: false,
  },
  {
    path: "/profile",
    element: ProfilePage,
    isAuthRequired: true,
  },
  {
    path: "/shopping-cart",
    element: ShoppingCart,
    isAuthRequired: true,
  },
  {
    path: "/wishlist",
    element: Wishlist,
    isAuthRequired: true,
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
  {
    path: "/help-center",
    element: HelpCenter,
    isAuthRequired: true,
  },
]