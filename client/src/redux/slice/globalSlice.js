import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsBackup: [],
  page: 1,
  category: "all",
  brand: "all",
  pname: "all",
  comment: [],
  allUsers: [],
  mercado: [],
};

export const bolsilloSlice = createSlice({
  name: "bolsillo",

  initialState,

  reducers: {
    allProducts(state, action) {
      state.productsBackup = action.payload;
      state.products = action.payload;
    },
    sigPage(state){
      state.page = state.page +1;
    },
    antPage(state){
      state.page = state.page -1;
    },
    resPage(state){
      state.page = 1;
    },
    allUsers(state, action) {
      state.allUsers = action.payload;
    },
    oneComment(state, action) {
      state.comment = action.payload;
    },
    getName(state, action) {
      state.productsBackup = action.payload;
    },
    filterBrand(state, action) {
      state.productsBackup = action.payload;
    },
    filterPName(state, action) {
      state.productsBackup = action.payload;
    },
    filterCategory(state, action) {
      state.productsBackup = action.payload;
    },
    Category(state, action) {
      state.category = action.payload;
    },
    Pname(state, action) {
      state.pname = action.payload;
    },
    Brand(state, action) {
      state.brand = action.payload;
    },
    resetFilter(state) {
      state.productsBackup = state.products;
      state.brand = "all";
    },
    addMercader(state, action) {
      state.mercado = action.payload
    }
  },
});

export const {
  allProducts,
  oneUsers,
  filterPName,
  allUsers,
  Pname,
  nuevoDetail,
  oneComment,
  sigPage,
  antPage,
  resPage,
  getName,
  filterCategory,
  filterBrand,
  resetFilter,
  Category,
  Brand,
  addMercader,
} = bolsilloSlice.actions;
export default bolsilloSlice.reducer;
