import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter.tsx";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import "./i18n";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
        <Toaster position="top-center" reverseOrder={false} />
    </Suspense>
);
