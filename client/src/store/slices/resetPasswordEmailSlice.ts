import { createSlice } from "@reduxjs/toolkit";

export interface resetPasswordEmailSlice {
  value: string;
}

const initialState: resetPasswordEmailSlice = {
  value: "",
};

export const resetPasswordEmailSlice = createSlice({
  name: "resetPasswordEmailSlice",
  initialState,
  reducers: {
    setEmailValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmailValue } = resetPasswordEmailSlice.actions;

export default resetPasswordEmailSlice.reducer;
