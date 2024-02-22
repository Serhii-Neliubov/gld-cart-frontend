import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userDataSlice";
import resetPasswordEmailSlice from "./slices/resetPasswordEmailSlice";
import vendorSelectedItemSlice from "./slices/vendorSelectedItemSlice.ts";
import vendorProductInfoSlice from "./slices/vendorProductInfoSlice.ts";

export const store = configureStore({
  reducer: {
    userDataSlice: userDataSlice,
    setEmail: resetPasswordEmailSlice,
    vendorSelectedItemSlice: vendorSelectedItemSlice,
    vendorProductInfo: vendorProductInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
