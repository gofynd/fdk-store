import { EventEmitterFunction } from "../types";
export declare function createCacheProxy<T extends object>(moduleName: string, instance: T, eventEmitter?: EventEmitterFunction): T;
