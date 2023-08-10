import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
