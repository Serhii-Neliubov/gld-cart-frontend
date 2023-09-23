import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Renting from "../pages/Renting";
import RegisterAsPage from "../pages/RegisterAsPage";
import LoginPage from "../pages/LoginPage";
import { FC, useState } from "react";
import RegisterPage from "../pages/RegisterPage";
import SubPlansPage from "../pages/SubPlansPage";
import PaymentPage from "../pages/PaymentPage";

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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
