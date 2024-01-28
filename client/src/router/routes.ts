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
import {NewVehicle} from "../pages/renting-vendor/pages/vehicle/NewVehicle.tsx";
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
import {
  PublishCompleteSnowRemoval
} from "../pages/professional-services-vendor/pages/snowRemoval/PublishCompleteSnowRemoval.tsx";
import {
  PublishCompletePestControl
} from "../pages/professional-services-vendor/pages/pestControl/PublishCompletePestControl.tsx";
import {PublishCompleteHouses} from "../pages/renting-vendor/pages/houses/PublishCompleteHouses.tsx";
import {PublishCompleteElectronics} from "../pages/renting-vendor/pages/electronics/PublishCompleteElectronics.tsx";
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
import {
  PublishCompleteCleaning
} from "../pages/professional-services-vendor/pages/cleaning/PublishCompleteCleaning.tsx";
import {
  PublishCompleteRepairing
} from "../pages/professional-services-vendor/pages/repairing/PublishCompleteRepairing.tsx";
import {
  PublishCompleteGardening
} from "../pages/professional-services-vendor/pages/gardening/PublishCompleteGardening.tsx";
import {
  PublishCompleteTreeCutting
} from "../pages/professional-services-vendor/pages/treeCutting/PublishCompleteTreeCutting.tsx";
import {PublishCompleteLawn} from "../pages/professional-services-vendor/pages/lawnServices/PublishCompleteLawn.tsx";
import {
  PublishCompleteHandyman
} from "../pages/professional-services-vendor/pages/handyman/PublishCompleteHandyman.tsx";
import {
  PublishCompleteElectrical
} from "../pages/professional-services-vendor/pages/electrical/PublishCompleteElectrical.tsx";

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
    component: PublishCompleteSnowRemoval,
    path: "/renting-category-page/snow-removal/photo-and-video/specifications/publish-complete",
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
    component: PublishCompletePestControl,
    path: "/renting-category-page/pest-control/basic-information/photo-and-video/specifications/publish-complete",
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
    component: NewVehicle,
    path: "/renting-category-page/new-vehicle-page",
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
    component: PublishCompleteElectronics,
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
  {
    component: PublishCompleteCleaning,
    path: '/professional-services/cleaning/basic-information/photo-and-video/specifications/publish-complete'
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
  {
    component: PublishCompleteRepairing,
    path: '/professional-services/repairing/basic-information/photo-and-video/specifications/publish-complete'
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
  {
    component: PublishCompleteGardening,
    path: '/professional-services/gardening/basic-information/photo-and-video/specifications/publish-complete'
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
  {
    component: PublishCompleteTreeCutting,
    path: '/professional-services/tree-cutting/basic-information/photo-and-video/specifications/publish-complete'
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
  {
    component: PublishCompleteLawn,
    path: '/professional-services/lawn-services/basic-information/photo-and-video/specifications/publish-complete'
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
  {
    component: PublishCompleteHandyman,
    path: '/professional-services/handyman/basic-information/photo-and-video/specifications/publish-complete'
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
  {
    component: PublishCompleteSnowRemoval,
    path: '/professional-services/snow-removal/basic-information/photo-and-video/specifications/publish-complete'
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
  {
    component: PublishCompletePestControl,
    path: '/professional-services/pest-control/basic-information/photo-and-video/specifications/publish-complete'
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
  {
    component: PublishCompleteElectrical,
    path: '/professional-services/electrical/basic-information/photo-and-video/specifications/publish-complete'
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
    component: PublishCompleteHouses,
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
