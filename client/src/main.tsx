import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter.tsx";
import "./Styles/App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
);
