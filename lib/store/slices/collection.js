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
    collection: {},
    item: {},
};
export const getCollections = createAsyncThunk('collection', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCollections(params);
}));
export const getCollectionItemsBySlug = createAsyncThunk('ItemsBySlug', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCollectionItemsBySlug(params);
}));
const collectionSlice = createSlice({
    name: STORE_KEYS.COLLECTION,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCollections.pending, (state) => {
            state.collection.loading = true;
        })
            .addCase(getCollections.fulfilled, (state, action) => {
            state.collection = action.payload;
            state.collection.error = null;
            state.collection.loading = false;
        })
            .addCase(getCollections.rejected, (state, action) => {
            state.collection = {};
            state.collection.error = action.error;
            state.collection.loading = false;
        })
            //fetchItem
            .addCase(getCollectionItemsBySlug.pending, (state) => {
            state.item.loading = true;
        })
            .addCase(getCollectionItemsBySlug.fulfilled, (state, action) => {
            state.item = action.payload;
            state.item.error = null;
            state.item.loading = false;
        })
            .addCase(getCollectionItemsBySlug.rejected, (state, action) => {
            state.item = {};
            state.item.error = action.error;
            state.item.loading = false;
        });
    },
});
export const collectionReducer = collectionSlice.reducer;
//# sourceMappingURL=collection.js.map