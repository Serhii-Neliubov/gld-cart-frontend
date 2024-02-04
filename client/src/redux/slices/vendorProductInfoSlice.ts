import { createSlice } from "@reduxjs/toolkit";

export interface vendorProductInfoSlice {
    category: string;
    subcategory: string;
    product: string;
    info: object
}

const initialState: vendorProductInfoSlice = {
    category: "",
    subcategory: "",
    product: "",
    info: {},
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
        setProductInformation: (state, action) => {
            state.info = action.payload;
        },
        resetVendorProductInfo: () => {
            return initialState;
        },
    },
});

// Action creators are generated for each case reducer function
export const { resetVendorProductInfo, setProductInformation, setProductName, setProductSubcategory, setProductCategory } = vendorProductInfoSlice.actions;
export const vendorProductInfo = (state: { vendorProductInfo: vendorProductInfoSlice }) => state.vendorProductInfo;
export default vendorProductInfoSlice.reducer;
