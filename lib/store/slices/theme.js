var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    theme: {},
    page: {},
};
export const fetchAppliedTheme = createAsyncThunk("appliedTheme", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.theme.getAppliedTheme();
}));
export const fetchThemeById = createAsyncThunk("themeById", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.theme.getThemeForPreview(params);
}));
export const fetchPage = createAsyncThunk("fetchPage", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.theme.getPage(params);
}));
const themeSlice = createSlice({
    name: STORE_KEYS.THEME,
    initialState,
    reducers: {
        updateSectionsForPreview(state, action) {
            var _a, _b, _c, _d;
            const { index, newIndex } = action.payload;
            if ((index || index === 0) && (newIndex || newIndex === 0)) {
                if (((_b = (_a = state.page) === null || _a === void 0 ? void 0 : _a.sections) === null || _b === void 0 ? void 0 : _b[index]) && ((_d = (_c = state.page) === null || _c === void 0 ? void 0 : _c.sections) === null || _d === void 0 ? void 0 : _d[newIndex])) {
                    [state.page.sections[index], state.page.sections[newIndex]] = [
                        state.page.sections[newIndex],
                        state.page.sections[index],
                    ];
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAppliedTheme.pending, (state) => {
            state.theme.loading = true;
        })
            .addCase(fetchAppliedTheme.fulfilled, (state, action) => {
            state.theme = action.payload;
            state.theme.error = null;
            state.theme.loading = false;
        })
            .addCase(fetchAppliedTheme.rejected, (state, action) => {
            state.theme = {};
            state.theme.error = action.error;
            state.theme.loading = false;
        })
            //theme by id
            .addCase(fetchThemeById.pending, (state) => {
            state.theme.loading = true;
        })
            .addCase(fetchThemeById.fulfilled, (state, action) => {
            state.theme = action.payload;
            state.theme.error = null;
            state.theme.loading = false;
        })
            .addCase(fetchThemeById.rejected, (state, action) => {
            state.theme = {};
            state.theme.error = action.error;
            state.theme.loading = false;
        })
            //page
            .addCase(fetchPage.pending, (state) => {
            state.page.loading = true;
        })
            .addCase(fetchPage.fulfilled, (state, action) => {
            state.page = action.payload;
            state.page.error = null;
            state.page.loading = false;
        })
            .addCase(fetchPage.rejected, (state, action) => {
            state.page = {};
            state.page.error = action.error;
            state.page.loading = false;
        });
    },
});
export const themeReducer = themeSlice.reducer;
export const { updateSectionsForPreview } = themeSlice.actions;
export default themeSlice;
//# sourceMappingURL=theme.js.map