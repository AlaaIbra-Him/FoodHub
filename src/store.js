import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterModel";
import cartReducer from "./cartslice";
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        cart: cartReducer,
    }
})

// -------------------------cart---
