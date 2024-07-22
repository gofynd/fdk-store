import { ApplicationConfig, ApplicationClient } from '@gofynd/fdk-client-javascript/application';
import { collectUnemittedEvents, emitAllEvents, FPI_EVENTS } from './helpers/FPI-events';
import ApplicationStore from './store';
class FPIClient {
    constructor(opts) {
        var _a;
        const { applicationID, applicationToken, domain, storeInitialData = {}, eventEmitter, } = opts;
        const customData = (_a = storeInitialData === null || storeInitialData === void 0 ? void 0 : storeInitialData.custom) !== null && _a !== void 0 ? _a : {};
        const events = collectUnemittedEvents(customData);
        emitAllEvents(events, FPI_EVENTS, storeInitialData);
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