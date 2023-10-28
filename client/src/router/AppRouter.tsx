import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FC } from "react";
import Label from "../components/Home/HomeElements/Label";
import Header from "../components/UI/Header";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { noAuthRotes, buyerRoutes, vendorRoutes } from "./routes";
import { checkAuth, selectIsAuth } from "../redux/Slices/userDataSlice";
import UserService from "../services/UserService";

const AppRouter: FC = () => {
  const [user, setUser] = React.useState();

  const isVendor = useSelector((state: RootState) => state.isVendor.value);
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch<AppDispatch>();

  async function getUserData() {
    try {
      const response = await UserService.fetchUsers();
      setUser(response.data.user);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
      getUserData();
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Label />
      <h1>{isAuth ? "YOU ALREADY AUT" : "YOU NEED AUTH!!"}</h1>
      <button onClick={getUserData}>123</button>
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
