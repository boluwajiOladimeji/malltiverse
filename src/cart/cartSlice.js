import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  // cart: [],
  cart: [],
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem(state, action) {
      // payload = new item
      toast.success('item added to cart');
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
        return;
      }

      state.cart.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    deleteItem(state, action) {
      // payload = itemId
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.success('item deleted from cart');
      localStorage.setItem('cart', JSON.stringify(state));
    },
    increaseItemQuantity(state, action) {
      // payload = itemId
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart() {
      localStorage.setItem('cart', JSON.stringify(initialState));
      return initialState;
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
