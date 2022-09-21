import { cartReducers } from "./slices/cart.slice";
import { productReducers } from "./slices/product.slice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    products: productReducers,
    cart: cartReducers,
  },
});
