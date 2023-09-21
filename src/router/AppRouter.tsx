import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Renting from "../pages/Renting";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Renting />} path="/renting" />
        <Route element={<LoginPage />} path="/" />
        <Route element={<RegisterPage />} path="/register-page" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
