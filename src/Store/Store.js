import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";

const Store=configureStore({
    reducer:{
        auth:AuthSlice,
        productDetails:ProductSlice,
        cartDetails:CartSlice
    }
})
export default Store