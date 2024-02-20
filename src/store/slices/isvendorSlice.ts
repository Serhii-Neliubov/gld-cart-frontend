import { createSlice } from "@reduxjs/toolkit";

export interface isvendorSlice {
  value: boolean;
}

const initialState: isvendorSlice = {
  value: false,
};

export const isvendorSlice = createSlice({
  name: "vendor",
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
export const { setTrue, setFalse } = isvendorSlice.actions;

export default isvendorSlice.reducer;
