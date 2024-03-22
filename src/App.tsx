import { useEffect } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { FC } from "react";
import { AppDispatch, RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { noAuthRotes, buyerRoutes, vendorRoutes } from "@/viewes/routes";
import { checkAuth, userDataSelector } from "./store/slices/userDataSlice.ts";
import IUser from "@/utils/models/IUser.ts";
import Header from "@/components/header/Header.tsx";
import Label from "@/components/header-label/Label.tsx";
import {io} from "socket.io-client";
import {API_URL} from "@/utils/interceptors/interceptors.ts";

const App: FC = () => {
  const user = useSelector<RootState, IUser>(userDataSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if(!user.id) return;
    
    const newSocket = io(API_URL, { query: { userId: user.id } });

    return () => {
      newSocket.disconnect();
    };
  }, [user.id]);

    return (
      <BrowserRouter>
        <Header />
        <Label />
        <Routes>
          {!user.type && (
            noAuthRotes.map((route, index) => {
              return (
                <Route
                  Component={route.component}
                  path={route.path}
                  key={index}
                />
              );
            })
          )}

          {user.type === 'Vendor' && (
            vendorRoutes.map((route) => {
              return (
                <Route
                  Component={route.component}
                  path={route.path}
                  key={route.path}
                />
              );
            })
          )}

          {user.type === 'Buyer' && (
            buyerRoutes.map((route) => {
              return (
                <Route
                  Component={route.component}
                  path={route.path}
                  key={route.path}
                />
              );
            })
          )}
        </Routes>
      </BrowserRouter>
    );
};

export default App;