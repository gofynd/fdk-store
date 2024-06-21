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
    startUploadresponce: {},
    CompleteResponse: {},
    signUrls: {}
};
export const startUpload = createAsyncThunk('startUpload', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.fileStorage.startUpload(params);
}));
export const completeUpload = createAsyncThunk('completeUpload', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.fileStorage.completeUpload(params);
}));
export const signUrls = createAsyncThunk('signUrls', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.fileStorage.signUrls(params);
}));
const fileStorageSlice = createSlice({
    name: STORE_KEYS.FILE_STORAGE,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(startUpload.pending, (state) => {
            state.startUploadresponce.loading = true;
        })
            .addCase(startUpload.fulfilled, (state, action) => {
            state.startUploadresponce = action.payload;
            state.startUploadresponce.error = null;
            state.startUploadresponce.loading = false;
        })
            .addCase(startUpload.rejected, (state, action) => {
            state.startUploadresponce = {};
            state.startUploadresponce.error = action.error;
            state.startUploadresponce.loading = false;
        })
            // signUrls 
            .addCase(signUrls.pending, (state) => {
            state.signUrls.loading = true;
        })
            .addCase(signUrls.fulfilled, (state, action) => {
            state.signUrls = action.payload;
            state.signUrls.error = null;
            state.signUrls.loading = false;
        })
            .addCase(signUrls.rejected, (state, action) => {
            state.signUrls = {};
            state.signUrls.error = action.error;
            state.signUrls.loading = false;
        })
            // completeUpload 
            .addCase(completeUpload.pending, (state) => {
            state.CompleteResponse.loading = true;
        })
            .addCase(completeUpload.fulfilled, (state, action) => {
            state.CompleteResponse = action.payload;
            state.CompleteResponse.error = null;
            state.CompleteResponse.loading = false;
        })
            .addCase(completeUpload.rejected, (state, action) => {
            state.CompleteResponse = {};
            state.CompleteResponse.error = action.error;
            state.CompleteResponse.loading = false;
        });
    },
});
export const fileStorageReducer = fileStorageSlice.reducer;
//# sourceMappingURL=fileStorage.js.map