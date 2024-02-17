import { createSlice } from "@reduxjs/toolkit";

export interface vendorSelectedItemSlice {
    value: string;
}

const initialState: vendorSelectedItemSlice = {
    value: "",
};

export const vendorSelectedItemSlice = createSlice({
    name: "vendorSelectedItemSlice",
    initialState,
    reducers: {
        setVendorSelectedItemValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setVendorSelectedItemValue } = vendorSelectedItemSlice.actions;
export default vendorSelectedItemSlice.reducer;
