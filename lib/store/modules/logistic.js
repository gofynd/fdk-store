import { fetchAllCountries, fetchPincodeDetails, getTatProduct } from "../slices/logistic";
export class LogisticModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchAllCountries() {
        return this.dispatch(fetchAllCountries());
    }
    getTatProduct(params) {
        return this.dispatch(getTatProduct(params));
    }
    fetchPincodeDetails(params) {
        return this.dispatch(fetchPincodeDetails(params));
    }
}
//# sourceMappingURL=logistic.js.map