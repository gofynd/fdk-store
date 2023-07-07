import { fetchAppCurrencies, fetchAppFeatures, fetchAppIntegrationTokens, fetchApplication, fetchContactInfo, fetchDeploymentStores, fetchStaff, fetchStoreById } from "../slices/configuration";
class configurationModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchApplication() {
        return this.dispatch(fetchApplication());
    }
    fetchContactInfo() {
        return this.dispatch(fetchContactInfo());
    }
    fetchAppFeatures() {
        return this.dispatch(fetchAppFeatures());
    }
    fetchAppIntegrationTokens() {
        return this.dispatch(fetchAppIntegrationTokens());
    }
    fetchDeploymentStores(params = {}) {
        return this.dispatch(fetchDeploymentStores(params));
    }
    fetchStaff(params = {}) {
        return this.dispatch(fetchStaff(params));
    }
    fetchStoreById(params = {}) {
        return this.dispatch(fetchStoreById(params));
    }
    fetchAppCurrencies() {
        return this.dispatch(fetchAppCurrencies());
    }
}
export default configurationModule;
//# sourceMappingURL=configuration.js.map