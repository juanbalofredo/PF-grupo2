import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsBackup:[],
  loading:false,
  page:1,
  error: false,
};
export const bolsilloSlice = createSlice({
    name: "bolsillo",
    initialState,
    reducers: {
      allProducts(state, action) {
        state.products = action.payload;
        state.productsBackup = action.payload;
      },
    },
  });

export const {allProducts}= bolsilloSlice.actions;
export default bolsilloSlice.reducer;