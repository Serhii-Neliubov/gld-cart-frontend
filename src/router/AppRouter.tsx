import Home from "../pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Renting from "../pages/RentingPage/Renting";
import RegisterAsPage from "../pages/RegisterAsPage/RegisterAsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { FC, useState } from "react";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
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

const AppRouter: FC = () => {
  const [isVendorType, setIsVendorType] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Renting />} path="/renting" />
        <Route
          element={<RegisterAsPage setIsVendorType={setIsVendorType} />}
          path="/user-type-page"
        />
        <Route
          element={<RegisterPage isVendorType={isVendorType} />}
          path="/register-page"
        />
        <Route
          element={<LoginPage isVendorType={isVendorType} />}
          path="/login"
        />
        <Route element={<SubPlansPage />} path="/sub-plans" />
        <Route element={<PaymentPage />} path="/payment" />
        <Route element={<ProductsPage />} path="/products" />
        <Route element={<ContactUsPage />} path="/contact-us" />
        <Route element={<SendMessagePage />} path="/send-message" />
        <Route element={<ProfServicesPage />} path="/personal-services" />
        <Route element={<TermsConditionsPage />} path="/terms-and-conditions" />
        <Route element={<PrivacyPolicyPage />} path="/privacy-policy" />
        <Route element={<CookiePolicyPage />} path="/cookie-policy" />
        <Route element={<ShippingPolicyPage />} path="/shipping-policy" />
        <Route element={<FaqsPage />} path="/faq-s" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
