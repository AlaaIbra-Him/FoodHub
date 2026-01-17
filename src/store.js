import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterModel";
import cartReducer from "./cartslice";

// Function to load state from localStorage
const loadState = () => {
  try {
    const savedState = localStorage.getItem('reduxState');
    return savedState ? JSON.parse(savedState) : undefined;
  } catch (error) {
    console.error('Error loading state:', error);
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const stateToPersist = {
      counter: state.counter,
      cart: state.cart
    };
    localStorage.setItem('reduxState', JSON.stringify(stateToPersist));
  } catch (error) {
    console.error('Error saving state:', error);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
  preloadedState
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState(store.getState());
});