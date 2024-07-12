import type { ThunkActionDispatch } from "redux-thunk";
import { EventEmitterFunction } from "../types";
export declare function createCacheProxy<T extends object>(moduleName: string, instance: T, dispatch: ThunkActionDispatch<any>, eventEmitter?: EventEmitterFunction): T;
