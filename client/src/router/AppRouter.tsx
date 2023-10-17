import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FC } from "react";
import Label from "../components/Home/HomeElements/Label";
import Header from "../components/UI/Header";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { noAuthRotes, buyerRoutes, vendorRoutes } from "./routes";
import { checkAuth } from "../redux/Slices/userDataSlice";

const AppRouter: FC = () => {
  const isVendor = useSelector((state: RootState) => state.isVendor.value);
  const isAuth = useSelector((state: RootState) => state.isAuth.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Label />
      <h1>{isAuth ? "Авторизован" : "Не авторизован"}</h1>
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
