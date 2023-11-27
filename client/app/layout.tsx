"use client";
import React from "react";
import "../src/i18n";
import "./global.scss";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
