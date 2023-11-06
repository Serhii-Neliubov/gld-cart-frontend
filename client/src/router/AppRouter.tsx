import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FC } from "react";
import Label from "../components/Home/HomeElements/Label";
import Header from "../components/UI/Header";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { noAuthRotes, buyerRoutes, vendorRoutes } from "./routes";
import {
  checkAuth,
  selectIsAuth,
  userDataSelector,
} from "../redux/Slices/userDataSlice";
import IUser from "../models/IUser";

const AppRouter: FC = () => {
  const isAuth = useSelector<RootState, boolean>(selectIsAuth);
  const user = useSelector<RootState, IUser>(userDataSelector);

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
      <Routes>
        {isAuth
          ? user.type == "Vendor"
            ? vendorRoutes.map((route) => {
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
                  <Route path="/*" element={<Navigate to="/login" />} />
                </>
              );
            })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
