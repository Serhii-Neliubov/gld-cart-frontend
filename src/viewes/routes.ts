import { FC } from "react";
import Home from "../viewes/home/Home";
import ContactUs from "./ContactUs.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import CookiePolicy from "./CookiePolicy.tsx";
import ShippingPolicy from "./ShippingPolicy.tsx";
import Faqs from "./Faqs.tsx";
import TermsConditions from "./TermsConditions.tsx";
import HelpAndSupport from "../viewes/help-and-support/HelpAndSupport";
import ProfilePage from "../viewes/profile/ProfilePage";
import ShoppingCartPage from "../viewes/shopping-cart/ShoppingCartPage";
import ForgottenPasswordPage from "../viewes/forgot-password/ForgottenPasswordPage";
import Login from "./Login.tsx";
import Registration from "./register/Registration.tsx";
import WishlistPage from "../viewes/wishlist/WishlistPage";
import RentingCategories from "./renting-buyer/RentingCategories.tsx";
import RentingCategoryPage from "../viewes/renting-vendor/RentingCategoryPage";
import ProductsVendor from "./products-vendor/ProductsVendor.tsx";
import SendMessagePage from "../viewes/send-message-successfully/SendMessagePage";
import ProfessionalServicesCategories from "./ProfessionalServicesCategories.tsx";
import TrackOrder from "../viewes/track-order/TrackOrder";
import { NewVehicle } from "./renting-vendor/pages/vehicle/NewVehicle.tsx";
import { NewElectronics } from "./renting-vendor/pages/electronics/NewElectronics.tsx";
import { NewHouses } from "./renting-vendor/pages/houses/NewHouses.tsx";
import { DriverLicense } from "./driver-licese/DriverLicense.tsx";
import { SupportChat } from "./support-chat/SupportChat.tsx";
import { ProductPage } from "./products-buyer/components/ProductPage.tsx";
import ProfessionalServicesVendor from "./professional-services-vendor/ProfessionalServicesVendor.tsx";
import { PaymentCheckout } from "@/viewes/checkout-payment/PaymentCheckout.tsx";
import { PaymentCardForm } from "@/viewes/checkout-payment/PaymentCardForm.tsx";
import { Chat } from "@/viewes/chat/Chat.tsx";
import {ProductsList} from "@/viewes/products-buyer/components/ProductsList.tsx";
import ProductsPage from "@/viewes/products-buyer/ProductCategories.tsx";
import ProductCategories from "@/viewes/products-buyer/ProductCategories.tsx";
import ProfessionalServices from "@/viewes/professional-services-buyer/components/professional-services/ProfessionalServices.tsx";
import {ProfessionalService} from "@/viewes/professional-services-buyer/components/professional-service/ProfessionalService.tsx";
import RentingProducts from "@/viewes/renting-buyer/components/renting-product/RentingProducts.tsx";
import {ProductsFormVendor} from "@/viewes/products-vendor/ProductsFormVendor.tsx";
import {ProfessionalServicesFormVendor} from "@/viewes/professional-services-vendor/ProfessionalServicesFormVendor.tsx";
import NewPasswordPage from "@/viewes/forgot-password/new-password/NewPasswordPage.tsx";
import ForgottenAttentionPage from "@/viewes/forgot-password/forgot-password-sended/ForgottenAttentionPage.tsx";

interface IRoutes {
  component: FC;
  path: string;
}

export const buyerRoutes: IRoutes[] = [
  { component: Home, path: "/" },
  { component: Chat, path: "/chat"},
  { component: Chat, path: "/chat/:recipientId" },
  { component: PaymentCheckout, path: "/checkout-payment" },
  { component: SupportChat, path: "/support-chat" },
  { component: DriverLicense, path: "/driver-license" },
  { component: TrackOrder, path: "/track-an-order" },
  { component: RentingCategories, path: "/renting" },
  { component: ContactUs, path: "/contact-us" },
  { component: PrivacyPolicy, path: "/privacy-policy" },
  { component: CookiePolicy, path: "/cookie-policy" },
  { component: ShippingPolicy, path: "/shipping-policy" },
  { component: TermsConditions, path: "/terms-and-conditions" },
  { component: Faqs, path: "/faq-s" },
  { component: ProductsPage, path: "/products" },
  // Products
  { component: ProductCategories, path: "/products" },
  { component: ProductsList, path: "/products/:category" },
  { component: ProductPage, path: "/product-page/:id" },
  // -----------------------
  // Professional Services
  { component: ProfessionalServicesCategories, path: "/professional-services" },
  { component: ProfessionalServices, path: "/professional-services/:category" },
  { component: ProfessionalService, path: "/professional-services/:category/:id" },
  // -----------------------
  { component: RentingCategories, path: "/renting" },
  { component: RentingProducts, path: "/renting/:category" },

  { component: ProfilePage, path: "/profile" },
  { component: HelpAndSupport, path: "/help-and-support" },
  { component: SendMessagePage, path: "/send-message" },

  { component: WishlistPage, path: "/wishlist" },
  { component: ShoppingCartPage, path: "/shopping-cart" },
  {
    component: PaymentCardForm,
    path: "/checkout-payment/order/:clientSecret/:name/:surname/:country/:street/:town/:zipcode/:phone/:email",
  },
];
export const vendorRoutes: IRoutes[] = [
  { component: Home, path: "/" },
  { component: DriverLicense, path: "/driver-license" },
  { component: SupportChat, path: "/support-chat" },
  { component: Chat, path: "/chat"},
  { component: Chat, path: "/chat/:recipientId" },

  // Components
  { component: RentingCategoryPage, path: "/renting-category-page" },
  { component: ContactUs, path: "/contact-us" },
  { component: PrivacyPolicy, path: "/privacy-policy" },
  { component: CookiePolicy, path: "/cookie-policy" },
  { component: ShippingPolicy, path: "/shipping-policy" },
  { component: TermsConditions, path: "/terms-and-conditions" },
  { component: Faqs, path: "/faq-s" },
  { component: SendMessagePage, path: "/send-message" },
  { component: ProductsVendor, path: "/products-category-page" },
  { component: ProfilePage, path: "/profile" },
  { component: HelpAndSupport, path: "/help-and-support" },
  { component: ProductsFormVendor, path: "/products-category-page/:category/:subcategory/:product" },

  { component: ProfessionalServicesFormVendor, path: "/professional-services/:category/:subcategory/:product" },
  { component: ProfessionalServicesVendor, path: "/professional-services" },
  // Vehicles
  {
    component: NewVehicle,
    path: "/renting-category-page/new-vehicle-page/:category/:subcategory/:renting-item",
  },
  // Electronics
  {
    component: NewElectronics,
    path: "/renting-category-page/new-electronics-page/:category/:subcategory/:renting-item",
  },
  // Houses
  {
    component: NewHouses,
    path: "/renting-category-page/new-houses-page/:category/:subcategory/:renting-item",
  },
];

export const noAuthRotes: IRoutes[] = [
  { component: ProductPage, path: "/renting-item-page/:id" },
  { component: Home, path: "/" },
  { component: Registration, path: "/register" },
  { component: RentingCategories, path: "/renting" },
  { component: Login, path: "/login" },
  { component: PrivacyPolicy, path: "/privacy-policy" },
  { component: CookiePolicy, path: "/cookie-policy" },
  { component: ShippingPolicy, path: "/shipping-policy" },
  { component: TermsConditions, path: "/terms-and-conditions" },
  { component: Faqs, path: "/faq-s" },
  { component: TrackOrder, path: "/track-an-order" },
  { component: HelpAndSupport, path: "/help-and-support" },
  { component: ForgottenPasswordPage, path: "/forgotten-password" },
  { component: ForgottenAttentionPage, path: "/forgotten-attention" },
  { component: NewPasswordPage, path: "/password/:token" },
  { component: ContactUs, path: "/contact-us" },
  { component: ProfessionalServicesCategories, path: "/professional-services" },
  { component: ProductsPage, path: "/products" },
  { component: SendMessagePage, path: "/send-message" },
];
