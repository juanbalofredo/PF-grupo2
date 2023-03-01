import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsBackup:[],
  loading:false,
  page:1,
  error: false,
  name:'',
  apelido:'',
  avatar:'https://res.cloudinary.com/dzuasgy3l/image/upload/v1677690070/v55uvjjvoopg3pgmitz2.webp',
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