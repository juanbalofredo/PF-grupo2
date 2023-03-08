import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    productsBackup: [],
    page: 1,
    category: "all",
    brand: "all",
    comment: [],
};


export const bolsilloSlice = createSlice({


    name: "bolsillo",

    initialState,

    reducers: {
        allProducts(state, action) {
            state.productsBackup = action.payload;
            state.products = action.payload;
        },
        oneComment(state, action) {
            state.comment = action.payload;
        },
        getName(state, action) {
            state.productsBackup = action.payload
        },
        filterBrand(state, action) {
            state.productsBackup = action.payload
        },
        filterCategory(state, action) {
            state.productsBackup = action.payload
        },
        Category(state, action) {
            state.category = action.payload
        },
        Brand(state, action) {
            state.brand = action.payload
        },
        resetFilter(state) {
            state.productsBackup = state.products
            state.brand = "all"
        }
    }
},);

export const { allProducts, oneUsers, nuevoDetail, oneComment, getName, filterCategory, filterBrand, resetFilter, Category, Brand, } = bolsilloSlice.actions;
export default bolsilloSlice.reducer;