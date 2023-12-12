import { getAppCurrencies, getFeatures, getIntegrationTokens, getApplication, getContactInfo, getOrderingStores, getAppStaffs, getStoreDetailById } from "../slices/configuration";
export class ConfigurationModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getApplication() {
        return this.dispatch(getApplication());
    }
    getContactInfo() {
        return this.dispatch(getContactInfo());
    }
    getFeatures() {
        return this.dispatch(getFeatures());
    }
    getIntegrationTokens() {
        return this.dispatch(getIntegrationTokens());
    }
    getOrderingStores(params) {
        return this.dispatch(getOrderingStores(params));
    }
    getAppStaffs(params) {
        return this.dispatch(getAppStaffs(params));
    }
    getStoreDetailById(params) {
        return this.dispatch(getStoreDetailById(params));
    }
    getAppCurrencies() {
        return this.dispatch(getAppCurrencies());
    }
}
//# sourceMappingURL=configuration.js.map