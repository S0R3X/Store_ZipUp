import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import refSlice from "./refSlice";

export default configureStore({
  reducer: { products: productReducer, ref: refSlice },
});
