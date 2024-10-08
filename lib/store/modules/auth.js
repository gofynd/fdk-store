var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addEmail, addMobileNumber, deleteEmail, deleteMobileNumber, deleteUser, facebookLogin, getPlatformConfig, fetchUserData, forgotPassword, getListOfActiveSessions, googleLogin, hasPassword, loginWithAppleIOS, resetPasswordWithEmail, resetPasswordWithMobile, sendOtp, sendOtpEmail, sendOtpMobile, setUserData, signInUserWithPassword, updateProfile, verifyEmail, verifyEmailForgotOTP, verifyEmailOtp, verifyMobile, verifyMobileForgotOTP, verifyMobileOtp, getLoggedInUser, logout, registerWithForm, loginWithEmailAndPassword, verifyMobileOTP, sendVerificationLinkToEmail, updatePassword, setMobileNumberAsPrimary, sendForgotOTPOnMobile, sendForgotOTPOnEmail, userExists, } from "../slices/auth";
export class AuthModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getPlatformConfig(params) {
        return this.dispatch(getPlatformConfig(params));
    }
    setMobileNumberAsPrimary(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(setMobileNumberAsPrimary(params));
        });
    }
    fetchUserData() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchUserData());
        });
    }
    deleteUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(deleteUser(params));
        });
    }
    updateUserData(params) {
        return this.dispatch(setUserData(params));
    }
    getLoggedInUser(params) {
        return this.dispatch(getLoggedInUser(params));
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(logout());
        });
    }
    registerWithForm(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(registerWithForm(params));
        });
    }
    loginWithEmailAndPassword(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(loginWithEmailAndPassword(params));
        });
    }
    signInUserWithPassword(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(signInUserWithPassword(params));
        });
    }
    userExists(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(userExists(params));
        });
    }
    verifyMobileOTP(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(verifyMobileOTP(params));
        });
    }
    updatePassword(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updatePassword(params));
        });
    }
    sendForgotOTPOnMobile(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(sendForgotOTPOnMobile(params));
        });
    }
    sendForgotOTPOnEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(sendForgotOTPOnEmail(params));
        });
    }
    sendOtp(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(sendOtp(params));
        });
    }
    facebookLogin(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(facebookLogin(params));
        });
    }
    googleLogin(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(googleLogin(params));
        });
    }
    forgotPassword(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(forgotPassword(params));
        });
    }
    resetPasswordWithEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(resetPasswordWithEmail(params));
        });
    }
    resetPasswordWithMobile(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(resetPasswordWithMobile(params));
        });
    }
    loginWithAppleIOS(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(loginWithAppleIOS(params));
        });
    }
    hasPassword(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(hasPassword(params));
        });
    }
    getListOfActiveSessions(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getListOfActiveSessions(params));
        });
    }
    deleteMobileNumber(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(deleteMobileNumber(params));
        });
    }
    deleteEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(deleteEmail(params));
        });
    }
    addMobileNumber(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(addMobileNumber(params));
        });
    }
    addEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(addEmail(params));
        });
    }
    sendOtpMobile(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(sendOtpMobile(params));
        });
    }
    sendOtpEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(sendOtpEmail(params));
        });
    }
    verifyMobileOtp(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(verifyMobileOtp(params));
        });
    }
    verifyEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(verifyEmail(params));
        });
    }
    verifyMobile(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(verifyMobile(params));
        });
    }
    verifyEmailForgotOTP(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(verifyEmailForgotOTP(params));
        });
    }
    verifyMobileForgotOTP(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(verifyMobileForgotOTP(params));
        });
    }
    verifyEmailOtp(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(verifyEmailOtp(params));
        });
    }
    updateProfile(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateProfile(params));
        });
    }
    sendVerificationLinkToEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(sendVerificationLinkToEmail(params));
        });
    }
}
//# sourceMappingURL=auth.js.map