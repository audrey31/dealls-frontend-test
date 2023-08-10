import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  limit: 6,
  skip: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeProducts: (state, action) => {
      state.products = action.payload;
    },
    changeLimit: (state, action) => {
      state.limit = action.payload;
    },
    changeSkip: (state, action) => {
      state.skip = action.payload;
    },
    addSkip: (state, action) => {
      state.skip = action.payload;
    },
  },
});

export const { changeProducts, changeLimit, changeSkip, addSkip } =
  productSlice.actions;

export default productSlice.reducer;
