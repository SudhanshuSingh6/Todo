import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/tod/'
export const store = configureStore({
    reducer: todoReducer
});
