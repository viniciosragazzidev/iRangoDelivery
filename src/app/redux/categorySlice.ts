import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "./store";

import { CategoryType } from "../_types/types";

export interface CategoriesState {
  categories: Array<CategoryType>;
}

const initialState: CategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryType>) => {
      state.categories = [action.payload];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.category,
      };
    },
  },
});

export const { setCategory } = categoriesSlice.actions;
export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
