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
    collectionItem: {},
};
export const fetchCollection = createAsyncThunk('collection', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCollections(params);
}));
export const fetchCollectionItem = createAsyncThunk('CollectionItemsBySlug', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCollectionItemsBySlug(params);
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
        })
            //fetchCollectionItem
            .addCase(fetchCollectionItem.pending, (state) => {
            state.collectionItem.loading = true;
        })
            .addCase(fetchCollectionItem.fulfilled, (state, action) => {
            state.collectionItem = action.payload;
            state.collectionItem.error = null;
            state.collectionItem.loading = false;
        })
            .addCase(fetchCollectionItem.rejected, (state, action) => {
            state.collectionItem = {};
            state.collectionItem.error = action.error;
            state.collectionItem.loading = false;
        });
    },
});
export const collectionReducer = collectionSlice.reducer;
//# sourceMappingURL=collection.js.map