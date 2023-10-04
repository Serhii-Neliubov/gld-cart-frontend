import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FC } from "react";
import Label from "../components/Home/HomeElements/Label";
import Header from "../components/UI/Header";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { noAuthRotes, buyerRoutes, vendorRoutes } from "./routes";

const AppRouter: FC = () => {
  const isVendor = useSelector((state: RootState) => state.isVendor.value);
  const isAuth = useSelector((state: RootState) => state.isAuth.value);
  console.log(isAuth);
  return (
    <BrowserRouter>
      <Header />
      <Label />
      <Routes>
        {isAuth
          ? isVendor
            ? vendorRoutes.map((route) => {
                return (
                  <Route
                    Component={route.component}
                    path={route.path}
                    key={route.path}
                  />
                );
              })
            : buyerRoutes.map((route) => {
                return (
                  <Route
                    Component={route.component}
                    path={route.path}
                    key={route.path}
                  />
                );
              })
          : noAuthRotes.map((route) => {
              return (
                <Route
                  Component={route.component}
                  path={route.path}
                  key={route.path}
                />
              );
            })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
