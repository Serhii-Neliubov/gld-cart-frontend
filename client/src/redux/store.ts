import { configureStore } from "@reduxjs/toolkit";
import isvendorSlice from "./Slices/isvendorSlice";
import userDataSlice from "./Slices/userDataSlice";
import resetPasswordEmailSlice from "./Slices/resetPasswordEmailSlice";
import isLoadingSlice from "./Slices/isLoadingSlice";
import vehiclesItemSlice from "./Slices/vehiclesItemSlice";

export const store = configureStore({
  reducer: {
    isVendor: isvendorSlice,
    isLoading: isLoadingSlice,
    userDataSlice: userDataSlice,
    setEmail: resetPasswordEmailSlice,
    vehicleDataSlice: vehiclesItemSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
