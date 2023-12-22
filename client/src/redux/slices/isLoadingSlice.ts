import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface isLoadingSlice {
  value: boolean;
}

const initialState: isLoadingSlice = {
  value: false,
};

export const isLoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
export const isLoading = (state: RootState) => state.isLoading.value;
