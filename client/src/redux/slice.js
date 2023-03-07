import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  productsBackup: [],
  page: 1,
  error: false,
  user: false,
  password: false,
  name: '',
  id: "",
  account_type: 1,
  last_name: '',
  email: '',
  avatar: '',
  comment: [],
  category:"all",
  brand:"all"
};


export const bolsilloSlice = createSlice({


  name: "bolsillo",

  initialState,

  reducers: {

    loggedOut(state){
      state.name = '';
      state.account_type = 1;
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
    oneUsers(state, action) {
      state.name = action.payload.name;
      state.account_type = action.payload.account_type;
      state.user = true;
      state.last_name = action.payload.last_name;
      state.avatar = action.payload.avatar;
      state.id = action.payload.id
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
  }},);

export const { allProducts, createUser, allUsers,loggedOut, oneUsers, nuevoDetail, LoginWithGoogle,logged, oneComment, getName, filterCategory, filterBrand, resetFilter,Category,Brand,} = bolsilloSlice.actions;
export default bolsilloSlice.reducer;