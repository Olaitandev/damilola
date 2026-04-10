import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const loadCartFromStorage = () => {
  if (typeof window === "undefined") return undefined;
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch {
    return undefined;
  }
};

const saveCartToStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cart", serializedState);
  } catch {}
};

const preloadedState = {
  cart: loadCartFromStorage() || {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Save cart to storage whenever state changes
store.subscribe(() => {
  saveCartToStorage(store.getState());
});
