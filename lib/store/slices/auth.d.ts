import { SerializedError } from '@reduxjs/toolkit';
import type ApplicationClient from 'fdk-client-javascript/sdk/application/ApplicationClient';
import { AuthSuccess, DeleteUserSuccess, EmailOtpSuccess, LoginSuccess, LogoutSuccess, OtpSuccess, PlatformSchema, ProfileEditSuccess, RegisterFormSuccess, ResetPasswordSuccess, SendEmailVerifyLinkSuccess, SendOtpResponse, UserObjectSchema, VerifyOtpSuccess } from 'fdk-client-javascript/sdk/application/User/UserApplicationModel';
import { DeleteUserParam, ForgotPasswordParam, GetPlatformConfigParam } from 'fdk-client-javascript/sdk/application/User/UserApplicationValidator';
import { AuthSlice, LogInOTPParam, OAuthLoginParam, ResetPasswordWithEmail, ResetPasswordWithMobile, SendEmailVerificationLink, SendOTPOnEmail, SendOTPOnMobile, SignInUserWithPassword, SignUpUserParam, UpdateProfileType, VerifyEmailOTP, VerifyMobileOTP, verifyOTPParam } from '../../types/auth';
export declare const fetchPlatformData: import("@reduxjs/toolkit").AsyncThunk<PlatformSchema, GetPlatformConfigParam, {
    extra: {
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
        sdk: ApplicationClient;
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
