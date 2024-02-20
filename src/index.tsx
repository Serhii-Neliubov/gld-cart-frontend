import ReactDOM from "react-dom/client";
import "@/index.scss";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";
import "./i18n.ts";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import App from "@/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
            <App />
        </Provider>
        <Toaster position="top-center" reverseOrder={false} />
    </Suspense>
);
