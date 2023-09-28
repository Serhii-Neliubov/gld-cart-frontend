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
import WishListPage from "../pages/NoWishListPage/NoWishListPage";
import NoShoppingCartPage from "../pages/NoShoppingCartPage/NoShoppingCartPage";
import PageStructure from "../components/UI/PagesStructure";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage";

const AppRouter: FC = () => {
  const [isVendorType, setIsVendorType] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PageStructure>
              <Home />
            </PageStructure>
          }
          path="/"
        />
        <Route
          element={
            <PageStructure>
              <Renting />
            </PageStructure>
          }
          path="/renting"
        />

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
        <Route
          element={
            <PageStructure>
              <SubPlansPage />
            </PageStructure>
          }
          path="/sub-plans"
        />
        <Route
          element={
            <PageStructure>
              <PaymentPage />
            </PageStructure>
          }
          path="/payment"
        />
        <Route
          element={
            <PageStructure>
              <ProductsPage />
            </PageStructure>
          }
          path="/products"
        />
        <Route
          element={
            <PageStructure>
              <ContactUsPage />
            </PageStructure>
          }
          path="/contact-us"
        />
        <Route element={<SendMessagePage />} path="/send-message" />
        <Route
          element={
            <PageStructure>
              <ProfServicesPage />
            </PageStructure>
          }
          path="/personal-services"
        />
        <Route
          element={
            <PageStructure>
              <TermsConditionsPage />
            </PageStructure>
          }
          path="/terms-and-conditions"
        />
        <Route
          element={
            <PageStructure>
              <PrivacyPolicyPage />
            </PageStructure>
          }
          path="/privacy-policy"
        />
        <Route
          element={
            <PageStructure>
              <CookiePolicyPage />
            </PageStructure>
          }
          path="/cookie-policy"
        />
        <Route
          element={
            <PageStructure>
              <ShippingPolicyPage />
            </PageStructure>
          }
          path="/shipping-policy"
        />
        <Route
          element={
            <PageStructure>
              <FaqsPage />
            </PageStructure>
          }
          path="/faq-s"
        />
        <Route
          element={
            <PageStructure>
              <WishListPage />
            </PageStructure>
          }
          path="/wishlist-no-found"
        />
        <Route
          element={
            <PageStructure>
              <NoShoppingCartPage />
            </PageStructure>
          }
          path="/shopping-cart-no-found"
        />
        <Route
          element={
            <PageStructure>
              <ShoppingCartPage />
            </PageStructure>
          }
          path="/shopping-cart"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
