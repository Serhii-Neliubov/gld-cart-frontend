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

export const buyerRoutes = [
  { component: Home, path: "" },
  { component: Renting, path: "" },
  { component: RegisterAsPage, path: "" },
  { component: NotFound, path: "" },
  { component: RegisterPage, path: "" },
  { component: LoginPage, path: "" },
  { component: PaymentPage, path: "" },
  { component: ProductsPage, path: "" },
  { component: ContactUsPage, path: "" },
  { component: SendMessagePage, path: "" },
  { component: ProfServicesPage, path: "" },
  { component: TermsConditionsPage, path: "" },
  { component: PrivacyPolicyPage, path: "" },
  { component: CookiePolicyPage, path: "" },
  { component: ShippingPolicyPage, path: "" },
  { component: FaqsPage, path: "" },
];
export const vendorRoutes = [
  { component: SubPlansPage, path: "" },
  { component: SubPlansPage, path: "" },
  { component: SubPlansPage, path: "" },
];
