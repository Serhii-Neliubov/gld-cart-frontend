import { FC } from "react";
import Home from "../pages/home/Home";
import ContactUsPage from "../pages/contact-us/ContactUsPage";
import PrivacyPolicyPage from "../pages/privacy-policy/PrivacyPolicyPage";
import CookiePolicyPage from "../pages/cookie-policy/CookiePolicyPage";
import ShippingPolicyPage from "../pages/shipping-policy/ShippingPolicyPage";
import FaqsPage from "../pages/faq-s/FaqsPage";
import TermsConditionsPage from "../pages/terms-conditions/TermsConditionsPage";
import HelpAndSupport from "../pages/help-and-support/HelpAndSupport";
import ProfilePage from "../pages/profile/ProfilePage";
import QuestionsAndAnswers from "../pages/questions-answers/QuestionsAndAnswers";
import ShoppingCartPage from "../pages/shopping-cart/ShoppingCartPage";
import ForgottenPasswordPage from "../pages/forgot-password/ForgottenPasswordPage";
import ForgottenAttentionPage from "../pages/forgot-password/forgot-password-sended/ForgottenAttentionPage";
import NewPasswordPage from "../pages/forgot-password/new-password/NewPasswordPage";
import LoginPage from "../pages/login/LoginPage";
import NotFound from "../pages/not-found/NotFound";
import PaymentPage from "../pages/payment/PaymentPage";
import RegisterAsPage from "../pages/register/RegisterAsPage";
import RegisterPage from "../pages/register/register-form/RegisterPage";
import SubPlansPage from "../pages/sub-plans/SubPlansPage";
import WishlistPage from "../pages/wishlist/WishlistPage";
import ItemPublishPage from "../components/UI/ItemPublishPage/ItemPublishPage";
import Renting from "../pages/renting-buyer/Renting";
import RentingCarPage from "../pages/renting-buyer/car/RentingCarPage";
import RentingElectronicsPage from "../pages/renting-buyer/electronics/RentingElectronicsPage";
import RentingCategoryPage from "../pages/renting-vendor/RentingCategoryPage";
import BasicInformationPage from "../pages/renting-vendor/vehicles/BasicInformationPage";
import SpecificationsPage from "../pages/renting-vendor/vehicles/specifications/SpecificationsPage";
import BasicInformationPhoto from "../pages/renting-vendor/vehicles/specifications/photo-and-video/BasicInformationPhoto";
import RentingProductsPage from "../pages/products-vendor/RentingProductsPage";
import SendMessagePage from "../pages/send-message-successfully/SendMessagePage";
import ProductsPage from "../pages/products-buyer/ProductsPage";
import PublishSuccessfully from "../pages/product-published-successfully/PublishSuccessfully";
import ProfServicesPage from "../pages/professional-services-buyer/ProfServicesPage";
import CleaningPage from "../pages/professional-services-buyer/cleaning/CleaningPage";
import GardeningPage from "../pages/professional-services-buyer/gardening/GardeningPage";
import HandymanServiceForm from "../pages/professional-services-buyer/handyman/HandymanServiceForm";
import HandymanServicePhoto from "../pages/professional-services-buyer/handyman/photo-and-video/HandymanServicePhoto";
import HandymanServiceSpecifications from "../pages/professional-services-buyer/handyman/photo-and-video/specifications/HandymanServiceSpecifications";
import HandymanServicePublishing from "../pages/professional-services-buyer/handyman/photo-and-video/specifications/publishing/HandymanServicePublishing";
import PestControlServiceForm from "../pages/professional-services-buyer/pest-control/PestControlServiceForm";
import PestControlServicePhoto from "../pages/professional-services-buyer/pest-control/photo-and-video/PestControlServicePhoto";
import PestControlServiceSpecifications from "../pages/professional-services-buyer/pest-control/photo-and-video/specifications/PestControlServiceSpecifications";
import PestControlServicePublishing from "../pages/professional-services-buyer/pest-control/photo-and-video/specifications/publishing/PestControlServicePublishing";
import RepairingPage from "../pages/professional-services-buyer/repairing/RepairingPage";
import SnowRemovalServiceForm from "../pages/professional-services-buyer/snow-removal/SnowRemovalServiceForm";
import SnowRemovalServicePhoto from "../pages/professional-services-buyer/snow-removal/photo-and-video/SnowRemovalServicePhoto";
import SnowRemovalServiceSpecifications from "../pages/professional-services-buyer/snow-removal/photo-and-video/specifications/SnowRemovalServiceSpecifications";
import SnowRemovalServicePublishing from "../pages/professional-services-buyer/snow-removal/photo-and-video/specifications/publishing/SnowRemovalServicePublishing";
import TreeCuttingServiceForm from "../pages/professional-services-buyer/tree-cutting/TreeCuttingServiceForm";
import TreeCuttingServicePhoto from "../pages/professional-services-buyer/tree-cutting/photo-and-video/TreeCuttingServicePhoto";
import TreeCuttingServicePublishing from "../pages/professional-services-buyer/tree-cutting/photo-and-video/specifications/publishing/TreeCuttingServicePublishing";
import RentingProfservicesPage from "../pages/professional-services-vendor/RentingProductsPage";
import CleaningServiceForm from "../pages/professional-services-vendor/cleaning-services/CleaningServiceForm";
import CleaningServicePhoto from "../pages/professional-services-vendor/cleaning-services/photo-and-video/CleaningServicePhoto";
import CleaningServiceSpecifications from "../pages/professional-services-vendor/cleaning-services/photo-and-video/specifications/CleaningServiceSpecifications";
import CleaningServicePublishing from "../pages/professional-services-vendor/cleaning-services/photo-and-video/specifications/publishing/CleaningServicePublishing";
import ElectricalServiceForm from "../pages/professional-services-vendor/electrical-service/ElectricalServiceForm";
import ElectricalServicePhoto from "../pages/professional-services-vendor/electrical-service/photo-and-video/ElectricalServicePhoto";
import ElectricalServiceSpecifications from "../pages/professional-services-vendor/electrical-service/photo-and-video/specifications/ElectricalServiceSpecifications";
import ElectricalServicePublishing from "../pages/professional-services-vendor/electrical-service/photo-and-video/specifications/publishing/ElectricalServicePublishing";
import GardeningServiceForm from "../pages/professional-services-vendor/gardening/GardeningServiceForm";
import GardeningServicePhoto from "../pages/professional-services-vendor/gardening/photo-and-video/GardeningServicePhoto";
import GardeningServiceSpecifications from "../pages/professional-services-vendor/gardening/photo-and-video/specifications/GardeningServiceSpecifications";
import GardeningServicePublishing from "../pages/professional-services-vendor/gardening/photo-and-video/specifications/publishing/GardeningServicePublishing";
import RepairingServiceForm from "../pages/professional-services-vendor/repairing/RepairingServiceForm";
import RepairingServicePhoto from "../pages/professional-services-vendor/repairing/photo-and-video/RepairingServicePhoto";
import RepairingServiceSpecifications from "../pages/professional-services-vendor/repairing/photo-and-video/specifications/RepairingServiceSpecifications";
import RepairingServicePublishing from "../pages/professional-services-vendor/repairing/photo-and-video/specifications/publishing/RepairingServicePublishing";
import ElectronicsRentingForm from "../pages/renting-vendor/electronics/ElectronicsRentingForm";
import ElectronicsRentingPhoto from "../pages/renting-vendor/electronics/photo-and-video/ElectronicsRentingPhoto";
import ElectronicsRentingSpecifications from "../pages/renting-vendor/electronics/photo-and-video/specifications/ElectronicsRentingSpecifications";
import ElectronicsRentingPublishing from "../pages/renting-vendor/electronics/photo-and-video/specifications/publishing/ElectronicsRentingPublishing";
import HouseRentingForm from "../pages/renting-vendor/house/HouseRentingForm";
import HouseRentingPhoto from "../pages/renting-vendor/house/photo-and-video/HouseRentingPhoto";
import HouseRentingSpecifications from "../pages/renting-vendor/house/photo-and-video/specifications/HouseRentingSpecifications";
import HousePublishing from "../pages/renting-vendor/house/photo-and-video/specifications/publishing/HousePublishing";
import LawnServiceForm from "../pages/renting-vendor/lawn/LawnServiceForm";
import LawnServicePhoto from "../pages/renting-vendor/lawn/photo-and-video/LawnServicePhoto";
import LawnServiceSpecifications from "../pages/renting-vendor/lawn/photo-and-video/specifications/LawnServiceSpecifications";
import LawnServicePublishing from "../pages/renting-vendor/lawn/photo-and-video/specifications/publishing/LawnServicePublishing";
import TrackOrder from "../pages/track-order/TrackOrder";
import CarPage from "../pages/renting-buyer/car/car-page/CarPage";
import RentingHousePage from "../pages/renting-buyer/house/RentingHousePage";
import JobApplicationForm from "../components/UI/JobApplicationForm/JobApplicationForm.tsx";

interface IRoutes {
  component: FC;
  path: string;
}

export const buyerRoutes: IRoutes[] = [
  { component: Home, path: "/" },
  { component: CarPage, path: "/renting-car/:id" },
  { component: TrackOrder, path: "/track-an-order" },
  { component: Renting, path: "/renting" },
  { component: ContactUsPage, path: "/contact-us" },
  { component: JobApplicationForm, path: "/personal-services/application-job-form" },
  { component: PrivacyPolicyPage, path: "/privacy-policy" },
  { component: CookiePolicyPage, path: "/cookie-policy" },
  { component: ShippingPolicyPage, path: "/shipping-policy" },
  { component: TermsConditionsPage, path: "/terms-and-conditions" },
  { component: FaqsPage, path: "/faq-s" },
  { component: NotFound, path: "/not-found" },
  { component: PaymentPage, path: "/payment" },
  { component: ProductsPage, path: "/products" },
  { component: SendMessagePage, path: "/send-message" },
  { component: ProfServicesPage, path: "/personal-services" },
  { component: WishlistPage, path: "/wishlist" },
  { component: ShoppingCartPage, path: "/shopping-cart" },
  { component: RentingCarPage, path: "renting-car" },
  { component: RentingCategoryPage, path: "/renting" },
  { component: RentingElectronicsPage, path: "/renting-electronics" },
  { component: RentingHousePage, path: "/renting-house" },
  { component: RentingProductsPage, path: "/products-category-page" },
  { component: CleaningPage, path: "/cleaning-page" },
  { component: GardeningPage, path: "/gardening-page" },
  { component: RepairingPage, path: "/repairing-page" },
  { component: ProfilePage, path: "/profile" },
  { component: QuestionsAndAnswers, path: "/chat-answers" },
  { component: HelpAndSupport, path: "/help-and-support" },
];
export const vendorRoutes: IRoutes[] = [
  { component: Home, path: "/" },
  // House
  { component: HouseRentingForm, path: "/renting-category-page/houses" },
  {
    component: HouseRentingPhoto,
    path: "/renting-category-page/houses/photo-and-video",
  },
  {
    component: HouseRentingSpecifications,
    path: "/renting-category-page/houses/photo-and-video/specifications",
  },
  {
    component: HousePublishing,
    path: "/renting-category-page/houses/photo-and-video/specifications/publishing",
  },
  // Electronics
  {
    component: ElectronicsRentingForm,
    path: "/renting-category-page/electronics",
  },
  {
    component: ElectronicsRentingPhoto,
    path: "/renting-category-page/electronics/photo-and-video",
  },
  {
    component: ElectronicsRentingSpecifications,
    path: "/renting-category-page/electronics/photo-and-video/specifications",
  },
  {
    component: ElectronicsRentingPublishing,
    path: "/renting-category-page/electronics/photo-and-video/specifications/publishing",
  },
  // Cleaning Service
  {
    component: CleaningServiceForm,
    path: "/personal-services/cleaning",
  },
  {
    component: CleaningServicePhoto,
    path: "/personal-services/cleaning/photo-and-video",
  },
  {
    component: CleaningServiceSpecifications,
    path: "/personal-services/cleaning/photo-and-video/specifications",
  },
  {
    component: CleaningServicePublishing,
    path: "/personal-services/cleaning/photo-and-video/specifications/publishing",
  },
  // Repairing Service
  {
    component: RepairingServiceForm,
    path: "/personal-services/repairing",
  },
  {
    component: RepairingServicePhoto,
    path: "/personal-services/repairing/photo-and-video",
  },
  {
    component: RepairingServiceSpecifications,
    path: "/renting-category-page/repairing/photo-and-video/specifications",
  },
  {
    component: RepairingServicePublishing,
    path: "/renting-category-page/repairing/photo-and-video/specifications/publishing",
  },
  // Gardening Service
  {
    component: GardeningServiceForm,
    path: "/personal-services/gardening",
  },
  {
    component: GardeningServicePhoto,
    path: "/personal-services/gardening/photo-and-video",
  },
  {
    component: GardeningServiceSpecifications,
    path: "/renting-category-page/gardening/photo-and-video/specifications",
  },
  {
    component: GardeningServicePublishing,
    path: "/renting-category-page/gardening/photo-and-video/specifications/publishing",
  },
  // Tree Cutting Service
  {
    component: TreeCuttingServiceForm,
    path: "/personal-services/tree-cutting",
  },
  {
    component: TreeCuttingServicePhoto,
    path: "/personal-services/tree-cutting/photo-and-video",
  },
  {
    component: GardeningServiceSpecifications,
    path: "/renting-category-page/tree-cutting/photo-and-video/specifications",
  },
  {
    component: TreeCuttingServicePublishing,
    path: "/renting-category-page/tree-cutting/photo-and-video/specifications/publishing",
  },
  // Lawn Service
  {
    component: LawnServiceForm,
    path: "/personal-services/lawn",
  },
  {
    component: LawnServicePhoto,
    path: "/personal-services/lawn/photo-and-video",
  },
  {
    component: LawnServiceSpecifications,
    path: "/renting-category-page/lawn/photo-and-video/specifications",
  },
  {
    component: LawnServicePublishing,
    path: "/renting-category-page/lawn/photo-and-video/specifications/publishing",
  },
  // Handyman Service
  {
    component: HandymanServiceForm,
    path: "/personal-services/handyman",
  },
  {
    component: HandymanServicePhoto,
    path: "/personal-services/handyman/photo-and-video",
  },
  {
    component: HandymanServiceSpecifications,
    path: "/renting-category-page/handyman/photo-and-video/specifications",
  },
  {
    component: HandymanServicePublishing,
    path: "/renting-category-page/handyman/photo-and-video/specifications/publishing",
  },
  // Snow Removal Service
  {
    component: SnowRemovalServiceForm,
    path: "/personal-services/snow-removal",
  },
  {
    component: SnowRemovalServicePhoto,
    path: "/personal-services/snow-removal/photo-and-video",
  },
  {
    component: SnowRemovalServiceSpecifications,
    path: "/renting-category-page/snow-removal/photo-and-video/specifications",
  },
  {
    component: SnowRemovalServicePublishing,
    path: "/renting-category-page/snow-removal/photo-and-video/specifications/publishing",
  },
  // Pest Control Service
  {
    component: PestControlServiceForm,
    path: "/personal-services/pest-control",
  },
  {
    component: PestControlServicePhoto,
    path: "/personal-services/pest-control/photo-and-video",
  },
  {
    component: PestControlServiceSpecifications,
    path: "/renting-category-page/pest-control/photo-and-video/specifications",
  },
  {
    component: PestControlServicePublishing,
    path: "/renting-category-page/pest-control/photo-and-video/specifications/publishing",
  },
  // Electrical Service
  {
    component: ElectricalServiceForm,
    path: "/personal-services/electrical",
  },
  {
    component: ElectricalServicePhoto,
    path: "/personal-services/electrical/photo-and-video",
  },
  {
    component: ElectricalServiceSpecifications,
    path: "/renting-category-page/electrical/photo-and-video/specifications",
  },
  {
    component: ElectricalServicePublishing,
    path: "/renting-category-page/electrical/photo-and-video/specifications/publishing",
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
  { component: SubPlansPage, path: "/sub-plans" },
  { component: PaymentPage, path: "/payment" },
  { component: SendMessagePage, path: "/send-message" },
  { component: RentingProductsPage, path: "/products-category-page" },
  { component: ProfilePage, path: "/profile" },
  { component: HelpAndSupport, path: "/help-and-support" },
  { component: RentingProfservicesPage, path: "/personal-services" },
  { component: QuestionsAndAnswers, path: "/chat-answers" },
  { component: BasicInformationPage, path: "/renting-category-page/vehicles" },

  {
    component: BasicInformationPhoto,
    path: "/renting-category-page/vehicles/photo-and-video",
  },
  {
    component: SpecificationsPage,
    path: "/renting-category-page/vehicles/photo-and-video/specifications",
  },
  {
    component: ItemPublishPage,
    path: "/renting-category-page/vehicles/photo-and-video/publishing",
  },

  {
    component: PublishSuccessfully,
    path: "/successfully-published",
  },
];

export const noAuthRotes: IRoutes[] = [
  { component: Home, path: "/" },
  { component: RegisterAsPage, path: "/user-type-page" },
  { component: LoginPage, path: "/login" },
  { component: RegisterPage, path: "/register-page" },
  { component: PrivacyPolicyPage, path: "/privacy-policy" },
  { component: CookiePolicyPage, path: "/cookie-policy" },
  { component: ShippingPolicyPage, path: "/shipping-policy" },
  { component: TermsConditionsPage, path: "/terms-and-conditions" },
  { component: FaqsPage, path: "/faq-s" },
  { component: NotFound, path: "/not-found" },
  { component: ForgottenPasswordPage, path: "/forgotten-password" },
  { component: ForgottenAttentionPage, path: "/forgotten-attention" },
  { component: NewPasswordPage, path: "/reset-password/:token" },
  { component: ContactUsPage, path: "/contact-us" },
];
