import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface addAdressSlice {
  value: boolean;
}

const initialState: addAdressSlice = {
  value: false,
};

export const addAdressSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue } = addAdressSlice.actions;
export default addAdressSlice.reducer;
export const isLoading = (state: RootState) => state.isLoading.value;
