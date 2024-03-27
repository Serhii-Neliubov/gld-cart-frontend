import { FC } from "react";
import Home from "../viewes/home/Home";
import ContactUsPage from "../viewes/contact-us/ContactUsPage";
import PrivacyPolicyPage from "../viewes/privacy-policy/PrivacyPolicyPage";
import CookiePolicyPage from "../viewes/cookie-policy/CookiePolicyPage";
import ShippingPolicyPage from "../viewes/shipping-policy/ShippingPolicyPage";
import FaqsPage from "../viewes/faq-s/FaqsPage";
import TermsConditionsPage from "../viewes/terms-conditions/TermsConditionsPage";
import HelpAndSupport from "../viewes/help-and-support/HelpAndSupport";
import ProfilePage from "../viewes/profile/ProfilePage";
import QuestionsAndAnswers from "../viewes/questions-answers/QuestionsAndAnswers";
import ShoppingCartPage from "../viewes/shopping-cart/ShoppingCartPage";
import ForgottenPasswordPage from "../viewes/forgot-password/ForgottenPasswordPage";
import ForgottenAttentionPage from "../viewes/forgot-password/forgot-password-sended/ForgottenAttentionPage";
import NewPasswordPage from "../viewes/forgot-password/new-password/NewPasswordPage";
import LoginPage from "../viewes/login/LoginPage";
import NotFound from "../viewes/not-found/NotFound";
import Register from "./register/Register.tsx";
import WishlistPage from "../viewes/wishlist/WishlistPage";
import RentingCategories from "./renting-buyer/RentingCategories.tsx";
import RentingCategoryPage from "../viewes/renting-vendor/RentingCategoryPage";
import RentingProductsPage from "../viewes/products-vendor/RentingProductsPage";
import SendMessagePage from "../viewes/send-message-successfully/SendMessagePage";
import ProfessionalCategories from "./professional-services-buyer/ProfessionalCategories.tsx";
import TrackOrder from "../viewes/track-order/TrackOrder";
import { NewVehicle } from "./renting-vendor/pages/vehicle/NewVehicle.tsx";
import { NewElectronics } from "./renting-vendor/pages/electronics/NewElectronics.tsx";
import { NewHouses } from "./renting-vendor/pages/houses/NewHouses.tsx";
import { NewBeautyOfSkin } from "./products-vendor/pages/beautyOfSkin/NewBeautyOfSkin.tsx";
import { NewBags } from "./products-vendor/pages/bags/NewBags.tsx";
import { NewAwesomeLipCare } from "./products-vendor/pages/awesome/NewAwesomeLipCare.tsx";
import { NewMobileTablets } from "./products-vendor/pages/mobileTablets/NewMobileTablets.tsx";
import { NewNecklaces } from "./products-vendor/pages/necklaces/NewNecklaces.tsx";
import { NewClothing } from "./products-vendor/pages/clothing/NewClothing.tsx";
import { NewBluetooth } from "./products-vendor/pages/bluetooth/NewBluetooth.tsx";
import { NewFacialCare } from "./products-vendor/pages/facial/NewFacialCare.tsx";
import { NewShoes } from "./products-vendor/pages/shoes/NewShoes.tsx";
import { NewCpu } from "./products-vendor/pages/cpu/NewCpu.tsx";
import { NewDiscoverSkincare } from "./products-vendor/pages/discover/NewDiscoverSkincare.tsx";
import { NewHeadphones } from "./products-vendor/pages/headphones/NewHeadphones.tsx";
import { NewBracelets } from "./products-vendor/pages/braceletes/NewBracelets.tsx";
import { NewSmartWatch } from "./products-vendor/pages/smartWatch/NewSmartWatch.tsx";
import { NewEarrings } from "./products-vendor/pages/earrings/NewEarrings.tsx";
import { NewCleaning } from "./professional-services-vendor/pages/cleaning/NewCleaning.tsx";
import { NewRepairing } from "./professional-services-vendor/pages/repairing/NewRepairing.tsx";
import { NewGardening } from "./professional-services-vendor/pages/gardening/NewGardening.tsx";
import { NewTreeCutting } from "./professional-services-vendor/pages/treeCutting/NewTreeCutting.tsx";
import { NewLawnServices } from "./professional-services-vendor/pages/lawnServices/NewLawnServices.tsx";
import { NewHandyman } from "./professional-services-vendor/pages/handyman/NewHandyman.tsx";
import { NewSnowRemoval } from "./professional-services-vendor/pages/snowRemoval/NewSnowRemoval.tsx";
import { NewPestControl } from "./professional-services-vendor/pages/pestControl/NewPestControl.tsx";
import { NewElectrical } from "./professional-services-vendor/pages/electrical/NewElectrical.tsx";
import { DriverLicense } from "./driver-licese/DriverLicense.tsx";
import { SupportChat } from "./support-chat/SupportChat.tsx";
import { ProductPage } from "./products-buyer/components/ProductPage.tsx";
import RentingProfessionalServicesPage from "./professional-services-vendor/RentingProfessionalServicesPage.tsx";
import { PaymentCheckout } from "@/viewes/checkout-payment/PaymentCheckout.tsx";
import { PaymentCardForm } from "@/viewes/checkout-payment/PaymentCardForm.tsx";
import { Chat } from "@/viewes/chat/Chat.tsx";
import {ProductsList} from "@/viewes/products-buyer/components/ProductsList.tsx";
import ProductsPage from "@/viewes/products-buyer/ProductCategories.tsx";
import ProductCategories from "@/viewes/products-buyer/ProductCategories.tsx";
import ProfessionalServices from "@/viewes/professional-services-buyer/components/professional-services/ProfessionalServices.tsx";
import {ProfessionalService} from "@/viewes/professional-services-buyer/components/professional-service/ProfessionalService.tsx";
import RentingProducts from "@/viewes/renting-buyer/components/renting-product/RentingProducts.tsx";

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
  { component: ContactUsPage, path: "/contact-us" },
  { component: PrivacyPolicyPage, path: "/privacy-policy" },
  { component: CookiePolicyPage, path: "/cookie-policy" },
  { component: ShippingPolicyPage, path: "/shipping-policy" },
  { component: TermsConditionsPage, path: "/terms-and-conditions" },
  { component: FaqsPage, path: "/faq-s" },
  { component: NotFound, path: "/not-found" },
  { component: ProductsPage, path: "/products" },
  // Products
  { component: ProductCategories, path: "/products" },
  { component: ProductsList, path: "/products/:category" },
  { component: ProductPage, path: "/product-page/:id" },
  // -----------------------
  // Professional Services
  { component: ProfessionalCategories, path: "/professional-services" },
  { component: ProfessionalServices, path: "/professional-services/:category" },
  { component: ProfessionalService, path: "/professional-services/:category/:id" },
  // -----------------------
  { component: RentingCategories, path: "/renting" },
  { component: RentingProducts, path: "/renting/:category" },

  { component: ProfilePage, path: "/profile" },
  { component: QuestionsAndAnswers, path: "/chat-answers" },
  { component: HelpAndSupport, path: "/help-and-support" },
  { component: SendMessagePage, path: "/send-message" },

  { component: WishlistPage, path: "/wishlist" },
  { component: ShoppingCartPage, path: "/shopping-cart" },
  {
    component: PaymentCardForm,
    path: "/checkout-payment/order/:clientSecret/:name/:surname/:country/:street/:town/:zipcode/:phone/:email",
  },
  { component: NotFound, path: "/*" },
];
export const vendorRoutes: IRoutes[] = [
  { component: Home, path: "/" },
  { component: DriverLicense, path: "/driver-license" },
  { component: SupportChat, path: "/support-chat" },
  { component: Chat, path: "/chat"},
  { component: Chat, path: "/chat/:recipientId" },
  // Pest Control Service
  {
    component: NewPestControl,
    path: "/professional-services/new-pest-control-page",
  },
  // Components
  { component: RentingCategoryPage, path: "/renting-category-page" },
  { component: ContactUsPage, path: "/contact-us" },
  { component: PrivacyPolicyPage, path: "/privacy-policy" },
  { component: CookiePolicyPage, path: "/cookie-policy" },
  { component: ShippingPolicyPage, path: "/shipping-policy" },
  { component: TermsConditionsPage, path: "/terms-and-conditions" },
  { component: FaqsPage, path: "/faq-s" },
  { component: NotFound, path: "/not-found" },
  { component: SendMessagePage, path: "/send-message" },
  { component: RentingProductsPage, path: "/products-category-page" },
  { component: ProfilePage, path: "/profile" },
  { component: HelpAndSupport, path: "/help-and-support" },
  {
    component: RentingProfessionalServicesPage,
    path: "/professional-services",
  },
  { component: QuestionsAndAnswers, path: "/chat-answers" },
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
  // bags
  {
    component: NewBags,
    path: "/products-category-page/new-bags-page/:category/:subcategory/:product",
  },
  // Awesome Lip Care
  {
    component: NewAwesomeLipCare,
    path: "/products-category-page/new-awesome-lip-care-page/:category/:subcategory/:product",
  },
  // Mobile Tablets
  {
    component: NewMobileTablets,
    path: "/products-category-page/new-mobile-tablets-page/:category/:subcategory/:product",
  },
  // necklaces
  {
    component: NewNecklaces,
    path: "/products-category-page/new-necklaces-page/:category/:subcategory/:product",
  },
  // clothing
  {
    component: NewClothing,
    path: "/products-category-page/new-clothing-page/:category/:subcategory/:product",
  },
  // headphones
  {
    component: NewBluetooth,
    path: "/products-category-page/new-bluetooth-page/:category/:subcategory/:product",
  },
  // Facial Care
  {
    component: NewFacialCare,
    path: "/products-category-page/new-facial-care-page/:category/:subcategory/:product",
  },
  // shoes
  {
    component: NewShoes,
    path: "/products-category-page/new-shoes-page/:category/:subcategory/:product",
  },
  // CPU
  {
    component: NewCpu,
    path: "/products-category-page/new-cpu-page/:category/:subcategory/:product",
  },
  // Discover Skincare
  {
    component: NewDiscoverSkincare,
    path: "/products-category-page/new-discover-skincare-page/:category/:subcategory/:product",
  },
  // headphones
  {
    component: NewHeadphones,
    path: "/products-category-page/new-headphones-page/:category/:subcategory/:product",
  },
  // bracelets
  {
    component: NewBracelets,
    path: "/products-category-page/new-bracelets-page/:category/:subcategory/:product",
  },
  // smartwatch
  {
    component: NewSmartWatch,
    path: "/products-category-page/new-smartwatch-page/:category/:subcategory/:product",
  },

  // Cleaning
  { component: NewCleaning, path: "/professional-services/new-cleaning-page" },
  // Repairing
  {
    component: NewRepairing,
    path: "/professional-services/new-repairing-page",
  },
  // Gardening
  {
    component: NewGardening,
    path: "/professional-services/new-gardening-page",
  },
  // Tree Cutting
  {
    component: NewTreeCutting,
    path: "/professional-services/new-tree-cutting-page",
  },
  // Lawn Services
  {
    component: NewLawnServices,
    path: "/professional-services/new-lawn-services-page",
  },
  // Handyman
  { component: NewHandyman, path: "/professional-services/new-handyman-page" },
  // Snow Removal
  {
    component: NewSnowRemoval,
    path: "/professional-services/new-snow-removal-page",
  },
  // Pest Control
  {
    component: NewPestControl,
    path: "/professional-services/pest-control/basic-information",
  },
  // Electrical
  {
    component: NewElectrical,
    path: "/professional-services/new-electrical-page",
  },
  // earrings
  {
    component: NewEarrings,
    path: "/products-category-page/new-earrings-page/:category/:subcategory/:product",
  },
  // Houses
  {
    component: NewHouses,
    path: "/renting-category-page/new-houses-page/:category/:subcategory/:renting-item",
  },
  // Beauty
  {
    component: NewBeautyOfSkin,
    path: "/products-category-page/new-beauty-of-skin-page/:category/:subcategory/:product",
  },
];

export const noAuthRotes: IRoutes[] = [
  { component: ProductPage, path: "/renting-item-page/:id" },
  { component: Home, path: "/" },
  { component: Register, path: "/register" },
  { component: RentingCategories, path: "/renting" },
  { component: LoginPage, path: "/login" },
  { component: PrivacyPolicyPage, path: "/privacy-policy" },
  { component: CookiePolicyPage, path: "/cookie-policy" },
  { component: ShippingPolicyPage, path: "/shipping-policy" },
  { component: TermsConditionsPage, path: "/terms-and-conditions" },
  { component: FaqsPage, path: "/faq-s" },
  { component: NotFound, path: "/not-found" },
  { component: ForgottenPasswordPage, path: "/forgotten-password" },
  { component: ForgottenAttentionPage, path: "/forgotten-attention" },
  { component: NewPasswordPage, path: "/password/:token" },
  { component: ContactUsPage, path: "/contact-us" },
  { component: ProfessionalCategories, path: "/professional-services" },
  { component: ProductsPage, path: "/products" },
  { component: SendMessagePage, path: "/send-message" },
];
