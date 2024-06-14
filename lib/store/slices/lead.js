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
    support_ticket: {},
    custom_from: {},
};
export const getCustomForm = createAsyncThunk('getCustomForm', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.lead.getCustomForm(params);
}));
export const submitCustomForm = createAsyncThunk('submitCustomForm', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.lead.submitCustomForm(params);
}));
export const getTicket = createAsyncThunk('getTicket', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.lead.getTicket(params);
}));
export const createHistory = createAsyncThunk('createHistory', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.lead.createHistory(params);
}));
export const createTicket = createAsyncThunk('createTicket', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.lead.createTicket(params);
}));
const leadSlice = createSlice({
    name: STORE_KEYS.LEAD,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //getCustomForm
            .addCase(getCustomForm.pending, (state) => {
            state.custom_from.loading = true;
        })
            .addCase(getCustomForm.fulfilled, (state, action) => {
            state.custom_from = action.payload;
            state.custom_from.error = null;
            state.custom_from.loading = false;
        })
            .addCase(getCustomForm.rejected, (state, action) => {
            state.custom_from = {};
            state.custom_from.error = action.error;
            state.custom_from.loading = false;
        })
            //getTicket
            .addCase(getTicket.pending, (state) => {
            state.support_ticket.loading = true;
        })
            .addCase(getTicket.fulfilled, (state, action) => {
            state.support_ticket = action.payload;
            state.support_ticket.error = null;
            state.support_ticket.loading = false;
        })
            .addCase(getTicket.rejected, (state, action) => {
            state.support_ticket = {};
            state.support_ticket.error = action.error;
            state.support_ticket.loading = false;
        });
    },
});
export const leadReducer = leadSlice.reducer;
//# sourceMappingURL=lead.js.map