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
    brands: {}
};
export const getBrands = createAsyncThunk('brands', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getBrands(params);
}));
const brandsSlice = createSlice({
    name: STORE_KEYS.BRANDS,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBrands.pending, (state) => {
            state.brands.loading = true;
        })
            .addCase(getBrands.fulfilled, (state, action) => {
            state.brands = action.payload;
            state.brands.error = null;
            state.brands.loading = false;
        })
            .addCase(getBrands.rejected, (state, action) => {
            state.brands = {};
            state.brands.error = action.error;
            state.brands.loading = false;
        });
    },
});
export const brandsReducer = brandsSlice.reducer;
//# sourceMappingURL=brands.js.map