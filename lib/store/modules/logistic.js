import { getAllCountries, fetchPincodeDetails, getTatProduct, getPincodeCity } from "../slices/logistic";
export class LogisticModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getAllCountries() {
        return this.dispatch(getAllCountries());
    }
    getTatProduct(params) {
        return this.dispatch(getTatProduct(params));
    }
    getPincodeCity(params) {
        return this.dispatch(getPincodeCity(params));
    }
    fetchPincodeDetails(params) {
        return this.dispatch(fetchPincodeDetails(params));
    }
}
//# sourceMappingURL=logistic.js.map