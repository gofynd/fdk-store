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
import { createJWTToken } from "../../helpers/utils";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    logged_in: false,
    platform_data: {},
    user_data: {},
    user_fetched: false,
};
export const fetchPlatformData = createAsyncThunk("platformData", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.getPlatformConfig(params);
}));
export const loginWithAppleIOS = createAsyncThunk("loginWithAppleIOS", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.loginWithAppleIOS(params);
}));
export const hasPassword = createAsyncThunk("hasPassword", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.hasPassword(params);
}));
export const getListOfActiveSessions = createAsyncThunk("getListOfActiveSessions", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.getListOfActiveSessions(params);
}));
export const deleteMobileNumber = createAsyncThunk("deleteMobileNumber", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.deleteMobileNumber(params);
}));
export const deleteEmail = createAsyncThunk("deleteEmail", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.deleteEmail(params);
}));
export const addMobileNumber = createAsyncThunk("addMobileNumber", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.addMobileNumber(params);
}));
export const addEmail = createAsyncThunk("addEmail", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.addEmail(params);
}));
export const fetchUserData = createAsyncThunk("fetchUserData", (_, { extra, getState }) => __awaiter(void 0, void 0, void 0, function* () {
    const currentState = getState();
    const { sdk } = extra;
    if (currentState.auth.user_fetched && currentState.auth.logged_in) {
        return currentState.auth.user_data;
    }
    const data = yield sdk.user.getLoggedInUser();
    return data;
}));
export const deleteUser = createAsyncThunk("deleteUser", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.deleteUser({
        body: params.body,
    });
    return data;
}));
export const signOutUser = createAsyncThunk("signOutUser", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.logout();
    return data;
}));
export const signUpUser = createAsyncThunk("signUpUser", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.registerWithForm({
        platform: params.id,
        body: params.body,
    });
    return data;
}));
export const signInUserWithPassword = createAsyncThunk("signInUserWithPassword", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const body = {
        captcha_code: `grimlock_${createJWTToken({ t: Date.now() }, "gr!ml0ck")}`,
        password: params.password,
        username: params.username,
    };
    const data = yield sdk.user.loginWithEmailAndPassword({
        body,
    });
    return data;
}));
export const signInUserWithOtp = createAsyncThunk("signInUserWithOtp", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.verifyMobileOTP({
        platform: params.id,
        body: params.body,
    });
    return data;
}));
export const sendOtp = createAsyncThunk("sendOtp", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const body = {
        mobile: params.mobile,
        country_code: params.country_code,
        captcha_code: `grimlock_${createJWTToken({ t: Date.now() }, "gr!ml0ck")}`,
    };
    return sdk.user.loginWithOTP({
        platform: params.id,
        body: body,
    });
}));
export const forgotPassword = createAsyncThunk("forgotPassword", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.forgotPassword(params.body);
}));
export const facebookLogin = createAsyncThunk("facebookLogin", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.loginWithFacebook({
        body: params.body,
        platform: params.id,
    });
}));
export const googleLogin = createAsyncThunk("googleLogin", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.user.loginWithGoogle({
        body: params.body,
        platform: params.id,
    });
}));
export const resetPasswordWithEmail = createAsyncThunk("resetPasswordWithEmail", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const body = {
        email: params.email,
        captcha_code: params.captcha_code || "_skip_",
    };
    const data = yield sdk.user.sendResetPasswordEmail({
        platform: params.id,
        body,
    });
    return data;
}));
export const resetPasswordWithMobile = createAsyncThunk("resetPasswordWithMobile", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const body = {
        mobile: params.mobile,
        country_code: params.country_code,
        captcha_code: params.captcha_code || "_skip_",
    };
    const data = yield sdk.user.sendResetPasswordMobile({
        platform: params.id,
        body,
    });
    return data;
}));
export const sendOtpMobile = createAsyncThunk("sendOtpMobile", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.sendOTPOnMobile({
        platform: params.id,
        body: params.body,
    });
    return data;
}));
export const sendOtpEmail = createAsyncThunk("sendOtpEmail", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.sendOTPOnEmail({
        platform: params.id,
        body: params.body,
    });
    return data;
}));
export const verifyEmail = createAsyncThunk("verifyEmail", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.verifyEmail(params);
    return data;
}));
export const verifyMobile = createAsyncThunk("verifyMobile", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.verifyMobile(params);
    return data;
}));
export const verifyEmailForgotOTP = createAsyncThunk("verifyEmailForgotOTP", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.verifyEmailForgotOTP(params);
    return data;
}));
export const verifyMobileForgotOTP = createAsyncThunk("verifyMobileForgotOTP", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.verifyMobileForgotOTP(params);
    return data;
}));
export const verifyMobileOtp = createAsyncThunk("verifyMobileOtp", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.verifyMobileOTP({
        platform: params.id,
        body: params.body,
    });
    return data;
}));
export const verifyEmailOtp = createAsyncThunk("verifyEmailOtp", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.verifyEmailOTP({
        platform: params.id,
        body: params.body,
    });
    return data;
}));
export const updateProfile = createAsyncThunk("updateProfile", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.updateProfile({
        platform: params.id,
        body: params.body,
    });
    return data;
}));
export const sendEmailVerificationLink = createAsyncThunk("sendEmailVerificationLink", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const data = yield sdk.user.sendVerificationLinkToEmail({
        platform: params.id,
        body: { email: params.email },
    });
    return data;
}));
const authSlice = createSlice({
    name: STORE_KEYS.AUTH,
    initialState,
    reducers: {
        setUserData(state, { payload }) {
            state = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlatformData.pending, (state) => {
            state.platform_data.loading = true;
        })
            .addCase(fetchPlatformData.fulfilled, (state, action) => {
            state.platform_data = action.payload;
            state.platform_data.error = null;
            state.platform_data.loading = false;
        })
            .addCase(fetchPlatformData.rejected, (state, action) => {
            state.platform_data = {};
            state.platform_data.error = action.error;
            state.platform_data.loading = false;
        })
            .addCase(fetchUserData.pending, (state) => {
            return state;
        })
            .addCase(fetchUserData.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(fetchUserData.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            //loginWithAppleIOS
            .addCase(loginWithAppleIOS.pending, (state) => {
            return state;
        })
            .addCase(loginWithAppleIOS.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(loginWithAppleIOS.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(signInUserWithPassword.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(signInUserWithPassword.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(signInUserWithOtp.fulfilled, (state, action) => {
            const userExists = action.payload.user_exists;
            state.logged_in = !userExists ? false : true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(signInUserWithOtp.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(facebookLogin.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(facebookLogin.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(googleLogin.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(googleLogin.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(verifyMobileOtp.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(verifyMobileOtp.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(verifyEmailOtp.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(verifyEmailOtp.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(updateProfile.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(updateProfile.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(signOutUser.fulfilled, (state, action) => {
            state.logged_in = false;
            state.user_fetched = false;
            state.user_data = {};
        });
    },
});
export const authReducer = authSlice.reducer;
export const { setUserData } = authSlice.actions;
//# sourceMappingURL=auth.js.map