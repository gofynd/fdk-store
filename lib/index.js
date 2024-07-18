import { ApplicationConfig, ApplicationClient } from '@gofynd/fdk-client-javascript/application';
import ApplicationStore from './store';
class FPIClient {
    constructor(opts) {
        const { applicationID, applicationToken, domain, storeInitialData = {}, eventEmitter, } = opts;
        const config = new ApplicationConfig({
            applicationID,
            applicationToken,
            domain,
        });
        const sdk = new ApplicationClient(config);
        this.client = new ApplicationStore(sdk, storeInitialData, eventEmitter);
    }
}
export default FPIClient;
//# sourceMappingURL=index.js.map