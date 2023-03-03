import { configureStore } from "@reduxjs/toolkit";
import bolsillo from "../redux/slice";

const store = configureStore({
  reducer: {
    bolsillo,
  },
});

export default store;