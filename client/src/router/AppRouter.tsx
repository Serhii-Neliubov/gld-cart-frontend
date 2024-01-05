import { useEffect } from "react";
import { Routes, Route, HashRouter} from "react-router-dom";
import { FC } from "react";
import Header from "../components/Header/Header.tsx";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { noAuthRotes, buyerRoutes, vendorRoutes } from "./routes";
import {
  checkAuth,
  userDataSelector,
} from "../redux/slices/userDataSlice";
import IUser from "../models/IUser";
import Label from "../components/Label/Label.tsx";

const AppRouter: FC = () => {
  const user = useSelector<RootState, IUser>(userDataSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
      dispatch(checkAuth());
  }, []);

  if (!user.type) {
    return (
      <HashRouter>
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
      </HashRouter>
    );
  }

  if (user.type === "Vendor") {
    return (
      <HashRouter>
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
      </HashRouter>
    );
  }

  if (user.type === "Buyer") {
    return (
      <HashRouter>
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
      </HashRouter>
    );
  }
};

export default AppRouter;
