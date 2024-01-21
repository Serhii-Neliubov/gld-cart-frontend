import { createSlice } from "@reduxjs/toolkit";

export interface vendorProductInfoSlice {
    category: string;
    subcategory: string;
    product: string;
}

const initialState: vendorProductInfoSlice = {
    category: "",
    subcategory: "",
    product: "",
};

export const vendorProductInfoSlice = createSlice({
    name: "vendorProductInfo",
    initialState,
    reducers: {
        setProductName: (state, action) => {
            state.product = action.payload;
        },
        setProductCategory: (state, action) => {
            state.category = action.payload;
        },
        setProductSubcategory: (state, action) => {
            state.subcategory = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setProductName, setProductSubcategory, setProductCategory } = vendorProductInfoSlice.actions;
export const vendorProductInfo = (state: { vendorProductInfo: vendorProductInfoSlice }) => state.vendorProductInfo;
export default vendorProductInfoSlice.reducer;
