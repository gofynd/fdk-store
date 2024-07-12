import { ApplicationConfig, ApplicationClient } from '@gofynd/fdk-client-javascript/application';
import { defaultFPIEmit, FPI_EVENTS } from './helpers/FPI-events';
import ApplicationStore from './store';
class FPIClient {
    constructor(opts) {
        var _a;
        const { applicationID, applicationToken, domain, storeInitialData = {}, eventEmitter, } = opts;
        // check for unemitted events
        const events = [];
        const customData = (_a = storeInitialData === null || storeInitialData === void 0 ? void 0 : storeInitialData.custom) !== null && _a !== void 0 ? _a : {};
        for (let key in customData) {
            if (customData.hasOwnProperty(key)) {
                if (key.startsWith('fpiEvent')) {
                    events.push(customData[key]);
                }
            }
        }
        // emit all events
        events.forEach((event) => {
            const { key, params, result } = event;
            let matchingEvent;
            for (let lkey in FPI_EVENTS) {
                if (FPI_EVENTS.hasOwnProperty(lkey)) {
                    if (FPI_EVENTS[lkey].eventName === key) {
                        matchingEvent = FPI_EVENTS[lkey];
                        break;
                    }
                }
            }
            if (matchingEvent) {
                const { eventName, payloadCreator } = matchingEvent;
                const payload = payloadCreator(result, params, storeInitialData, storeInitialData);
                defaultFPIEmit(eventName, payload);
            }
        });
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