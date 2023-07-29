import { CategoryType } from "@/app/_types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  categories: CategoryType[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<CategoryType>) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<CategoryType>) => {
      state.categories = state.categories.filter(
        (category) => category !== action.payload
      );
    },
  },
});

export const { addCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
