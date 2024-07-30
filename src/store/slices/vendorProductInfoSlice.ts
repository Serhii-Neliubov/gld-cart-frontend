import { createSlice } from "@reduxjs/toolkit";

export interface vendorProductInfoSlice {
    category: string;
    subcategory: string;
    product_name: string;
    description: string,
    title: string,
    images: File[],
    attributes: object,
    [key: string]: string | object | File[]
}

const initialState: vendorProductInfoSlice = {
    category: "",
    subcategory: "",
    product_name: "",
    description: '',
    title: '',
    images: [],
    attributes: {},
};

export const vendorProductInfoSlice = createSlice({
    name: "vendorProductInfo",
    initialState,
    reducers: {
        setProductName: (state, action) => {
            state.product_name = action.payload;
        },
        setProductCategory: (state, action) => {
            state.category = action.payload;
        },
        setProductSubcategory: (state, action) => {
            state.subcategory = action.payload;
        },
        setProductDescription: (state, action) => {
            state.description = action.payload;
        },
        setProductInformation: (state, action) => {
            state.attributes = action.payload;
        },
        setProductTitle: (state, action) => {
            state.title = action.payload;
        },
        setProductImages: (state, action) => {
            state.images = action.payload;
        },
        resetVendorProductInfo: () => {
            return initialState;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setProductImages, setProductDescription, setProductTitle , resetVendorProductInfo, setProductInformation, setProductName, setProductSubcategory, setProductCategory } = vendorProductInfoSlice.actions;
export const vendorProductInfo = (state: { vendorProductInfo: vendorProductInfoSlice }) => state.vendorProductInfo;
export default vendorProductInfoSlice.reducer;
