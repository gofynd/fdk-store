import { ApplicationConfig, ApplicationClient } from '@gofynd/fdk-client-javascript/application';
import { collectUnemittedEvents, emitAllEvents, FPI_EVENTS } from './helpers/FPI-events';
import ApplicationStore from './store';
import { Fetcher } from './graphql/fetcher';
class FPIClient {
    constructor(opts) {
        var _a;
        const { applicationID, applicationToken, domain, storeInitialData = {}, eventEmitter, } = opts;
        const customData = (_a = storeInitialData === null || storeInitialData === void 0 ? void 0 : storeInitialData.custom) !== null && _a !== void 0 ? _a : {};
        const events = collectUnemittedEvents(customData);
        emitAllEvents(events, FPI_EVENTS, storeInitialData);
        const concatenatedString = `${applicationID}:${applicationToken}`;
        const encodedString = self.btoa.call(globalThis, concatenatedString);
        const authorizationHeader = `Bearer ${encodedString}`;
        const config = new ApplicationConfig({
            applicationID,
            applicationToken,
            domain,
        });
        const sdk = new ApplicationClient(config);
        const graphqlFetcher = new Fetcher(domain, authorizationHeader);
        this.client = new ApplicationStore(sdk, storeInitialData, graphqlFetcher, eventEmitter);
    }
}
export default FPIClient;
//# sourceMappingURL=index.js.map