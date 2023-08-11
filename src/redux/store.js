import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import cartsReducer from "./carts";

export default configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
  },
});
