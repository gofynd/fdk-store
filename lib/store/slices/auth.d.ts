import { SerializedError } from "@reduxjs/toolkit";
import { AuthSuccess, DeleteUserSuccess, EmailOtpSuccess, HasPasswordSuccess, LoginSuccess, LogoutSuccess, OtpSuccess, PlatformSchema, ProfileEditSuccess, RegisterFormSuccess, ResetPasswordSuccess, SendEmailVerifyLinkSuccess, SendOtpResponse, SessionListSuccess, UserObjectSchema, VerifyMobileOTPSuccess, VerifyOtpSuccess } from "@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel";
import { AddEmailParam, AddMobileNumberParam, DeleteEmailParam, DeleteMobileNumberParam, DeleteUserParam, ForgotPasswordParam, GetPlatformConfigParam } from "@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationValidator";
import { AuthSlice, LogInOTPParam, loginWithAppleIOSParam, OAuthLoginParam, ResetPasswordWithEmail, ResetPasswordWithMobile, SendEmailVerificationLink, SendOTPOnEmail, SendOTPOnMobile, SignInUserWithPassword, SignUpUserParam, UpdateProfileType, VerifyEmailOTP, VerifyMobileOTP, verifyOTPParam } from "../../types/auth";
export declare const fetchPlatformData: import("@reduxjs/toolkit").AsyncThunk<PlatformSchema, GetPlatformConfigParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const loginWithAppleIOS: import("@reduxjs/toolkit").AsyncThunk<AuthSuccess, loginWithAppleIOSParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const hasPassword: import("@reduxjs/toolkit").AsyncThunk<HasPasswordSuccess, any, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getListOfActiveSessions: import("@reduxjs/toolkit").AsyncThunk<SessionListSuccess, any, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteMobileNumber: import("@reduxjs/toolkit").AsyncThunk<LoginSuccess, DeleteMobileNumberParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteEmail: import("@reduxjs/toolkit").AsyncThunk<LoginSuccess, DeleteEmailParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addMobileNumber: import("@reduxjs/toolkit").AsyncThunk<VerifyMobileOTPSuccess, AddMobileNumberParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addEmail: import("@reduxjs/toolkit").AsyncThunk<VerifyMobileOTPSuccess, AddEmailParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchUserData: import("@reduxjs/toolkit").AsyncThunk<UserObjectSchema, void, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteUser: import("@reduxjs/toolkit").AsyncThunk<DeleteUserSuccess, DeleteUserParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const signOutUser: import("@reduxjs/toolkit").AsyncThunk<LogoutSuccess, void, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const signUpUser: import("@reduxjs/toolkit").AsyncThunk<RegisterFormSuccess, SignUpUserParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const signInUserWithPassword: import("@reduxjs/toolkit").AsyncThunk<LoginSuccess, SignInUserWithPassword, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const signInUserWithOtp: import("@reduxjs/toolkit").AsyncThunk<VerifyOtpSuccess, verifyOTPParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const sendOtp: import("@reduxjs/toolkit").AsyncThunk<SendOtpResponse, LogInOTPParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const forgotPassword: import("@reduxjs/toolkit").AsyncThunk<LoginSuccess, {
    body: ForgotPasswordParam;
}, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const facebookLogin: import("@reduxjs/toolkit").AsyncThunk<AuthSuccess, OAuthLoginParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const googleLogin: import("@reduxjs/toolkit").AsyncThunk<AuthSuccess, OAuthLoginParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const resetPasswordWithEmail: import("@reduxjs/toolkit").AsyncThunk<ResetPasswordSuccess, ResetPasswordWithEmail, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const resetPasswordWithMobile: import("@reduxjs/toolkit").AsyncThunk<ResetPasswordSuccess, ResetPasswordWithMobile, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const sendOtpMobile: import("@reduxjs/toolkit").AsyncThunk<OtpSuccess, SendOTPOnMobile, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const sendOtpEmail: import("@reduxjs/toolkit").AsyncThunk<EmailOtpSuccess, SendOTPOnEmail, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const verifyMobileOtp: import("@reduxjs/toolkit").AsyncThunk<VerifyOtpSuccess, VerifyMobileOTP, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const verifyEmailOtp: import("@reduxjs/toolkit").AsyncThunk<VerifyOtpSuccess, VerifyEmailOTP, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateProfile: import("@reduxjs/toolkit").AsyncThunk<ProfileEditSuccess, UpdateProfileType, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const sendEmailVerificationLink: import("@reduxjs/toolkit").AsyncThunk<SendEmailVerifyLinkSuccess, SendEmailVerificationLink, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const authReducer: import("redux").Reducer<AuthSlice, import("redux").AnyAction>;
export declare const setUserData: import("@reduxjs/toolkit").ActionCreatorWithPayload<AuthSlice, "auth/setUserData">;
