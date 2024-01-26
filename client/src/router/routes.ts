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
import {SpecificationsVehicle} from "../pages/renting-vendor/pages/vehicle/SpecificationsVehicle.tsx";
import {
  BasicInformationCleaning
} from "../pages/professional-services-vendor/pages/cleaning/BasicInformationCleaning.tsx";
import {PhotoAndVideoCleaning} from "../pages/professional-services-vendor/pages/cleaning/PhotoAndVideoCleaning.tsx";
import {SpecificationsCleaning} from "../pages/professional-services-vendor/pages/cleaning/SpecificationsCleaning.tsx";
import {
  BasicInformationRepairing
} from "../pages/professional-services-vendor/pages/repairing/BasicInformationRepairing.tsx";
import {PhotoAndVideoRepairing} from "../pages/professional-services-vendor/pages/repairing/PhotoAndVideoRepairing.tsx";
import {
  SpecificationsRepairing
} from "../pages/professional-services-vendor/pages/repairing/SpecificationsRepairing.tsx";
import {
  BasicInformationGardening
} from "../pages/professional-services-vendor/pages/gardening/BasicInformationGardening.tsx";
import {PhotoAndVideoGardening} from "../pages/professional-services-vendor/pages/gardening/PhotoAndVideoGardening.tsx";
import {
  SpecificationsGardening
} from "../pages/professional-services-vendor/pages/gardening/SpecificationsGardening.tsx";
import {
  BasicInformationTreeCutting
} from "../pages/professional-services-vendor/pages/treeCutting/BasicInformationTreeCutting.tsx";
import {
  PhotoAndVideoTreeCutting
} from "../pages/professional-services-vendor/pages/treeCutting/PhotoAndVideoTreeCutting.tsx";
import {
  SpecificationsTreeCutting
} from "../pages/professional-services-vendor/pages/treeCutting/SpecificationsTreeCutting.tsx";
import {SpecificationsLawn} from "../pages/professional-services-vendor/pages/lawnServices/SpecificationsLawn.tsx";
import {PhotoAndVideoLawn} from "../pages/professional-services-vendor/pages/lawnServices/PhotoAndVideoLawn.tsx";
import {BasicInformationLawn} from "../pages/professional-services-vendor/pages/lawnServices/BasicInformationLawn.tsx";
import {
  BasicInformationHandyman
} from "../pages/professional-services-vendor/pages/handyman/BasicInformationHandyman.tsx";
import {PhotoAndVideoHandyman} from "../pages/professional-services-vendor/pages/handyman/PhotoAndVideoHandyman.tsx";
import {SpecificationsHandyman} from "../pages/professional-services-vendor/pages/handyman/SpecificationsHandyman.tsx";
import {
  BasicInformationSnowRemoval
} from "../pages/professional-services-vendor/pages/snowRemoval/BasicInformationSnowRemoval.tsx";
import {
  PhotoAndVideoSnowRemoval
} from "../pages/professional-services-vendor/pages/snowRemoval/PhotoAndVideoSnowRemoval.tsx";
import {
  SpecificationsSnowRemoval
} from "../pages/professional-services-vendor/pages/snowRemoval/SpecificationsSnowRemoval.tsx";
import {
  BasicInformationPestControl
} from "../pages/professional-services-vendor/pages/pestControl/BasicInformationPestControl.tsx";
import {
  PhotoAndVideoPestControl
} from "../pages/professional-services-vendor/pages/pestControl/PhotoAndVideoPestControl.tsx";
import {
  SpecificationsPestControl
} from "../pages/professional-services-vendor/pages/pestControl/SpecificationsPestControl.tsx";
import {
  BasicInformationElectrical
} from "../pages/professional-services-vendor/pages/electrical/BasicInformationElectrical.tsx";
import {
  PhotoAndVideoElectrical
} from "../pages/professional-services-vendor/pages/electrical/PhotoAndVideoElectrical.tsx";
import {
  SpecificationsElectrical
} from "../pages/professional-services-vendor/pages/electrical/SpecificationsElectrical.tsx";

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
  // Awesome Lip Care
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
  // Cleaning
  {
    component: BasicInformationCleaning,
    path: "/professional-services/cleaning/basic-information",
  },
  {
    component: PhotoAndVideoCleaning,
    path: '/professional-services/cleaning/basic-information/photo-and-video'
  },
  {
    component: SpecificationsCleaning,
    path: '/professional-services/cleaning/basic-information/photo-and-video/specifications'
  },
  // Repairing
  {
    component: BasicInformationRepairing,
    path: "/professional-services/repairing/basic-information",
  },
  {
    component: PhotoAndVideoRepairing,
    path: '/professional-services/repairing/basic-information/photo-and-video'
  },
  {
    component: SpecificationsRepairing,
    path: '/professional-services/repairing/basic-information/photo-and-video/specifications'
  },
  // Gardening
  {
    component: BasicInformationGardening,
    path: "/professional-services/gardening/basic-information",
  },
  {
    component: PhotoAndVideoGardening,
    path: '/professional-services/gardening/basic-information/photo-and-video'
  },
  {
    component: SpecificationsGardening,
    path: '/professional-services/gardening/basic-information/photo-and-video/specifications'
  },
  // Tree Cutting
  {
    component: BasicInformationTreeCutting,
    path: "/professional-services/tree-cutting/basic-information",
  },
  {
    component: PhotoAndVideoTreeCutting,
    path: '/professional-services/tree-cutting/basic-information/photo-and-video'
  },
  {
    component: SpecificationsTreeCutting,
    path: '/professional-services/tree-cutting/basic-information/photo-and-video/specifications'
  },
  // Lawn Services
  {
    component: BasicInformationLawn,
    path: "/professional-services/lawn-services/basic-information",
  },
  {
    component: PhotoAndVideoLawn,
    path: '/professional-services/lawn-services/basic-information/photo-and-video'
  },
  {
    component: SpecificationsLawn,
    path: '/professional-services/lawn-services/basic-information/photo-and-video/specifications'
  },
  // Handyman
  {
    component: BasicInformationHandyman,
    path: "/professional-services/handyman/basic-information",
  },
  {
    component: PhotoAndVideoHandyman,
    path: '/professional-services/handyman/basic-information/photo-and-video'
  },
  {
    component: SpecificationsHandyman,
    path: '/professional-services/handyman/basic-information/photo-and-video/specifications'
  },
  // Snow Removal
  {
    component: BasicInformationSnowRemoval,
    path: "/professional-services/snow-removal/basic-information",
  },
  {
    component: PhotoAndVideoSnowRemoval,
    path: '/professional-services/snow-removal/basic-information/photo-and-video'
  },
  {
    component: SpecificationsSnowRemoval,
    path: '/professional-services/snow-removal/basic-information/photo-and-video/specifications'
  },
  // Pest Control
  {
    component: BasicInformationPestControl,
    path: "/professional-services/pest-control/basic-information",
  },
  {
    component: PhotoAndVideoPestControl,
    path: '/professional-services/pest-control/basic-information/photo-and-video'
  },
  {
    component: SpecificationsPestControl,
    path: '/professional-services/pest-control/basic-information/photo-and-video/specifications'
  },
  // Electrical
  {
    component: BasicInformationElectrical,
    path: "/professional-services/electrical/basic-information",
  },
  {
    component: PhotoAndVideoElectrical,
    path: '/professional-services/electrical/basic-information/photo-and-video'
  },
  {
    component: SpecificationsElectrical,
    path: '/professional-services/electrical/basic-information/photo-and-video/specifications'
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
