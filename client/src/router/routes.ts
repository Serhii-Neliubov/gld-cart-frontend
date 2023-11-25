import Home from "../pages/HomePage/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFound from "../pages/NotFound/NotFound";
import RegisterAsPage from "../pages/RegisterAsPage/RegisterAsPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Renting from "../pages/RentingPage/Renting";
import SubPlansPage from "../pages/SubPlansPage/SubPlansPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import SendMessagePage from "../pages/SendMessagePage/SendMessagePage";
import ProfServicesPage from "../pages/ProfServicesPage/ProfServicesPage";
import TermsConditionsPage from "../pages/TermsConditionsPage/TermsConditionsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import CookiePolicyPage from "../pages/CookiePolicyPage/CookiePolicyPage";
import ShippingPolicyPage from "../pages/ShippingPolicyPage/ShippingPolicyPage";
import FaqsPage from "../pages/FaqsPage/FaqsPage";
import RentingCategoryPage from "../pages/RentingCategoryPage/RentingCategoryPage";
import NoWishListPage from "../pages/NoWishListPage/NoWishListPage";
import NoShoppingCartPage from "../pages/NoShoppingCartPage/NoShoppingCartPage";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage";
import RentingCarPage from "../pages/RentingCarPage/RentingCarPage";
import RentingElectronicsPage from "../pages/RentingElectronicsPage/RentingElectronicsPage";
import RentingHousePage from "../pages/RentingHousePage/RentingCarPage";
import RentingProductsPage from "../pages/RentingProductsPage/RentingProductsPage";
import CleaningPage from "../pages/CleaningPage/CleaningPage";
import GardeningPage from "../pages/GardeningPage/GardeningPage";
import RepairingPage from "../pages/RepairingPage/RepairingPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RentingProfservicesPage from "../pages/RentingProfservicesPage/RentingProductsPage";
import ForgottenPasswordPage from "../pages/ForgottenPasswordPage/ForgottenPasswordPage";
import ForgottenAttentionPage from "../pages/ForgottenEttantionPage/ForgottenAttentionPage";
import { FC } from "react";
import NewPasswordPage from "../pages/NewPasswordPage/NewPasswordPage";
import HelpAndSupport from "../pages/HelpAndSupport/HelpAndSupport";
import QuestionsAndAnswers from "../pages/QuestionsAndAnswers/QuestionsAndAnswers";
import BasicInformationPage from "../pages/BasicInformationPage/BasicInformationPage";
import BasicInformationPhoto from "../pages/BasicInformationPhoto/BasicInformationPhoto";
import SpecificationsPage from "../pages/SpecificationsPage/SpecificationsPage";
import ItemPublishPage from "../components/UI/ItemPublishPage/ItemPublishPage";
import PublishSuccessfully from "../pages/PublishSuccessfully/PublishSuccessfully";
import HouseRentingForm from "../pages/HouseRentingForm/HouseRentingForm";
import HouseRentingPhoto from "../pages/HouseRentingPhoto/HouseRentingPhoto";
import HouseRentingSpecifications from "../pages/HouseRentingSpecifications/HouseRentingSpecifications";
import HousePublishing from "../pages/HousePublishing/HousePublishing";
import ElectronicsRentingForm from "../pages/ElectronicsRentingForm/ElectronicsRentingForm";
import ElectronicsRentingPhoto from "../pages/ElectronicsRentingPhoto/ElectronicsRentingPhoto";
import ElectronicsRentingSpecifications from "../pages/ElectronicsRentingSpecifications/ElectronicsRentingSpecifications";
import ElectronicsRentingPublishing from "../pages/ElectronicsRentingPublishing/ElectronicsRentingPublishing";
import CleaningServiceForm from "../pages/CleaningServiceForm/CleaningServiceForm";
import CleaningServicePhoto from "../pages/CleaningServicePhoto/CleaningServicePhoto";
import CleaningServiceSpecifications from "../pages/CleaningServiceSpecifications/CleaningServiceSpecifications";
import CleaningServicePublishing from "../pages/CleaningServicePublishing/CleaningServicePublishing";
import RepairingServiceForm from "../pages/RepairingServiceForm/RepairingServiceForm";
import RepairingServicePhoto from "../pages/RepairingServicePhoto/RepairingServicePhoto";
import RepairingServiceSpecifications from "../pages/RepairingServiceSpecifications/RepairingServiceSpecifications";
import RepairingServicePublishing from "../pages/RepairingServicePublishing/RepairingServicePublishing";
import GardeningServiceForm from "../pages/GardeningServiceForm/GardeningServiceForm";
import GardeningServicePhoto from "../pages/GardeningServicePhoto/GardeningServicePhoto";
import GardeningServiceSpecifications from "../pages/GardeningServiceSpecifications/GardeningServiceSpecifications";
import GardeningServicePublishing from "../pages/GardeningServicePublishing/GardeningServicePublishing";
import TreeCuttingServiceForm from "../pages/TreeCuttingServiceForm/TreeCuttingServiceForm";
import TreeCuttingServicePhoto from "../pages/TreeCuttingServicePhoto/TreeCuttingServicePhoto";
import TreeCuttingServicePublishing from "../pages/TreeCuttingServicePublishing/TreeCuttingServicePublishing";

interface IRoutes {
  component: FC;
  path: string;
}

export const buyerRoutes: IRoutes[] = [
  { component: Home, path: "/" },
  { component: Renting, path: "/renting" },
  { component: ContactUsPage, path: "/contact-us" },
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
  { component: NoWishListPage, path: "/wishlist-no-found" },
  { component: NoShoppingCartPage, path: "/shopping-cart-no-found" },
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
  { component: Renting, path: "/renting" },
  { component: RegisterAsPage, path: "/user-type-page" },
  { component: LoginPage, path: "/login" },
  { component: RegisterPage, path: "/register-page" },
  { component: PrivacyPolicyPage, path: "/privacy-policy" },
  { component: CookiePolicyPage, path: "/cookie-policy" },
  { component: ShippingPolicyPage, path: "/shipping-policy" },
  { component: TermsConditionsPage, path: "/terms-and-conditions" },
  { component: FaqsPage, path: "/faq-s" },
  { component: NotFound, path: "/not-found" },
  { component: ProductsPage, path: "/products" },
  { component: ProfServicesPage, path: "/personal-services" },
  { component: ForgottenPasswordPage, path: "/forgotten-password" },
  { component: ForgottenAttentionPage, path: "/forgotten-attention" },
  { component: NewPasswordPage, path: "/reset-password/:token" },
];
