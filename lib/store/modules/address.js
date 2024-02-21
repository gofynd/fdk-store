var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deleteAddress, getAddressById, getAddresses, removeAddress, addOrUpdateAddress, updateAddress } from "../slices/address";
export class AddressModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getAddresses(params) {
        return this.dispatch(getAddresses(params));
    }
    getAddressById(params) {
        return this.dispatch(getAddressById(params));
    }
    addOrUpdateAddress(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(addOrUpdateAddress(params));
        });
    }
    deleteAddress(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(deleteAddress(params));
        });
    }
    removeAddress(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(removeAddress(params));
        });
    }
    updateAddress(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateAddress(params));
        });
    }
}
//# sourceMappingURL=address.js.map