import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {};
export const bindingNamespace = 'core_binding_namespace';
const customSlice = createSlice({
    name: STORE_KEYS.CUSTOM,
    initialState,
    reducers: {
        setValue(state, action) {
            const { key, value } = action.payload;
            state[key] = value;
        },
    },
    extraReducers: (builder) => { },
});
export const customReducer = customSlice.reducer;
export const { setValue } = customSlice.actions;
//# sourceMappingURL=custom.js.map