import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import cartsReducer from "./carts";

const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
  },
});

export default store;
