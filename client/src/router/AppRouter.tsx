import Home from "../pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Renting from "../pages/RentingPage/Renting";
import RegisterAsPage from "../pages/RegisterAsPage/RegisterAsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { FC } from "react";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import SubPlansPage from "../pages/SubPlansPage/SubPlansPage";
import PaymentPage from "../pages/PaymentPage/Payment";
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
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage";
import RentingCategoryPage from "../pages/RentingCategoryPage/RentingCategoryPage";
import Label from "../components/Home/HomeElements/Label";
import Header from "../components/UI/Header";
import RentingCarPage from "../pages/RentingCarPage/RentingCarPage";
import RentingHousePage from "../pages/RentingHousePage/RentingCarPage";
import RentingElectronicsPage from "../pages/RentingElectronicsPage/RentingElectronicsPage";
import RentingProductsPage from "../pages/RentingProductsPage/RentingProductsPage";

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Label />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Renting />} path="/renting" />

        <Route element={<RegisterAsPage />} path="/user-type-page" />
        <Route element={<RegisterPage />} path="/register-page" />
        <Route element={<LoginPage />} path="/login" />
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
        <Route element={<WishListPage />} path="/wishlist-no-found" />
        <Route
          element={<NoShoppingCartPage />}
          path="/shopping-cart-no-found"
        />
        <Route element={<ShoppingCartPage />} path="/shopping-cart" />
        <Route
          element={<RentingCategoryPage />}
          path="/renting-category-page"
        />
        <Route
          element={<RentingProductsPage />}
          path="/products-category-page"
        />
        <Route element={<RentingCarPage />} path="/renting-car" />
        <Route element={<RentingHousePage />} path="/renting-house" />
        <Route
          element={<RentingElectronicsPage />}
          path="/renting-electronics"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
