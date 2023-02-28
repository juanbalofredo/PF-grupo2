import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: false,
};
export const bolsilloSlice = createSlice({
    name: "bolsillo",
    initialState,
    reducers: {
    },
  });
// export const {}= bolsilloSlice.actions;
export default bolsilloSlice.reducer;