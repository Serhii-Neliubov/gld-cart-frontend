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

  return (
    <BrowserRouter>
      <Header/>
      <Label/>
      <Routes>
        {!user.type &&
          noAuthRotes.map((route) => {
            return (
              <Route
                Component={route.component}
                path={route.path}
                key={route.path}
              />
            )
          })
        }

        {user.type === 'Buyer' &&
          buyerRoutes.map((route) => {
            return (
              <Route
                Component={route.component}
                path={route.path}
                key={route.path}
              />
            );
          })
        }

        {user.type === 'Vendor' &&
          vendorRoutes.map((route) => {
            return (
              <Route
                Component={route.component}
                path={route.path}
                key={route.path}
              />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}
export default App;
