import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import ProtectRoute from "@components/ProtectRoute.tsx";
import Header from "@components/header/Header.tsx";
import Label from "@components/header-label/Label.tsx";

import {checkAuth} from "@store/slices/userDataSlice.ts";
import {AppDispatch} from "@store/store.ts";

import {routes} from "./nav.data.ts";

export default function Navigation() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(checkAuth());
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Label />
            <Routes>
                {routes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.isAuthRequired
                            ? <ProtectRoute route={route} />
                            : <route.element />
                        }
                    />
                )}
            </Routes>
        </BrowserRouter>
    )
}