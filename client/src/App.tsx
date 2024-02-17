import { useEffect } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { FC } from "react";
import Header from "./components/header/Header";
import { AppDispatch, RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { noAuthRotes, buyerRoutes, vendorRoutes } from "./viewes/routes";
import {
  checkAuth,
  userDataSelector,
} from "./store/slices/userDataSlice.ts";
import IUser from "./utils/models/IUser";
import Label from "./components/header-label/Label";

const App: FC = () => {
  const user = useSelector<RootState, IUser>(userDataSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
      dispatch(checkAuth());
  }, [dispatch]);

  if (!user.type) {
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

export default App;
