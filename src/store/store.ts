import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userDataSlice";

export const store = configureStore({
  reducer: {
    userDataSlice: userDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
