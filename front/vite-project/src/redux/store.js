import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/productSlice.js";

const store = configureStore({
    reducer: {
        product: ProductSlice,
    },
});
export default store