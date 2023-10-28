import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter.tsx";
import "./Styles/App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import "./i18n";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Suspense>
);
