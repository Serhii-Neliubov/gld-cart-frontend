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
import PublishSuccessfully from "../pages/product-published-successfully/PublishSuccessfully";
import ProfServicesPage from "../pages/professional-services-buyer/ProfServicesPage";
import CleaningPage from "../pages/professional-services-buyer/cleaning/CleaningPage";
import GardeningPage from "../pages/professional-services-buyer/gardening/GardeningPage";
import RepairingPage from "../pages/professional-services-buyer/repairing/RepairingPage";
import RentingProfservicesPage from "../pages/professional-services-vendor/RentingProfservicesPage.tsx";
import TrackOrder from "../pages/track-order/TrackOrder";
import CarPage from "../pages/renting-buyer/car/car-page/CarPage";
import RentingHousePage from "../pages/renting-buyer/house/RentingHousePage";
import JobApplicationForm from "../components/JobApplicationForm/JobApplicationForm.tsx";
import {NewVehicle} from "../pages/renting-vendor/pages/vehicle/NewVehicle.tsx";
import {NewElectronics} from "../pages/renting-vendor/pages/electronics/NewElectronics.tsx";
import {NewHouses} from "../pages/renting-vendor/pages/houses/NewHouses.tsx";
import {BasicInformationBeauty} from "../pages/products-vendor/pages/beautyOfSkin/BasicInformationBeauty.tsx";
import {PhotoAndVideoBeauty} from "../pages/products-vendor/pages/beautyOfSkin/PhotoAndVideoBeauty.tsx";
import {SpecificationsBeauty} from "../pages/products-vendor/pages/beautyOfSkin/SpecificationsBeauty.tsx";
import {BasicInformationBags} from "../pages/products-vendor/pages/bags/BasicInformationBags.tsx";
import {PhotoAndVideoBags} from "../pages/products-vendor/pages/bags/PhotoAndVideoBags.tsx";
import {SpecificationsBags} from "../pages/products-vendor/pages/bags/SpecificationsBags.tsx";
import {BasicInformationAwesome} from "../pages/products-vendor/pages/awesome/BasicInformationAwesome.tsx";
import {PhotoAndVideoAwesome} from "../pages/products-vendor/pages/awesome/PhotoAndVideoAwesome.tsx";
import {SpecificationsAwesome} from "../pages/products-vendor/pages/awesome/SpecificationsAwesome.tsx";
import {
  BasicInformationMobileTablets
} from "../pages/products-vendor/pages/mobileTablets/BasicInformationMobileTablets.tsx";
import {PhotoAndVideoMobileTablets} from "../pages/products-vendor/pages/mobileTablets/PhotoAndVideoMobileTablets.tsx";
import {
  SpecificationsMobileTablets
} from "../pages/products-vendor/pages/mobileTablets/SpecificationsMobileTablets.tsx";
import {BasicInformationNecklaces} from "../pages/products-vendor/pages/necklaces/BasicInformationNecklaces.tsx";
import {PhotoAndVideoNecklaces} from "../pages/products-vendor/pages/necklaces/PhotoAndVideoNecklaces.tsx";
import {SpecificationsNecklaces} from "../pages/products-vendor/pages/necklaces/SpecificationsNecklaces.tsx";
import {BasicInformationClothing} from "../pages/products-vendor/pages/clothing/BasicInformationClothing.tsx";
import {PhotoAndVideoClothing} from "../pages/products-vendor/pages/clothing/PhotoAndVideoClothing.tsx";
import {SpecificationsClothing} from "../pages/products-vendor/pages/clothing/SpecificationsClothing.tsx";
import {BasicInformationBluetooth} from "../pages/products-vendor/pages/bluetooth/BasicInformationBluetooth.tsx";
import {PhotoAndVideoBluetooth} from "../pages/products-vendor/pages/bluetooth/PhotoAndVideoBluetooth.tsx";
import {SpecificationsBluetooth} from "../pages/products-vendor/pages/bluetooth/SpecificationsBluetooth.tsx";
import {BasicInformationFacial} from "../pages/products-vendor/pages/facial/BasicInformationFacial.tsx";
import {PhotoAndVideoFacial} from "../pages/products-vendor/pages/facial/PhotoAndVideoFacial.tsx";
import {SpecificationsFacial} from "../pages/products-vendor/pages/facial/SpecificationsFacial.tsx";
import {BasicInformationShoes} from "../pages/products-vendor/pages/shoes/BasicInformationShoes.tsx";
import {PhotoAndVideoShoes} from "../pages/products-vendor/pages/shoes/PhotoAndVideoShoes.tsx";
import {SpecificationsShoes} from "../pages/products-vendor/pages/shoes/SpecificationsShoes.tsx";
import {BasicInformationCpu} from "../pages/products-vendor/pages/cpu/BasicInformationCpu.tsx";
import {PhotoAndVideoCpu} from "../pages/products-vendor/pages/cpu/PhotoAndVideoCpu.tsx";
import {SpecificationsCpu} from "../pages/products-vendor/pages/cpu/SpecificationsCpu.tsx";
import {BasicInformationDiscover} from "../pages/products-vendor/pages/discover/BasicInformationDiscover.tsx";
import {PhotoAndVideoDiscover} from "../pages/products-vendor/pages/discover/PhotoAndVideoDiscover.tsx";
import {SpecificationsDiscover} from "../pages/products-vendor/pages/discover/SpecificationsDiscover.tsx";
import {BasicInformationHeadphones} from "../pages/products-vendor/pages/headphones/BasicInformationHeadphones.tsx";
import {PhotoAndVideoHeadphones} from "../pages/products-vendor/pages/headphones/PhotoAndVideoHeadphones.tsx";
import {SpecificationsHeadphones} from "../pages/products-vendor/pages/headphones/SpecificationsHeadphones.tsx";
import {BasicInformationBracelets} from "../pages/products-vendor/pages/braceletes/BasicInformationBracelets.tsx";
import {PhotoAndVideoBracelets} from "../pages/products-vendor/pages/braceletes/PhotoAndVideoBracelets.tsx";
import {SpecificationsBracelets} from "../pages/products-vendor/pages/braceletes/SpecificationsBracelets.tsx";
import {BasicInformationSmartWatch} from "../pages/products-vendor/pages/smartWatch/BasicInformationSmartWatch.tsx";
import {PhotoAndVideoSmartWatch} from "../pages/products-vendor/pages/smartWatch/PhotoAndVideoSmartWatch.tsx";
import {SpecificationsSmartWatch} from "../pages/products-vendor/pages/smartWatch/SpecificationsSmartWatch.tsx";
import {BasicInformationEarrings} from "../pages/products-vendor/pages/earrings/BasicInformationEarrings.tsx";
import {PhotoAndVideoEarrings} from "../pages/products-vendor/pages/earrings/PhotoAndVideoEarrings.tsx";
import {SpecificationsEarrings} from "../pages/products-vendor/pages/earrings/SpecificationsEarrings.tsx";
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
import {PublishCompleteBags} from "../pages/products-vendor/pages/bags/PublishCompleteBags.tsx";
import {PublishCompleteBeauty} from "../pages/products-vendor/pages/beautyOfSkin/PublishCompleteBeauty.tsx";
import {PublishCompleteAwesome} from "../pages/products-vendor/pages/awesome/PublishCompleteAwesome.tsx";
import {
  PublishCompleteMobileTablets
} from "../pages/products-vendor/pages/mobileTablets/PublishCompleteMobileTablets.tsx";
import {PublishCompleteNecklaces} from "../pages/products-vendor/pages/necklaces/PublishCompleteNecklaces.tsx";
import {PublishCompleteClothing} from "../pages/products-vendor/pages/clothing/PublishCompleteClothing.tsx";
import {PublishCompleteBluetooth} from "../pages/products-vendor/pages/bluetooth/PublishCompleteBluetooth.tsx";
import {PublishCompleteFacial} from "../pages/products-vendor/pages/facial/PublishCompleteFacial.tsx";
import {PublishCompleteShoes} from "../pages/products-vendor/pages/shoes/PublishCompleteShoes.tsx";
import {PublishCompleteCpu} from "../pages/products-vendor/pages/cpu/PublishCompleteCpu.tsx";
import {PublishCompleteDiscover} from "../pages/products-vendor/pages/discover/PublishCompleteDiscover.tsx";
import {PublishCompleteHeadphones} from "../pages/products-vendor/pages/headphones/PublishCompleteHeadphones.tsx";
import {PublishCompleteBracelets} from "../pages/products-vendor/pages/braceletes/PublishCompleteBracelets.tsx";
import {PublishCompleteSmartWatch} from "../pages/products-vendor/pages/smartWatch/PublishCompleteSmartWatch.tsx";
import {PublishCompleteEarrings} from "../pages/products-vendor/pages/earrings/PublishCompleteEarrings.tsx";

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
  { component: CleaningPage, path: "/cleaning-page" },
  { component: GardeningPage, path: "/gardening-page" },
  { component: RepairingPage, path: "/repairing-page" },
  { component: ProfilePage, path: "/profile" },
  { component: QuestionsAndAnswers, path: "/chat-answers" },
  { component: HelpAndSupport, path: "/help-and-support" },
];
export const vendorRoutes: IRoutes[] = [
  { component: Home, path: "/" },
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
  { component: RentingProfservicesPage, path: "/personal-services" },
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
  {
    component: PublishCompleteBags,
    path: '/renting-category-page/bags/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Awesome Lip Care
  {
    component: BasicInformationAwesome,
    path: "/products-category-page/awesome/basic-information",
  },
  {
    component: PhotoAndVideoAwesome,
    path: '/products-category-page/awesome/basic-information/photo-and-video'
  },
  {
    component: SpecificationsAwesome,
    path: '/products-category-page/awesome/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteAwesome,
    path: '/renting-category-page/awesome/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Mobile Tablets
  {
    component: BasicInformationMobileTablets,
    path: "/products-category-page/mobile-tablets/basic-information",
  },
  {
    component: PhotoAndVideoMobileTablets,
    path: '/products-category-page/mobile-tablets/basic-information/photo-and-video'
  },
  {
    component: SpecificationsMobileTablets,
    path: '/products-category-page/mobile-tablets/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteMobileTablets,
    path: '/renting-category-page/mobile-tablets/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Necklaces
  {
    component: BasicInformationNecklaces,
    path: "/products-category-page/necklaces/basic-information",
  },
  {
    component: PhotoAndVideoNecklaces,
    path: '/products-category-page/necklaces/basic-information/photo-and-video'
  },
  {
    component: SpecificationsNecklaces,
    path: '/products-category-page/necklaces/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteNecklaces,
    path: '/renting-category-page/necklaces/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Clothing
  {
    component: BasicInformationClothing,
    path: "/products-category-page/clothing/basic-information",
  },
  {
    component: PhotoAndVideoClothing,
    path: '/products-category-page/clothing/basic-information/photo-and-video'
  },
  {
    component: SpecificationsClothing,
    path: '/products-category-page/clothing/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteClothing,
    path: '/renting-category-page/clothing/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Bluetooth
  {
    component: BasicInformationBluetooth,
    path: "/products-category-page/bluetooth/basic-information",
  },
  {
    component: PhotoAndVideoBluetooth,
    path: '/products-category-page/bluetooth/basic-information/photo-and-video'
  },
  {
    component: SpecificationsBluetooth,
    path: '/products-category-page/bluetooth/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteBluetooth,
    path: '/renting-category-page/bluetooth/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Facial Care
  {
    component: BasicInformationFacial,
    path: "/products-category-page/facial/basic-information",
  },
  {
    component: PhotoAndVideoFacial,
    path: '/products-category-page/facial/basic-information/photo-and-video'
  },
  {
    component: SpecificationsFacial,
    path: '/products-category-page/facial/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteFacial,
    path: '/renting-category-page/facial/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Shoes
  {
    component: BasicInformationShoes,
    path: "/products-category-page/shoes/basic-information",
  },
  {
    component: PhotoAndVideoShoes,
    path: '/products-category-page/shoes/basic-information/photo-and-video'
  },
  {
    component: SpecificationsShoes,
    path: '/products-category-page/shoes/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteShoes,
    path: '/renting-category-page/shoes/basic-information/photo-and-video/specifications/publish-complete'
  },
  // CPU
  {
    component: BasicInformationCpu,
    path: "/products-category-page/cpu/basic-information",
  },
  {
    component: PhotoAndVideoCpu,
    path: '/products-category-page/cpu/basic-information/photo-and-video'
  },
  {
    component: SpecificationsCpu,
    path: '/products-category-page/cpu/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteCpu,
    path: '/renting-category-page/cpu/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Discover Skincare
  {
    component: BasicInformationDiscover,
    path: "/products-category-page/discover-skincare/basic-information",
  },
  {
    component: PhotoAndVideoDiscover,
    path: '/products-category-page/discover-skincare/basic-information/photo-and-video'
  },
  {
    component: SpecificationsDiscover,
    path: '/products-category-page/discover-skincare/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteDiscover,
    path: '/renting-category-page/discover-skincare/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Headphones
  {
    component: BasicInformationHeadphones,
    path: "/products-category-page/headphones/basic-information",
  },
  {
    component: PhotoAndVideoHeadphones,
    path: '/products-category-page/headphones/basic-information/photo-and-video'
  },
  {
    component: SpecificationsHeadphones,
    path: '/products-category-page/headphones/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteHeadphones,
    path: '/renting-category-page/headphones/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Bracelets
  {
    component: BasicInformationBracelets,
    path: "/products-category-page/bracelets/basic-information",
  },
  {
    component: PhotoAndVideoBracelets,
    path: '/products-category-page/bracelets/basic-information/photo-and-video'
  },
  {
    component: SpecificationsBracelets,
    path: '/products-category-page/bracelets/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteBracelets,
    path: '/renting-category-page/bracelets/basic-information/photo-and-video/specifications/publish-complete'
  },
  // SmartWatch
  {
    component: BasicInformationSmartWatch,
    path: "/products-category-page/smart-watch/basic-information",
  },
  {
    component: PhotoAndVideoSmartWatch,
    path: '/products-category-page/smart-watch/basic-information/photo-and-video'
  },
  {
    component: SpecificationsSmartWatch,
    path: '/products-category-page/smart-watch/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteSmartWatch,
    path: '/renting-category-page/smart-watch/basic-information/photo-and-video/specifications/publish-complete'
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
    component: BasicInformationEarrings,
    path: "/products-category-page/earrings/basic-information",
  },
  {
    component: PhotoAndVideoEarrings,
    path: '/products-category-page/earrings/basic-information/photo-and-video'
  },
  {
    component: SpecificationsEarrings,
    path: '/products-category-page/earrings/basic-information/photo-and-video/specifications'
  },
  {
    component: PublishCompleteEarrings,
    path: '/renting-category-page/earrings/basic-information/photo-and-video/specifications/publish-complete'
  },
  // Houses
  {
    component: NewHouses,
    path: "/renting-category-page/new-houses-page",
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
    component: PublishCompleteBeauty,
    path: '/products-category-page/beauty/basic-information/photo-and-video/specifications/publish-complete'
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
