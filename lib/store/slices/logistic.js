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
import { setCookie } from "../../helpers/utils";
import { STORE_KEYS, COOKIE_KEYS } from "../enums/keys";
const initialState = {
    countries: {},
    product_tat: {},
    pincode_details: {},
};
export const getAllCountries = createAsyncThunk("countries", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.logistic.getAllCountries();
}));
export const getTatProduct = createAsyncThunk("tatProduct", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.logistic.getTatProduct(params);
}));
export const getPincodeCity = createAsyncThunk("getPincodeCity", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.logistic.getPincodeCity(params);
}));
export const fetchPincodeDetails = createAsyncThunk("pincodeDetails", (params, { extra, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const { sdk } = extra;
        const response = yield sdk.logistic.getPincodeCity(params);
        if (response.success) {
            const locationObj = (_d = (_c = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.parents) === null || _c === void 0 ? void 0 : _c.reduce) === null || _d === void 0 ? void 0 : _d.call(_c, (acc, curr) => {
                acc[curr.sub_type] = curr.name;
                return acc;
            }, {});
            const locationData = {
                country: (locationObj === null || locationObj === void 0 ? void 0 : locationObj.country) || "India",
                city: locationObj === null || locationObj === void 0 ? void 0 : locationObj.city,
                pincode: `${params.pincode}`,
            };
            setCookie(COOKIE_KEYS.LOCATION_DATA, locationData, 1);
            sdk.setLocationDetails(locationData);
            return response;
        }
        return rejectWithValue(response.error.message);
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
}));
const logisticSlice = createSlice({
    name: STORE_KEYS.LOGISTIC,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //countires
            .addCase(getAllCountries.pending, (state) => {
            state.countries.loading = true;
        })
            .addCase(getAllCountries.fulfilled, (state, action) => {
            state.countries = action.payload;
            state.countries.error = null;
            state.countries.loading = false;
        })
            .addCase(getAllCountries.rejected, (state, action) => {
            state.countries = {};
            state.countries.error = action.error;
            state.countries.loading = false;
        })
            //product tat
            .addCase(getTatProduct.pending, (state) => {
            state.product_tat.loading = true;
        })
            .addCase(getTatProduct.fulfilled, (state, action) => {
            state.product_tat = action.payload;
            state.product_tat.error = null;
            state.product_tat.loading = false;
        })
            .addCase(getTatProduct.rejected, (state, action) => {
            state.product_tat = {};
            state.product_tat.error = action.error;
            state.product_tat.loading = false;
        })
            //pincode details
            .addCase(fetchPincodeDetails.pending, (state) => {
            state.pincode_details.loading = true;
        })
            .addCase(fetchPincodeDetails.fulfilled, (state, action) => {
            state.pincode_details = action.payload;
            state.pincode_details.error = null;
            state.pincode_details.loading = false;
        })
            .addCase(fetchPincodeDetails.rejected, (state, action) => {
            state.pincode_details = {};
            state.pincode_details.error = action.error;
            state.pincode_details.loading = false;
        })
            .addCase(getPincodeCity.pending, (state) => {
            state.pincode_details.loading = true;
        })
            .addCase(getPincodeCity.fulfilled, (state, action) => {
            state.pincode_details = action.payload;
            state.pincode_details.error = null;
            state.pincode_details.loading = false;
        })
            .addCase(getPincodeCity.rejected, (state, action) => {
            state.pincode_details = {};
            state.pincode_details.error = action.error;
            state.pincode_details.loading = false;
        });
    },
});
export const logisticsReducer = logisticSlice.reducer;
//# sourceMappingURL=logistic.js.map