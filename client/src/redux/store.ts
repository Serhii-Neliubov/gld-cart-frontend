import { configureStore } from "@reduxjs/toolkit";
import isvendorSlice from "./Slices/isvendorSlice";
import isauthSlice from "./Slices/isauthSlice";
import userDataSlice from "./Slices/userDataSlice";

export const store = configureStore({
  reducer: {
    isVendor: isvendorSlice,
    isAuth: isauthSlice,
    userDataSlice: userDataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;