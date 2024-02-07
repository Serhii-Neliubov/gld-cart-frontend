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
import Renting from "../pages/renting-buyer/Renting";
import RentingCarPage from "../pages/renting-buyer/car/RentingCarPage";
import RentingElectronicsPage from "../pages/renting-buyer/electronics/RentingElectronicsPage";
import RentingCategoryPage from "../pages/renting-vendor/RentingCategoryPage";
import RentingProductsPage from "../pages/products-vendor/RentingProductsPage";
import SendMessagePage from "../pages/send-message-successfully/SendMessagePage";
import ProductsPage from "../pages/products-buyer/ProductsPage";
import ProfServicesPage from "../pages/professional-services-buyer/ProfServicesPage";
import CleaningPage from "../pages/professional-services-buyer/cleaning/CleaningPage";
import GardeningPage from "../pages/professional-services-buyer/gardening/GardeningPage";
import RepairingPage from "../pages/professional-services-buyer/repairing/RepairingPage";
import RentingProfservicesPage from "../pages/professional-services-vendor/RentingProfservicesPage.tsx";
import TrackOrder from "../pages/track-order/TrackOrder";
import RentingHousePage from "../pages/renting-buyer/house/RentingHousePage";
import JobApplicationForm from "../components/JobApplicationForm/JobApplicationForm.tsx";
import {NewVehicle} from "../pages/renting-vendor/pages/vehicle/NewVehicle.tsx";
import {NewElectronics} from "../pages/renting-vendor/pages/electronics/NewElectronics.tsx";
import {NewHouses} from "../pages/renting-vendor/pages/houses/NewHouses.tsx";
import {NewBeautyOfSkin} from "../pages/products-vendor/pages/beautyOfSkin/NewBeautyOfSkin.tsx";
import {NewBags} from "../pages/products-vendor/pages/bags/NewBags.tsx";
import {NewAwesomeLipCare} from "../pages/products-vendor/pages/awesome/NewAwesomeLipCare.tsx";
import {
  NewMobileTablets
} from "../pages/products-vendor/pages/mobileTablets/NewMobileTablets.tsx";
import {NewNecklaces} from "../pages/products-vendor/pages/necklaces/NewNecklaces.tsx";
import {NewClothing} from "../pages/products-vendor/pages/clothing/NewClothing.tsx";
import {NewBluetooth} from "../pages/products-vendor/pages/bluetooth/NewBluetooth.tsx";
import {NewFacialCare} from "../pages/products-vendor/pages/facial/NewFacialCare.tsx";
import {NewShoes} from "../pages/products-vendor/pages/shoes/NewShoes.tsx";
import {NewCpu} from "../pages/products-vendor/pages/cpu/NewCpu.tsx";
import {NewDiscoverSkincare} from "../pages/products-vendor/pages/discover/NewDiscoverSkincare.tsx";
import {NewHeadphones} from "../pages/products-vendor/pages/headphones/NewHeadphones.tsx";
import {NewBracelets} from "../pages/products-vendor/pages/braceletes/NewBracelets.tsx";
import {NewSmartWatch} from "../pages/products-vendor/pages/smartWatch/NewSmartWatch.tsx";
import {NewEarrings} from "../pages/products-vendor/pages/earrings/NewEarrings.tsx";
import {
  NewCleaning
} from "../pages/professional-services-vendor/pages/cleaning/NewCleaning.tsx";
import {
  NewRepairing
} from "../pages/professional-services-vendor/pages/repairing/NewRepairing.tsx";
import {
  NewGardening
} from "../pages/professional-services-vendor/pages/gardening/NewGardening.tsx";
import {
  NewTreeCutting
} from "../pages/professional-services-vendor/pages/treeCutting/NewTreeCutting.tsx";
import {NewLawnServices} from "../pages/professional-services-vendor/pages/lawnServices/NewLawnServices.tsx";
import {
  NewHandyman
} from "../pages/professional-services-vendor/pages/handyman/NewHandyman.tsx";
import {
  NewSnowRemoval
} from "../pages/professional-services-vendor/pages/snowRemoval/NewSnowRemoval.tsx";
import {
  NewPestControl
} from "../pages/professional-services-vendor/pages/pestControl/NewPestControl.tsx";
import {
  NewElectrical
} from "../pages/professional-services-vendor/pages/electrical/NewElectrical.tsx";
import {DriverLicense} from "../pages/driver-licese/DriverLicense.tsx";
import {SupportChat} from "../pages/support-chat/SupportChat.tsx";
import CarPage from "../pages/renting-buyer/car/components/car-page/CarPage.tsx";

interface IRoutes {
  component: FC;
  path: string;
}

export const buyerRoutes: IRoutes[] = [
  { component: Home, path: "/" },
  { component: SupportChat, path: "/support-chat" },
  { component: DriverLicense, path: "/driver-license" },
  { component: CarPage, path: "/renting-car/:id" },
  { component: TrackOrder, path: "/track-an-order" },
  { component: Renting, path: "/renting" },
  { component: ContactUsPage, path: "/contact-us" },
  { component: JobApplicationForm, path: "/professional-services/application-job-form" },
  { component: PrivacyPolicyPage, path: "/privacy-policy" },
  { component: CookiePolicyPage, path: "/cookie-policy" },
  { component: ShippingPolicyPage, path: "/shipping-policy" },
  { component: TermsConditionsPage, path: "/terms-and-conditions" },
  { component: FaqsPage, path: "/faq-s" },
  { component: NotFound, path: "/not-found" },
  { component: PaymentPage, path: "/payment" },
  { component: ProductsPage, path: "/products" },
  { component: SendMessagePage, path: "/send-message" },
  { component: ProfServicesPage, path: "/professional-services" },
  { component: WishlistPage, path: "/wishlist" },
  { component: ShoppingCartPage, path: "/shopping-cart" },
  { component: RentingCarPage, path: "/renting-car" },
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
  { component: DriverLicense, path: "/driver-license" },
  { component: SupportChat, path: "/support-chat" },
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
  { component: SubPlansPage, path: "/sub-plans" },
  { component: PaymentPage, path: "/payment" },
  { component: SendMessagePage, path: "/send-message" },
  { component: RentingProductsPage, path: "/products-category-page" },
  { component: ProfilePage, path: "/profile" },
  { component: HelpAndSupport, path: "/help-and-support" },
  { component: RentingProfservicesPage, path: "/professional-services" },
  { component: QuestionsAndAnswers, path: "/chat-answers" },
  // Vehicles
  {
    component: NewVehicle,
    path: "/renting-category-page/new-vehicle-page",
  },
  // Electronics
  {
    component: NewElectronics,
    path: "/renting-category-page/new-electronics-page",
  },
  // Bags
  {
    component: NewBags,
    path: "/products-category-page/new-bags-page",
  },
  // Awesome Lip Care
  {
    component: NewAwesomeLipCare,
    path: "/products-category-page/new-awesome-lip-care-page",
  },
  // Mobile Tablets
  {
    component: NewMobileTablets,
    path: "/products-category-page/new-mobile-tablets-page",
  },
  // Necklaces
  {
    component: NewNecklaces,
    path: "/products-category-page/new-necklaces-page",
  },
  // Clothing
  {
    component: NewClothing,
    path: "/products-category-page/new-clothing-page",
  },
  // Bluetooth
  {
    component: NewBluetooth,
    path: "/products-category-page/new-bluetooth-page",
  },
  // Facial Care
  {
    component: NewFacialCare,
    path: "/products-category-page/new-facial-care-page",
  },
  // Shoes
  {
    component: NewShoes,
    path: "/products-category-page/new-shoes-page",
  },
  // CPU
  {
    component: NewCpu,
    path: "/products-category-page/new-cpu-page",
  },
  // Discover Skincare
  {
    component: NewDiscoverSkincare,
    path: "/products-category-page/new-discover-skincare-page",
  },
  // Headphones
  {
    component: NewHeadphones,
    path: "/products-category-page/new-headphones-page",
  },
  // Bracelets
  {
    component: NewBracelets,
    path: "/products-category-page/new-bracelets-page",
  },
  // SmartWatch
  {
    component: NewSmartWatch,
    path: "/products-category-page/new-smartwatch-page",
  },
  // Cleaning
  {
    component: NewCleaning,
    path: "/professional-services/new-cleaning-page",
  },
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
  {
    component: NewHandyman,
    path: "/professional-services/new-handyman-page",
  },
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
  // Earrings
  {
    component: NewEarrings,
    path: "/products-category-page/new-earrings-page",
  },
  // Houses
  {
    component: NewHouses,
    path: "/renting-category-page/new-houses-page",
  },
// Beauty
  {
    component: NewBeautyOfSkin,
    path: "/products-category-page/new-beauty-of-skin-page",
  },
];

export const noAuthRotes: IRoutes[] = [
  { component: Home, path: "/" },
  { component: RentingElectronicsPage, path: "/renting-electronics" },
  { component: RegisterAsPage, path: "/user-type-page" },
  { component: Renting, path: "/renting" },
  { component: RentingCarPage, path: "/renting-car" },
  { component: RentingHousePage, path: "/renting-house" },
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
  { component: ProfServicesPage, path: "/professional-services" },
  { component: ProductsPage, path: "/products" },

];
