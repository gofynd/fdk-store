import { fetchAllCountries, fetchPincodeDetails, getTatProduct } from "../slices/logistic";
class logisticModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchAllCountries() {
        return this.dispatch(fetchAllCountries());
    }
    getTatProduct(params = {}) {
        return this.dispatch(getTatProduct(params));
    }
    fetchPincodeDetails(params = {}) {
        return this.dispatch(fetchPincodeDetails(params));
    }
}
export default logisticModule;
//# sourceMappingURL=logistic.js.map