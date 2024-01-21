import { configureStore } from "@reduxjs/toolkit";
import isvendorSlice from "./slices/isvendorSlice";
import userDataSlice from "./slices/userDataSlice";
import resetPasswordEmailSlice from "./slices/resetPasswordEmailSlice";
import isLoadingSlice from "./slices/isLoadingSlice";
import vehiclesItemSlice from "./slices/vehiclesItemSlice";
import vendorSelectedItemSlice from "./slices/vendorSelectedItemSlice.ts";
import vendorProductInfoSlice from "./slices/vendorProductInfoSlice.ts";

export const store = configureStore({
  reducer: {
    isVendor: isvendorSlice,
    isLoading: isLoadingSlice,
    userDataSlice: userDataSlice,
    setEmail: resetPasswordEmailSlice,
    vehicleDataSlice: vehiclesItemSlice,
    vendorSelectedItemSlice: vendorSelectedItemSlice,
    vendorProductInfo: vendorProductInfoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
