import { createSlice } from "@reduxjs/toolkit";
import {RootState} from "../store.ts";

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
export const selectVendorSelectedItemValue = (state: RootState) => state.vendorSelectedItemSlice.value;
export default vendorSelectedItemSlice.reducer;
