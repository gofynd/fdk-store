var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STORE_KEYS } from '../enums/keys';
const initialState = {
    categories: {}
};
export const fetchCategories = createAsyncThunk('categories', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCategories(params);
}));
const categoriesSlice = createSlice({
    name: STORE_KEYS.CATEGORIES,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
            state.categories.loading = true;
        })
            .addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.categories.error = null;
            state.categories.loading = false;
        })
            .addCase(fetchCategories.rejected, (state, action) => {
            state.categories = {};
            state.categories.error = action.error;
            state.categories.loading = false;
        });
    },
});
export const categoriesReducer = categoriesSlice.reducer;
//# sourceMappingURL=categories.js.map