import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsBackup: [],
  marketsProducts: [],
  marketsProductsBackup: [],
  page: 1,
  error: false,
  user: false,
  password: false,
  name: '',
  id: "",
  last_name: '',
  email: '',
  avatar: '',
  comment: [],
  category:"all",
  brand:"all",
  detail: {brand:'',name:''}
};


export const bolsilloSlice = createSlice({


  name: "bolsillo",

  initialState,

  reducers: {

    nuevoDetail(state, action) {
      state.detail.brand = action.payload.brand
      state.detail.name = action.payload.name
    },
    productsGenerales(state, action) {
      state.products = action.payload;
      state.productsBackup = action.payload;
    },
    allProducts(state, action) {
      state.marketsProductsBackup = action.payload;
      state.marketsProducts = action.payload;
    },
    allUsers(state, action) {
      state.user = action.payload;
    },
    oneUsers(state, action) {
      state.name = action.payload.name;
      state.last_name = action.payload.last_name;
      state.avatar = action.payload.avatar;
      state.email = action.payload.email;
      state.password = action.payload.password
    },
    createUser(state, action) {
      state.name = action.payload.name;
      state.last_name = action.payload.last_name;
    },
    LoginWithGoogle(state, action) {
      state.name = action.payload.displayName;
      state.user = true
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
      state.category = action.payload
    },
    Category(state, action) {
      state.category = action.payload
    },
    Brand(state, action) {
      state.brand = action.payload
    },
    resetFilter(state, action) {
      state.productsBackup = state.products
      state.brand = "all"
    }
  },
});

export const { allProducts, createUser, allUsers, oneUsers, nuevoDetail, LoginWithGoogle, oneComment, getName, filterCategory, filterBrand, resetFilter, productsGenerales,Category,Brand} = bolsilloSlice.actions;
export default bolsilloSlice.reducer;