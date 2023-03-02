import { createSlice } from "@reduxjs/toolkit";
import {firebase, googleAuthProvider} from "./ConfigFirebase";
const initialState = {
  products: [],
  productsBackup: [],
  page: 1,
  error: false,
  name: '',
  last_name: '',
  email:'',
  avatar: '',
};
export const bolsilloSlice = createSlice({
    name: "bolsillo",
    initialState,
    reducers: {
        LoginWithGoogle(state, actions){
           state.name = actions.payload.name 
        }
    },
  });
  


  export const {LoginWithGoogle} = bolsilloSlice.actions;
  export default bolsilloSlice.reducer;