import type { ThunkActionDispatch } from "redux-thunk";
declare class configurationModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchApplication(): any;
    fetchContactInfo(): any;
    fetchAppFeatures(): any;
    fetchAppIntegrationTokens(): any;
    fetchDeploymentStores(params?: any): any;
    fetchStaff(params?: any): any;
    fetchStoreById(params?: any): any;
    fetchAppCurrencies(): any;
}
export default configurationModule;
