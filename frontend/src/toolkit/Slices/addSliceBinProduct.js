import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}



const addSliceBinProduct = createSlice({
    name: "cart",
    initialState,
    reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exists = state.items.find((p) => p.id === product.id);
      if (!exists) {
        state.items.push(product);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },

})

export const { addToCart, removeFromCart, clearCart } = addSliceBinProduct.actions;
export const addSliceBinProductReducer = addSliceBinProduct.reducer;