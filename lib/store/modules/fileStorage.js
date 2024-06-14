var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { updatePassword } from "../slices/auth";
import { completeUpload, signUrls, startUpload } from "../slices/fileStorage";
export class fileStorageModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    startUpload(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(startUpload(params));
        });
    }
    completeUpload(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(completeUpload(params));
        });
    }
    signUrls(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(signUrls(params));
        });
    }
    updatePassword(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updatePassword(params));
        });
    }
}
//# sourceMappingURL=fileStorage.js.map