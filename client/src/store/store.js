import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bolsillo from "../redux/slice";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistconfig = {
  key:'root',
  storage,
  whitelist : ["bolsilloFeliz"]
}
const rootreducer = combineReducers({
  bolsilloFeliz: bolsillo
})
const persistreducer = persistReducer(persistconfig , rootreducer)
const store = configureStore({
  reducer: 
    persistreducer,
  middleware:[thunk]
});

export default store;