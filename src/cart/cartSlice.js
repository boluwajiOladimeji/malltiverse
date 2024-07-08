import { createSlice } from '@reduxjs/toolkit';
import belt from '../assets/images/belt.svg';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const initialState = {
  // cart: [],
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
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
    },
    deleteItem(state, action) {
      // payload = itemId
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.success('item deleted from cart');
    },
    increaseItemQuantity(state, action) {
      // payload = itemId
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    },
    clearCart(state) {
      state.cart = [];
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
