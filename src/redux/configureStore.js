import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import CardSlice from "./CardSlice";
const reducer = combineReducers({
  cardInfo: CardSlice
});
const store = configureStore({
 reducer
});



export default store;
