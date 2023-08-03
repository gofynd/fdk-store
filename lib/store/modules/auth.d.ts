import { AuthSuccess, DeleteUserSuccess, EmailOtpSuccess, LoginSuccess, LogoutSuccess, OtpSuccess, PlatformSchema, ProfileEditSuccess, RegisterFormSuccess, ResetPasswordSuccess, SendEmailVerifyLinkSuccess, UserObjectSchema, VerifyOtpSuccess } from "fdk-client-javascript/sdk/application/User/UserApplicationModel";
import { DeleteUserParam, ForgotPasswordParam } from "fdk-client-javascript/sdk/application/User/UserApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import { AuthSlice, LogInOTPParam, OAuthLoginParam, ResetPasswordWithEmail, ResetPasswordWithMobile, SendEmailVerificationLink, SendOTPOnEmail, SendOTPOnMobile, SignInUserWithPassword, SignUpUserParam, UpdateProfileType, VerifyEmailOTP, VerifyMobileOTP, verifyOTPParam } from "../../types/auth";
declare class authModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchPlatformData(params: {
        id: string;
    }): AsyncThunkPromise<PlatformSchema>;
    fetchUserData(): AsyncThunkPromise<UserObjectSchema>;
    deleteUser(params: DeleteUserParam): AsyncThunkPromise<DeleteUserSuccess>;
    updateUserData(params: AuthSlice): AuthSlice;
    signOutUser(): AsyncThunkPromise<LogoutSuccess>;
    signUpUser(params: SignUpUserParam): AsyncThunkPromise<RegisterFormSuccess>;
    signInUserWithPassword(params: SignInUserWithPassword): AsyncThunkPromise<LoginSuccess>;
    signInUserWithOtp(params: verifyOTPParam): AsyncThunkPromise<VerifyOtpSuccess>;
    sendOtp(params: LogInOTPParam): AsyncThunkPromise<UserObjectSchema>;
    facebookLogin(params: OAuthLoginParam): AsyncThunkPromise<AuthSuccess>;
    googleLogin(params: OAuthLoginParam): AsyncThunkPromise<AuthSuccess>;
    forgotPassword(params: {
        body: ForgotPasswordParam;
    }): AsyncThunkPromise<LoginSuccess>;
    resetPasswordWithEmail(params: ResetPasswordWithEmail): AsyncThunkPromise<ResetPasswordSuccess>;
    resetPasswordWithMobile(params: ResetPasswordWithMobile): AsyncThunkPromise<ResetPasswordSuccess>;
    sendOtpMobile(params: SendOTPOnMobile): AsyncThunkPromise<OtpSuccess>;
    sendOtpEmail(params: SendOTPOnEmail): AsyncThunkPromise<EmailOtpSuccess>;
    verifyMobileOtp(params: VerifyMobileOTP): AsyncThunkPromise<VerifyOtpSuccess>;
    verifyEmailOtp(params: VerifyEmailOTP): AsyncThunkPromise<VerifyOtpSuccess>;
    updateProfile(params: UpdateProfileType): AsyncThunkPromise<ProfileEditSuccess>;
    sendEmailVerificationLink(params: SendEmailVerificationLink): AsyncThunkPromise<SendEmailVerifyLinkSuccess>;
}
export default authModule;
