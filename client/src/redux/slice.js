import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsBackup: [],
  page: 1,
  error: false,
  name: '',
  last_name: '',
  email:'',
  avatar: 'https://res.cloudinary.com/dzuasgy3l/image/upload/v1677690070/v55uvjjvoopg3pgmitz2.webp',
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
      state.users = action.payload;
    },
    oneUsers(state, action) {
      state.name = action.payload.name;
      state.last_name = action.payload.last_name;
      state.avatar = action.payload.avatar;
    },
    createUser(state, action) {
      state.name = action.payload.name;
      state.last_name = action.payload.last_name;
      if (!action.payload.avatar) {
        state.avatar = action.payload.avatar;
      } else { state.avatar = 'https://res.cloudinary.com/dzuasgy3l/image/upload/v1677690070/v55uvjjvoopg3pgmitz2.webp' }

    }
  },
});

export const { allProducts, createUser,allusers } = bolsilloSlice.actions;
export default bolsilloSlice.reducer;