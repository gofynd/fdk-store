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
export const getOrders = createAsyncThunk('getOrders', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.getOrders(params);
}));
export const getOrderById = createAsyncThunk('getOrderById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.getOrderById(params);
}));
export const getCustomerDetailsByShipmentId = createAsyncThunk('getCustomerDetailsByShipmentId', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.getCustomerDetailsByShipmentId(params);
}));
export const getInvoiceByShipmentId = createAsyncThunk('getInvoiceByShipmentId', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.getInvoiceByShipmentId(params);
}));
export const getPosOrderById = createAsyncThunk('getPosOrderById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.getPosOrderById(params);
}));
export const getShipmentBagReasons = createAsyncThunk('getShipmentBagReasons', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.getShipmentBagReasons(params);
}));
export const getShipmentById = createAsyncThunk('getShipmentById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.getShipmentById(params);
}));
export const getShipmentReasons = createAsyncThunk('getShipmentReasons', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.getShipmentReasons(params);
}));
export const sendOtpToShipmentCustomer = createAsyncThunk('sendOtpToShipmentCustomer', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.sendOtpToShipmentCustomer(params);
}));
export const trackShipment = createAsyncThunk('trackShipment', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.trackShipment(params);
}));
export const updateShipmentStatus = createAsyncThunk('updateShipmentStatus', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.updateShipmentStatus(params);
}));
export const verifyOtpShipmentCustomer = createAsyncThunk('verifyOtpShipmentCustomer', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.order.verifyOtpShipmentCustomer(params);
}));
const orderSlice = createSlice({
    name: STORE_KEYS.ORDER,
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
});
export const orderReducer = orderSlice.reducer;
//# sourceMappingURL=order.js.map