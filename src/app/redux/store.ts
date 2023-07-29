import { configureStore } from "@reduxjs/toolkit";
import categories from "./categorySlice";

const store = configureStore({
  reducer: {
    categories: categories,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
