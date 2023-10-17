var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    application: {},
    contact_info: {},
    app_features: {},
    integration_tokens: {},
    deployment_stores: {},
    staff: {},
    store_details: {},
    currencies: {},
};
export const fetchApplication = createAsyncThunk("application", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.configuration.getApplication();
}));
export const fetchContactInfo = createAsyncThunk("appContactInfo", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.configuration.getContactInfo();
}));
export const fetchAppFeatures = createAsyncThunk("appFeatures", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.configuration.getFeatures();
}));
export const fetchAppIntegrationTokens = createAsyncThunk("appTokens", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.configuration.getIntegrationTokens();
}));
export const fetchDeploymentStores = createAsyncThunk("deploymentStores", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.configuration.getOrderingStores(params);
}));
export const fetchStaff = createAsyncThunk("staff", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.configuration.getAppStaffs(params);
}));
export const fetchStoreById = createAsyncThunk("storeDetails", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.configuration.getStoreDetailById(params);
}));
export const fetchAppCurrencies = createAsyncThunk("currnecies", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.configuration.getAppCurrencies();
}));
const configurationSlice = createSlice({
    name: STORE_KEYS.CONFIGURATION,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //application
            .addCase(fetchApplication.pending, (state) => {
            state.application.loading = true;
        })
            .addCase(fetchApplication.fulfilled, (state, action) => {
            state.application = action.payload;
            state.application.error = null;
            state.application.loading = false;
        })
            .addCase(fetchApplication.rejected, (state, action) => {
            state.application = {};
            state.application.error = action.error;
            state.application.loading = false;
        })
            //contact info
            .addCase(fetchContactInfo.pending, (state) => {
            state.contact_info.loading = true;
        })
            .addCase(fetchContactInfo.fulfilled, (state, action) => {
            state.contact_info = action.payload;
            state.contact_info.error = null;
            state.contact_info.loading = false;
        })
            .addCase(fetchContactInfo.rejected, (state, action) => {
            state.contact_info = {};
            state.contact_info.error = action.error;
            state.contact_info.loading = false;
        })
            //app features
            .addCase(fetchAppFeatures.pending, (state) => {
            state.app_features.loading = true;
        })
            .addCase(fetchAppFeatures.fulfilled, (state, action) => {
            state.app_features = action.payload;
            state.app_features.error = null;
            state.app_features.loading = false;
        })
            .addCase(fetchAppFeatures.rejected, (state, action) => {
            state.app_features = {};
            state.app_features.error = action.error;
            state.app_features.loading = false;
        })
            //app integration tokens
            .addCase(fetchAppIntegrationTokens.pending, (state) => {
            state.integration_tokens.loading = true;
        })
            .addCase(fetchAppIntegrationTokens.fulfilled, (state, action) => {
            state.integration_tokens = action.payload;
            state.integration_tokens.error = null;
            state.integration_tokens.loading = false;
        })
            .addCase(fetchAppIntegrationTokens.rejected, (state, action) => {
            state.integration_tokens = {};
            state.integration_tokens.error = action.error;
            state.integration_tokens.loading = false;
        })
            //deployment stores
            .addCase(fetchDeploymentStores.pending, (state) => {
            state.deployment_stores.loading = true;
        })
            .addCase(fetchDeploymentStores.fulfilled, (state, action) => {
            state.deployment_stores = action.payload;
            state.deployment_stores.error = null;
            state.deployment_stores.loading = false;
        })
            .addCase(fetchDeploymentStores.rejected, (state, action) => {
            state.deployment_stores = {};
            state.deployment_stores.error = action.error;
            state.deployment_stores.loading = false;
        })
            //staff
            .addCase(fetchStaff.pending, (state) => {
            state.staff.loading = true;
        })
            .addCase(fetchStaff.fulfilled, (state, action) => {
            state.staff = action.payload;
            state.staff.error = null;
            state.staff.loading = false;
        })
            .addCase(fetchStaff.rejected, (state, action) => {
            state.staff = {};
            state.staff.error = action.error;
            state.staff.loading = false;
        })
            //store details
            .addCase(fetchStoreById.pending, (state) => {
            state.store_details.loading = true;
        })
            .addCase(fetchStoreById.fulfilled, (state, action) => {
            state.store_details = action.payload;
            state.store_details.error = null;
            state.store_details.loading = false;
        })
            .addCase(fetchStoreById.rejected, (state, action) => {
            state.store_details = {};
            state.store_details.error = action.error;
            state.store_details.loading = false;
        })
            //currencies
            .addCase(fetchAppCurrencies.pending, (state) => {
            state.currencies.loading = true;
        })
            .addCase(fetchAppCurrencies.fulfilled, (state, action) => {
            state.currencies = action.payload;
            state.currencies.error = null;
            state.currencies.loading = false;
        })
            .addCase(fetchAppCurrencies.rejected, (state, action) => {
            state.currencies = {};
            state.currencies.error = action.error;
            state.currencies.loading = false;
        });
    },
});
export const configurationReducer = configurationSlice.reducer;
//# sourceMappingURL=configuration.js.map