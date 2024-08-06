import { AuthSuccess, DeleteUserSuccess, EmailOtpSuccess, HasPasswordSuccess, LoginSuccess, LogoutSuccess, OtpSuccess, PlatformSchema, ProfileEditSuccess, RegisterFormSuccess, ResetPasswordSuccess, SendEmailVerifyLinkSuccess, SessionListSuccess, VerifyEmailSuccess, VerifyForgotOtpSuccess, UserObjectSchema, VerifyMobileOTPSuccess, VerifyOtpSuccess, UserExistsResponse } from "@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel";
import { AddEmailParam, AddMobileNumberParam, DeleteEmailParam, DeleteMobileNumberParam, DeleteUserParam, ForgotPasswordParam, GetListOfActiveSessionsParam, GetLoggedInUserParam, GetPlatformConfigParam, HasPasswordParam, VerifyEmailForgotOTPParam, VerifyEmailParam, VerifyMobileForgotOTPParam, VerifyMobileParam, LoginWithEmailAndPasswordParam, UpdatePasswordParam, SetMobileNumberAsPrimaryParam, UserExistsParam } from "@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import { AuthSlice, LogInOTPParam, loginWithAppleIOSParam, OAuthLoginParam, ResetPasswordWithEmail, ResetPasswordWithMobile, SendEmailVerificationLink, SendOTPOnEmail, SendOTPOnMobile, SignInUserWithPassword, SignUpUserParam, UpdateProfileType, VerifyEmailOTP, VerifyMobileOTP, verifyOTPParam } from "../../types/auth";
export declare class AuthModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getPlatformConfig(params: GetPlatformConfigParam): AsyncThunkPromise<PlatformSchema>;
    setMobileNumberAsPrimary(params: SetMobileNumberAsPrimaryParam): AsyncThunkPromise<LoginSuccess>;
    fetchUserData(): AsyncThunkPromise<UserObjectSchema>;
    deleteUser(params: DeleteUserParam): AsyncThunkPromise<DeleteUserSuccess>;
    updateUserData(params: AuthSlice): AuthSlice;
    getLoggedInUser(params: GetLoggedInUserParam): AsyncThunkPromise<UserObjectSchema>;
    logout(): AsyncThunkPromise<LogoutSuccess>;
    registerWithForm(params: SignUpUserParam): AsyncThunkPromise<RegisterFormSuccess>;
    loginWithEmailAndPassword(params: LoginWithEmailAndPasswordParam): AsyncThunkPromise<LoginSuccess>;
    signInUserWithPassword(params: SignInUserWithPassword): AsyncThunkPromise<LoginSuccess>;
    userExists(params: UserExistsParam): AsyncThunkPromise<UserExistsResponse>;
    verifyMobileOTP(params: verifyOTPParam): AsyncThunkPromise<VerifyOtpSuccess>;
    updatePassword(params: UpdatePasswordParam): AsyncThunkPromise<VerifyEmailSuccess>;
    sendOtp(params: LogInOTPParam): AsyncThunkPromise<UserObjectSchema>;
    facebookLogin(params: OAuthLoginParam): AsyncThunkPromise<AuthSuccess>;
    googleLogin(params: OAuthLoginParam): AsyncThunkPromise<AuthSuccess>;
    forgotPassword(params: {
        body: ForgotPasswordParam;
    }): AsyncThunkPromise<LoginSuccess>;
    resetPasswordWithEmail(params: ResetPasswordWithEmail): AsyncThunkPromise<ResetPasswordSuccess>;
    resetPasswordWithMobile(params: ResetPasswordWithMobile): AsyncThunkPromise<ResetPasswordSuccess>;
    loginWithAppleIOS(params: loginWithAppleIOSParam): AsyncThunkPromise<AuthSuccess>;
    hasPassword(params: HasPasswordParam): AsyncThunkPromise<HasPasswordSuccess>;
    getListOfActiveSessions(params: GetListOfActiveSessionsParam): AsyncThunkPromise<SessionListSuccess>;
    deleteMobileNumber(params: DeleteMobileNumberParam): AsyncThunkPromise<LoginSuccess>;
    deleteEmail(params: DeleteEmailParam): AsyncThunkPromise<LoginSuccess>;
    addMobileNumber(params: AddMobileNumberParam): AsyncThunkPromise<VerifyMobileOTPSuccess>;
    addEmail(params: AddEmailParam): AsyncThunkPromise<VerifyMobileOTPSuccess>;
    sendOtpMobile(params: SendOTPOnMobile): AsyncThunkPromise<OtpSuccess>;
    sendOtpEmail(params: SendOTPOnEmail): AsyncThunkPromise<EmailOtpSuccess>;
    verifyMobileOtp(params: VerifyMobileOTP): AsyncThunkPromise<VerifyOtpSuccess>;
    verifyEmail(params: VerifyEmailParam): AsyncThunkPromise<VerifyEmailSuccess>;
    verifyMobile(params: VerifyMobileParam): AsyncThunkPromise<VerifyEmailSuccess>;
    verifyEmailForgotOTP(params: VerifyEmailForgotOTPParam): AsyncThunkPromise<VerifyForgotOtpSuccess>;
    verifyMobileForgotOTP(params: VerifyMobileForgotOTPParam): AsyncThunkPromise<VerifyForgotOtpSuccess>;
    verifyEmailOtp(params: VerifyEmailOTP): AsyncThunkPromise<VerifyOtpSuccess>;
    updateProfile(params: UpdateProfileType): AsyncThunkPromise<ProfileEditSuccess>;
    sendVerificationLinkToEmail(params: SendEmailVerificationLink): AsyncThunkPromise<SendEmailVerifyLinkSuccess>;
}
