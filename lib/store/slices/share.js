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
const initialState = {};
export const createShortLink = createAsyncThunk('createShortLink', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.share.createShortLink(params);
}));
export const getUrlQRCode = createAsyncThunk('getUrlQRCode', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.share.getUrlQRCode(params);
}));
const shareSlice = createSlice({
    name: STORE_KEYS.SHARE,
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
});
export const shareReducer = shareSlice.reducer;
//# sourceMappingURL=share.js.map