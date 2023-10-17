import { ApplicationConfig, ApplicationClient } from 'fdk-client-javascript/application';
import ApplicationStore from './store';
class FPIClient {
    constructor(opts) {
        const { applicationID, applicationToken, domain, storeInitialData = {} } = opts;
        const config = new ApplicationConfig({
            applicationID,
            applicationToken,
            domain,
        });
        const sdk = new ApplicationClient(config);
        this.client = new ApplicationStore(sdk, storeInitialData);
    }
}
export default FPIClient;
//# sourceMappingURL=index.js.map