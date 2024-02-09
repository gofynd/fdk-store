import type { EditProfileRequestSchema, FormRegisterRequestSchema, OAuthRequestAppleSchema, OAuthRequestSchema, PlatformSchema, SendEmailOtpRequestSchema, SendMobileOtpRequestSchema, UserObjectSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema } from "@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type PlatformDataType = Partial<PlatformSchema & CommonAsyncLoadingTypes>;
export type UserDataType = Partial<UserObjectSchema & CommonAsyncLoadingTypes>;
export type AuthSlice = {
    logged_in: boolean;
    platform_data: PlatformDataType;
    user_data: UserDataType;
    user_fetched: boolean;
};
export type SignUpUserParam = {
    id: string;
    body: FormRegisterRequestSchema;
};
export type loginWithAppleIOSParam = {
    platform?: string;
    body: OAuthRequestAppleSchema;
};
export type verifyOTPParam = {
    id: string;
    body: VerifyOtpRequestSchema;
};
export type OAuthLoginParam = {
    id: string;
    body: OAuthRequestSchema;
};
export type LogInOTPParam = {
    id: string;
    mobile: string;
    country_code: string;
};
export type SignInUserWithPassword = {
    password: string;
    username: string;
};
export type ResetPasswordWithEmail = {
    id: string;
    email: string;
    captcha_code: string;
};
export type ResetPasswordWithMobile = {
    id: string;
    mobile: string;
    country_code: string;
    captcha_code: string;
};
export type SendOTPOnMobile = {
    id: string;
    body: SendMobileOtpRequestSchema;
};
export type SendOTPOnEmail = {
    id: string;
    body: SendEmailOtpRequestSchema;
};
export type VerifyMobileOTP = {
    id: string;
    body: VerifyOtpRequestSchema;
};
export type VerifyEmailOTP = {
    id: string;
    body: VerifyEmailOtpRequestSchema;
};
export type UpdateProfileType = {
    id: string;
    body: EditProfileRequestSchema;
};
export type SendEmailVerificationLink = {
    id: string;
    email: string;
};
