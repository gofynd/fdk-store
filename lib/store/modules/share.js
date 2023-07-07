var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createShortLink, getUrlQRCode } from "../slices/share";
class shareModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    createShortLink(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(createShortLink(params));
        });
    }
    getUrlQRCode(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getUrlQRCode(params));
        });
    }
}
export default shareModule;
//# sourceMappingURL=share.js.map