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
    address: {},
    address_item: {},
};
export const getAddresses = createAsyncThunk('getAddresses', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getAddresses(params);
}));
export const addAddress = createAsyncThunk('addAddress', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.addAddress(params);
}));
export const getAddressById = createAsyncThunk('getAddressById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getAddressById(params);
}));
export const deleteAddress = createAsyncThunk('deleteAddress', (params, { extra, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const response = yield sdk.cart.removeAddress(params);
    if (response.is_deleted) {
        return response;
    }
    else {
        return rejectWithValue({
            message: 'Failed to remove address',
        });
    }
}));
export const removeAddress = createAsyncThunk('removeAddress', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.removeAddress(params);
}));
export const updateAddress = createAsyncThunk('removeAddress', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.updateAddress(params);
}));
export const addOrUpdateAddress = createAsyncThunk('addOrUpdateAddress', (params, { extra, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    let isNew = params.id ? false : true;
    try {
        if (isNew) {
            const response = yield sdk.cart.addAddress(params);
            if (response.success) {
                return Object.assign(Object.assign({}, params), { id: response.id });
            }
            else {
                return rejectWithValue({ message: 'Address could not be updated' });
            }
        }
        else {
            const response = yield sdk.cart.updateAddress(params);
            if (response.success) {
                return Object.assign(Object.assign({}, params), { id: response.id });
            }
            else {
                return rejectWithValue({ message: 'Address could not be updated' });
            }
        }
    }
    catch (error) {
        return rejectWithValue(error);
    }
}));
const addressSlice = createSlice({
    name: STORE_KEYS.ADDRESS,
    initialState,
    reducers: {
    // setAddressItem(state, { payload }) {
    //     const { data, error } = payload;
    //     if (error) {
    //         state.address_item = {
    //             ...state.address_item,
    //             error
    //         }
    //     } else {
    //         state.address_item = {
    //             ...data,
    //             error: null
    //         }
    //     }
    // }
    },
    extraReducers: (builder) => {
        builder
            // get address
            .addCase(getAddresses.pending, (state) => {
            state.address.loading = true;
        })
            .addCase(getAddresses.fulfilled, (state, action) => {
            state.address = action.payload;
            state.address.error = null;
            state.address.loading = false;
        })
            .addCase(getAddresses.rejected, (state, action) => {
            state.address = {};
            state.address.error = action.error;
            state.address.loading = false;
        })
            // get address item
            .addCase(getAddressById.pending, (state) => {
            state.address_item.loading = true;
        })
            .addCase(getAddressById.fulfilled, (state, action) => {
            state.address_item = action.payload;
            state.address_item.error = null;
            state.address_item.loading = false;
        })
            .addCase(getAddressById.rejected, (state, action) => {
            state.address_item = {};
            state.address_item.error = action.error;
            state.address_item.loading = false;
        })
            // addOrUpdateAddress
            .addCase(addOrUpdateAddress.pending, (state) => {
            state.address_item.loading = true;
        })
            .addCase(addOrUpdateAddress.fulfilled, (state, action) => {
            state.address_item = action.payload;
            state.address_item.error = null;
            state.address_item.loading = false;
        })
            .addCase(addOrUpdateAddress.rejected, (state, action) => {
            state.address_item = {};
            state.address_item.error = action.error;
            state.address_item.loading = false;
        })
            // updateAddress
            .addCase(updateAddress.pending, (state) => {
            state.address_item.loading = true;
        })
            .addCase(updateAddress.fulfilled, (state, action) => {
            state.address_item = action.payload;
            state.address_item.error = null;
            state.address_item.loading = false;
        })
            .addCase(updateAddress.rejected, (state, action) => {
            state.address_item = {};
            state.address_item.error = action.error;
            state.address_item.loading = false;
        })
            // addaddress
            .addCase(addAddress.pending, (state) => {
            state.address_item.loading = true;
        })
            .addCase(addAddress.fulfilled, (state, action) => {
            state.address_item = action.payload;
            state.address_item.error = null;
            state.address_item.loading = false;
        })
            .addCase(addAddress.rejected, (state, action) => {
            state.address_item = {};
            state.address_item.error = action.error;
            state.address_item.loading = false;
        });
    },
});
export const addressReducer = addressSlice.reducer;
//# sourceMappingURL=address.js.map