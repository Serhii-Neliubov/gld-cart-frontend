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
import ItemPublishPage from "../components/ItemPublishPage/ItemPublishPage";
import Renting from "../pages/renting-buyer/Renting";
import RentingCarPage from "../pages/renting-buyer/car/RentingCarPage";
import RentingElectronicsPage from "../pages/renting-buyer/electronics/RentingElectronicsPage";
import RentingCategoryPage from "../pages/renting-vendor/RentingCategoryPage";
import RentingProductsPage from "../pages/products-vendor/RentingProductsPage";
import SendMessagePage from "../pages/send-message-successfully/SendMessagePage";
import ProductsPage from "../pages/products-buyer/ProductsPage";
import PublishSuccessfully from "../pages/product-published-successfully/PublishSuccessfully";
import ProfServicesPage from "../pages/professional-services-buyer/ProfServicesPage";
import CleaningPage from "../pages/professional-services-buyer/cleaning/CleaningPage";
import GardeningPage from "../pages/professional-services-buyer/gardening/GardeningPage";
import PestControlServiceForm from "../pages/professional-services-buyer/pest-control/PestControlServiceForm";
import PestControlServicePhoto from "../pages/professional-services-buyer/pest-control/photo-and-video/PestControlServicePhoto";
import PestControlServiceSpecifications from "../pages/professional-services-buyer/pest-control/photo-and-video/specifications/PestControlServiceSpecifications";
import PestControlServicePublishing from "../pages/professional-services-buyer/pest-control/photo-and-video/specifications/publishing/PestControlServicePublishing";
import RepairingPage from "../pages/professional-services-buyer/repairing/RepairingPage";
import SnowRemovalServiceForm from "../pages/professional-services-buyer/snow-removal/SnowRemovalServiceForm";
import SnowRemovalServicePhoto from "../pages/professional-services-buyer/snow-removal/photo-and-video/SnowRemovalServicePhoto";
import SnowRemovalServiceSpecifications from "../pages/professional-services-buyer/snow-removal/photo-and-video/specifications/SnowRemovalServiceSpecifications";
import SnowRemovalServicePublishing from "../pages/professional-services-buyer/snow-removal/photo-and-video/specifications/publishing/SnowRemovalServicePublishing";
import RentingProfservicesPage from "../pages/professional-services-vendor/RentingProfservicesPage.tsx";
import TrackOrder from "../pages/track-order/TrackOrder";
import CarPage from "../pages/renting-buyer/car/car-page/CarPage";
import RentingHousePage from "../pages/renting-buyer/house/RentingHousePage";
import JobApplicationForm from "../components/JobApplicationForm/JobApplicationForm.tsx";
import {BasicInformationVehicle} from "../pages/renting-vendor/pages/vehicle/BasicInformationVehicle.tsx";
import {PhotoAndVideoVehicle} from "../pages/renting-vendor/pages/vehicle/PhotoAndVideoVehicle.tsx";
import {SpecificationsVehicle} from "../pages/renting-vendor/pages/vehicle/./SpecificationsVehicle.tsx";
import {PublishComplete} from "../pages/renting-vendor/pages/vehicle/PublishComplete.tsx";
import {BasicInformationElectronics} from "../pages/renting-vendor/pages/electronics/BasicInformationElectronics.tsx";
import {PhotoAndVideoElectronics} from "../pages/renting-vendor/pages/electronics/PhotoAndVideoElectronics.tsx";
import {SpecificationsElectronics} from "../pages/renting-vendor/pages/electronics/SpecificationsElectronics.tsx";
import {BasicInformationHouses} from "../pages/renting-vendor/pages/houses/BasicInformationHouses.tsx";
import {PhotoAndVideoHouses} from "../pages/renting-vendor/pages/houses/PhotoAndVideoHouses.tsx";
import {SpecificationsHouses} from "../pages/renting-vendor/pages/houses/SpecificationsHouses.tsx";
import {BasicInformationBeauty} from "../pages/products-vendor/pages/beautyOfSkin/BasicInformationBeauty.tsx";
import {PhotoAndVideoBeauty} from "../pages/products-vendor/pages/beautyOfSkin/PhotoAndVideoBeauty.tsx";
import {SpecificationsBeauty} from "../pages/products-vendor/pages/beautyOfSkin/SpecificationsBeauty.tsx";
import {BasicInformationBags} from "../pages/products-vendor/pages/bags/BasicInformationBags.tsx";
import {PhotoAndVideoBags} from "../pages/products-vendor/pages/bags/PhotoAndVideoBags.tsx";
import {SpecificationsBags} from "../pages/products-vendor/pages/bags/SpecificationsBags.tsx";

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
  { component: RentingCarPage, path: "/renting-car" },
  { component: RentingCategoryPage, path: "/renting" },
  { component: RentingElectronicsPage, path: "/renting-beautyOfSkin" },
  { component: RentingHousePage, path: "/renting-house" },
  { component: RentingProductsPage, path: "/products-category-page" },
  { component: CleaningPage, path: "/beautyOfSkin-page" },
  { component: GardeningPage, path: "/gardening-page" },
  { component: RepairingPage, path: "/repairing-page" },
  { component: ProfilePage, path: "/profile" },
  { component: QuestionsAndAnswers, path: "/chat-answers" },
  { component: HelpAndSupport, path: "/help-and-support" },
];
export const vendorRoutes: IRoutes[] = [
  { component: Home, path: "/" },
  // Cleaning Service
  // Repairing Service
  // Gardening Service
  // Tree Cutting Service
  // Handyman Service
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
  // Vehicles
  {
    component: BasicInformationVehicle,
    path: "/renting-category-page/vehicle/basic-information",
  },
  {
    component: PhotoAndVideoVehicle,
    path: '/renting-category-page/vehicle/basic-information/photo-and-video'
  },
  {
    component: SpecificationsVehicle,
    path: '/renting-category-page/vehicle/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishComplete,
    path: '/renting-category-page/vehicle/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Electronics
  {
    component: BasicInformationElectronics,
    path: "/renting-category-page/electronics/basic-information",
  },
  {
    component: PhotoAndVideoElectronics,
    path: '/renting-category-page/electronics/basic-information/photo-and-video'
  },
  {
    component: SpecificationsElectronics,
    path: '/renting-category-page/electronics/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishComplete,
    path: '/renting-category-page/electronics/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Bags
  {
    component: BasicInformationBags,
    path: "/products-category-page/bags/basic-information",
  },
  {
    component: PhotoAndVideoBags,
    path: '/products-category-page/bags/basic-information/photo-and-video'
  },
  {
    component: SpecificationsBags,
    path: '/products-category-page/bags/basic-information/photo-and-video/specifications'
  },
  // Houses
  {
    component: BasicInformationHouses,
    path: "/renting-category-page/houses/basic-information",
  },
  {
    component: PhotoAndVideoHouses,
    path: '/renting-category-page/houses/basic-information/photo-and-video'
  },
  {
    component: SpecificationsHouses,
    path: '/renting-category-page/houses/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishComplete,
    path: '/renting-category-page/houses/basic-information/photo-and-video/specifications/publish-complete'
  },
// Beauty
  {
    component: BasicInformationBeauty,
    path: "/products-category-page/beauty/basic-information",
  },
  {
    component: PhotoAndVideoBeauty,
    path: '/products-category-page/beauty/basic-information/photo-and-video'
  },
  {
    component: SpecificationsBeauty,
    path: '/products-category-page/beauty/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishComplete,
    path: '/products-category-page/beauty/basic-information/photo-and-video/specifications/publish-complete'
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
  { component: NewPasswordPage, path: "/#/reset-password/:token" },
  { component: ContactUsPage, path: "/contact-us" },
];
