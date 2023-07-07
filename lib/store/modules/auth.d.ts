import type { ThunkActionDispatch } from "redux-thunk";
declare class authModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchPlatformData(params?: any): any;
    fetchUserData(): Promise<any>;
    deleteUser(params?: any): Promise<any>;
    updateUserData(params?: any): any;
    signOutUser(): Promise<any>;
    signUpUser(params?: any): Promise<any>;
    signInUserWithPassword(params?: any): Promise<any>;
    signInUserWithOtp(params?: any): Promise<any>;
    sendOtp(params?: any): Promise<any>;
    facebookLogin(params?: any): Promise<any>;
    googleLogin(params?: any): Promise<any>;
    forgotPassword(params?: any): Promise<any>;
    resetPasswordWithEmail(params?: any): Promise<any>;
    resetPasswordWithMobile(params?: any): Promise<any>;
    sendOtpMobile(params?: any): Promise<any>;
    sendOtpEmail(params?: any): Promise<any>;
    verifyMobileOtp(params?: any): Promise<any>;
    verifyEmailOtp(params?: any): Promise<any>;
    updateProfile(params?: any): Promise<any>;
    sendEmailVerificationLink(params?: any): Promise<any>;
}
export default authModule;
