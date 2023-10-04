import { createSlice } from "@reduxjs/toolkit";

export interface isauthSlice {
  value: boolean;
}

const initialState: isauthSlice = {
  value: false,
};

export const isauthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTrue, setFalse } = isauthSlice.actions;

export default isauthSlice.reducer;
