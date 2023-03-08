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

        loggedOut(state) {
            state.name = '';
            state.type_account = '';
            state.user = false;
            state.last_name = '';
            state.avatar = '';
            state.id = '';
            state.email = '';
            state.password = false;
        },
        allProducts(state, action) {
            state.productsBackup = action.payload;
            state.products = action.payload;
        },

        allUsers(state, action) {
            state.user = action.payload;
        },
        createUser(state, action) {
            state.name = action.payload.name;
            state.last_name = action.payload.last_name;
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

export const { allProducts, createUser, allUsers, loggedOut, oneUsers, nuevoDetail, logged, oneComment, getName, filterCategory, filterBrand, resetFilter, Category, Brand, } = bolsilloSlice.actions;
export default bolsilloSlice.reducer;