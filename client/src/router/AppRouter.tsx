import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FC } from "react";
import Label from "../components/Home/HomeElements/Label";
import Header from "../components/UI/Header";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { noAuthRotes, buyerRoutes, vendorRoutes } from "./routes";

const AppRouter: FC = () => {
  const isVendor = useSelector((state: RootState) => state.isVendor.value);
  const isAuth = useSelector((state: RootState) => state.isAuth.value);

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
                  <>
                    <Route
                      Component={route.component}
                      path={route.path}
                      key={route.path}
                    />
                    <Route path="/*" element={<Navigate to="/not-found" />} />
                  </>
                );
              })
          : noAuthRotes.map((route) => {
              return (
                <>
                  <Route
                    Component={route.component}
                    path={route.path}
                    key={route.path}
                  />
                  <Route
                    path="/*"
                    element={<Navigate to="/user-type-page" />}
                  />
                </>
              );
            })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
