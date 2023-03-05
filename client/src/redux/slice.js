import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsBackup: [],
  page: 1,
  error: false,
  user:false,
  password: false,
  name: '',
  id:"",
  last_name: '',
  email:'',
  avatar: '',
  comment: [], 
  detail: []
};
export const bolsilloSlice = createSlice({
  name: "bolsillo",
  initialState,
  reducers: {
    allProducts(state, action) {
      state.products = action.payload;
      state.productsBackup = action.payload;
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
    LoginWithGoogle(state,action){
    state.name = action.payload.displayName;
    state.user = true
   },
   oneComment(state, action) {
    state.comment = action.payload;
   },
   getName(state, action) {
    state.productsBackup = action.payload
   },
   filterBrand(state,action){
    state.productsBackup = action.payload
   },
   filterCategory(state,action){
    state.productsBackup = action.payload
   },
   resetFilter(state,action){
    state.productsBackup = state.products
   }
  },
});

export const { allProducts, createUser,allUsers,oneUsers, LoginWithGoogle, oneComment, getName,filterCategory,filterBrand,resetFilter } = bolsilloSlice.actions;
export default bolsilloSlice.reducer;