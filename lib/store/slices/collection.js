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
    collection: {}
};
export const fetchCollection = createAsyncThunk('collection', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCollections(params);
}));
const collectionSlice = createSlice({
    name: STORE_KEYS.COLLECTION,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollection.pending, (state) => {
            state.collection.loading = true;
        })
            .addCase(fetchCollection.fulfilled, (state, action) => {
            state.collection = action.payload;
            state.collection.error = null;
            state.collection.loading = false;
        })
            .addCase(fetchCollection.rejected, (state, action) => {
            state.collection = {};
            state.collection.error = action.error;
            state.collection.loading = false;
        });
    },
});
export const collectionReducer = collectionSlice.reducer;
//# sourceMappingURL=collection.js.map