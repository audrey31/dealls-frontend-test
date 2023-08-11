import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  limit: 6,
  skip: 0,
  totalPages: 0,
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCarts: (state, action) => {
      state.carts = action.payload;
    },
    addSkip: (state, action) => {
      state.skip = action.payload;
    },
    addTotal: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { addCarts, addSkip, addTotal } = cartsSlice.actions;

export default cartsSlice.reducer;
