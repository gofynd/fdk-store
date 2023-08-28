var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deleteUser, facebookLogin, fetchPlatformData, fetchUserData, forgotPassword, googleLogin, resetPasswordWithEmail, resetPasswordWithMobile, sendEmailVerificationLink, sendOtp, sendOtpEmail, sendOtpMobile, setUserData, signInUserWithOtp, signInUserWithPassword, signOutUser, signUpUser, updateProfile, verifyEmailOtp, verifyMobileOtp, } from "../slices/auth";
export class AuthModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchPlatformData(params) {
        const { id } = params;
        let option = {
            name: id,
        };
        return this.dispatch(fetchPlatformData(option));
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
    signOutUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(signOutUser());
        });
    }
    signUpUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(signUpUser(params));
        });
    }
    signInUserWithPassword(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(signInUserWithPassword(params));
        });
    }
    signInUserWithOtp(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(signInUserWithOtp(params));
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
    sendEmailVerificationLink(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(sendEmailVerificationLink(params));
        });
    }
}
//# sourceMappingURL=auth.js.map