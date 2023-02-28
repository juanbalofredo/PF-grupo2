import { configureStore } from "@reduxjs/toolkit";
import bolsillo from "../redux/slice";

export default configureStore({
  reducer: {
    bolsillo,
  },
});
