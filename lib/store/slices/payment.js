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
import { getCookie, removeCookie } from '../../helpers/utils';
import { COOKIE_KEYS, STORE_KEYS } from '../enums/keys';
import { handleCODOrder, handleConfirmPayment, transactOrder } from '../utils/payment';
import { fetchPincodeDetails } from './logistic';
const initialState = {
    payment_options: {},
    aggregators_config: {},
};
export const fetchPaymentOptions = createAsyncThunk('paymentOptions', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.payment.getPaymentModeRoutes(params);
}));
export const fetchAggregatorsConfig = createAsyncThunk('aggregatorConfig', (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.payment.getAggregatorsConfig();
}));
export const verifyCustomerForPayment = createAsyncThunk('verifyCustomerForPayment', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.payment.verifyCustomerForPayment(params);
}));
export const customerCreditSummary = createAsyncThunk('customerCreditSummary', (payload, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.payment.customerCreditSummary(payload);
}));
export const redirectToAggregator = createAsyncThunk('redirectToAggregator', (payload, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.payment.redirectToAggregator(payload);
}));
export const customerOnboard = createAsyncThunk('customerOnboard', (payload, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.payment.customerOnboard(payload);
}));
export const getEpaylaterBannerDetails = createAsyncThunk('getEpaylaterBannerDetails', (payload, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.payment.getEpaylaterBannerDetails(payload);
}));
export const getActiveCardAggregator = createAsyncThunk('getActiveCardAggregator', (payload, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.payment.getActiveCardAggregator(payload);
}));
export const checkoutPayment = createAsyncThunk('checkoutPayment', (payload, { extra, getState }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const state = getState();
    const { cart_id, payment, meta, custom_meta, paymentflow, address_id, billing_address_id, aggregator_name, payment_identifier, payment_mode, queryParams, } = payload;
    const mutablePayment = Object.assign({}, payment);
    if (mutablePayment.payment_meta) {
        // Only for backword compatiblity
        mutablePayment.paymentFlowMeta = payment.payment_meta;
    }
    else {
        mutablePayment.paymentFlowMeta = paymentflow;
    }
    removeCookie(COOKIE_KEYS.USER_CART);
    const paymentOptions = Object.assign(Object.assign(Object.assign({ address_id: address_id || queryParams.address_id, billing_address_id: billing_address_id ||
            queryParams.billing_address_id ||
            queryParams.address_id, aggregator: aggregator_name || queryParams.aggregator_name, payment_identifier: payment_identifier || queryParams.payment_identifier, payment_mode: payment_mode || queryParams.payment_mode, callback_url: window.location.origin + '/cart/order-status', payment: mutablePayment, meta }, (cart_id ? { id: cart_id } : {})), (custom_meta && custom_meta.length > 0 ? { custom_meta } : {})), { ordering_store: undefined });
    const depStoreId = getCookie(COOKIE_KEYS.DEPLOYMENT_STORE);
    let ordering_store_id = getCookie(COOKIE_KEYS.ORDERING_STORE) || (depStoreId && depStoreId.uid);
    if (ordering_store_id) {
        paymentOptions.ordering_store = ordering_store_id;
    }
    if (paymentOptions.payment_mode === 'COD') {
        return handleCODOrder(sdk, state, paymentOptions);
    }
    //transact with payment gateway
    return transactOrder(sdk, state, paymentOptions);
}));
export const confirmPaymentAddress = createAsyncThunk('confirmPaymentAddress', (payload, { extra, dispatch }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const { cart_id, address_id, billing_address_id, address_pincode, } = payload;
    let data = {
        id: address_id,
        billing_address_id,
        cart_id,
    };
    const response = yield sdk.cart.selectAddress({
        body: data,
        cartId: cart_id,
    });
    if (address_pincode) {
        yield dispatch(fetchPincodeDetails({ pincode: address_pincode }));
    }
    return response;
}));
export const confirmPayment = createAsyncThunk('confirmPayment', (payload, { extra, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    if (payload.payment_mode == 'CARD') {
        const res = yield sdk.payment.getActiveCardAggregator();
        if (res.success) {
            let cardPayload = {
                payment_mode: 'CARD',
                aggregator_name: res.cards.aggregator,
            };
            return handleConfirmPayment(sdk, Object.assign(Object.assign({}, payload), cardPayload));
        }
    }
    else if (payload) {
        return handleConfirmPayment(sdk, Object.assign({}, payload));
    }
    else {
        rejectWithValue({ message: 'Payment options are required' });
    }
}));
const paymentSlice = createSlice({
    name: STORE_KEYS.PAYMENT,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get payment options
            .addCase(fetchPaymentOptions.pending, (state) => {
            state.payment_options.loading = true;
        })
            .addCase(fetchPaymentOptions.fulfilled, (state, action) => {
            state.payment_options = action.payload;
            state.payment_options.error = null;
            state.payment_options.loading = false;
        })
            .addCase(fetchPaymentOptions.rejected, (state, action) => {
            state.payment_options = {};
            state.payment_options.error = action.error;
            state.payment_options.loading = false;
        })
            //aggregators config
            .addCase(fetchAggregatorsConfig.pending, (state) => {
            state.aggregators_config.loading = true;
        })
            .addCase(fetchAggregatorsConfig.fulfilled, (state, action) => {
            state.aggregators_config = action.payload;
            state.aggregators_config.error = null;
            state.aggregators_config.loading = false;
        })
            .addCase(fetchAggregatorsConfig.rejected, (state, action) => {
            state.aggregators_config = {};
            state.aggregators_config.error = action.error;
            state.aggregators_config.loading = false;
        });
    },
});
export const paymentReducer = paymentSlice.reducer;
//# sourceMappingURL=payment.js.map