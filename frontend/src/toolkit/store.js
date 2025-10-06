import { configureStore } from "@reduxjs/toolkit";

import { dataSliceProductsReducer } from "./Slices/dataSliceProducts.js";
import { addSliceBinProductReducer } from "./Slices/addSliceBinProduct.js";

export const store = configureStore({
  reducer: {
    products: dataSliceProductsReducer,
    items: addSliceBinProductReducer,
  },
})