var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCustomerDetailsByShipmentId, getInvoiceByShipmentId, getOrderById, getOrders, getPosOrderById, getShipmentBagReasons, getShipmentById, getShipmentReasons, sendOtpToShipmentCustomer, trackShipment, updateShipmentStatus, verifyOtpShipmentCustomer } from "../slices/order";
export class OrderModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getOrderById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getOrderById(params));
        });
    }
    getCustomerDetailsByShipmentId(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getCustomerDetailsByShipmentId(params));
        });
    }
    getInvoiceByShipmentId(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getInvoiceByShipmentId(params));
        });
    }
    getPosOrderById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getPosOrderById(params));
        });
    }
    getShipmentBagReasons(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getShipmentBagReasons(params));
        });
    }
    getShipmentById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getShipmentById(params));
        });
    }
    getShipmentReasons(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getShipmentReasons(params));
        });
    }
    sendOtpToShipmentCustomer(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(sendOtpToShipmentCustomer(params));
        });
    }
    trackShipment(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(trackShipment(params));
        });
    }
    updateShipmentStatus(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateShipmentStatus(params));
        });
    }
    verifyOtpShipmentCustomer(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(verifyOtpShipmentCustomer(params));
        });
    }
    getOrders(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getOrders(params));
        });
    }
}
//# sourceMappingURL=order.js.map