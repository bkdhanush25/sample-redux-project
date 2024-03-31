import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/CustomerSlice"
import numberReducer from "./slices/NumberSlice";
import customNumberReducer from './slices/CustomNumberSlice'

export const store = configureStore({
    devTools: true,
    reducer: {
        customers: customerReducer,
        numbers: numberReducer,
        customnumbers: customNumberReducer
    }
})