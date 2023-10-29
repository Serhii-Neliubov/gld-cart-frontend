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

export const buyerRoutes = [
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
];
export const vendorRoutes = [
  { component: Home, path: "/" },
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
  { component: RentingProfservicesPage, path: "/personal-services" },
];

export const noAuthRotes = [
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
];
