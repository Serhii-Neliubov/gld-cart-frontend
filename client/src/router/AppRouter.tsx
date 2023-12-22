import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FC } from "react";
import Header from "../components/UI/Header";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { noAuthRotes, buyerRoutes, vendorRoutes } from "./routes";
import {
  checkAuth,
  selectIsAuth,
  userDataSelector,
} from "../redux/slices/userDataSlice";
import IUser from "../models/IUser";
import axios from "axios";
import { isLoading } from "../redux/slices/isLoadingSlice";
import Label from "../components/UI/Label";
import toast from "react-hot-toast";

const AppRouter: FC = () => {
  const isAuth = useSelector<RootState, boolean>(selectIsAuth);
  const user = useSelector<RootState, IUser>(userDataSelector);
  const loading = useSelector<RootState, boolean>(isLoading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/refresh", {
          withCredentials: true,
        });
        localStorage.setItem("token", data.accessToken);
        dispatch(checkAuth());
        toast.success("You successfully logged!");
        return data;
      } catch (e) {
        toast.error("Auth, please!");

        return null;
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return (
      <BrowserRouter>
        <Header />
        <Label />
        <Routes>
          {noAuthRotes.map((route) => {
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
  }

  if (user.type === "Vendor") {
    return (
      <BrowserRouter>
        <Header />
        <Label />
        <Routes>
          {vendorRoutes.map((route) => {
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
  }

  if (user.type === "Buyer") {
    return (
      <BrowserRouter>
        <Header />
        <Label />
        <Routes>
          {buyerRoutes.map((route) => {
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
  }
};

export default AppRouter;
