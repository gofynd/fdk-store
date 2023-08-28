import ApplicationStore from './store';
import { FPIClientOptions } from './types';
declare class FPIClient {
    client: ApplicationStore;
    constructor(opts: FPIClientOptions);
}
export default FPIClient;
