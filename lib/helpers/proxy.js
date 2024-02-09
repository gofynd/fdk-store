var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { emitFPIEvent, FPI_EVENTS } from "./FPI-event";
import { isRunningOnClient } from "./utils";
const FunctionEventMap = {
    content: {
        fetchNavigation: {
            executionCache: true,
            dataCache: 60,
            event: FPI_EVENTS.VIEW_CART,
        }
    },
};
export function createCacheProxy(moduleName, instance, eventEmitter) {
    const executionMap = new Map();
    const cacheMap = new Map();
    const isClient = isRunningOnClient();
    const proxied = new Proxy(instance, {
        get(target, prop) {
            var _a, _b;
            const targetFunc = target[prop.toString()];
            if (targetFunc && typeof targetFunc === 'function') {
                const mappedEventMeta = (_b = (_a = FunctionEventMap[moduleName]) === null || _a === void 0 ? void 0 : _a[prop.toString()]) !== null && _b !== void 0 ? _b : {};
                const expectedNumberOfArguments = (moduleName === 'custom' && prop.toString() === 'setValue') ? 2 : 1;
                return function proxified(...params) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const overrideOptions = params.length > expectedNumberOfArguments ? params.pop() : {};
                        const cacheKey = `${moduleName}:${prop.toString()}:${JSON.stringify(params)}`;
                        const meta = Object.assign(Object.assign({}, mappedEventMeta), overrideOptions);
                        const finalMeta = Object.assign(Object.assign({}, meta), { executionCache: meta.executionCache && !isClient, dataCache: meta.dataCache && isClient });
                        const { executionCache = false, dataCache = false, } = finalMeta;
                        if (executionCache) {
                            const isRunning = executionMap.get(cacheKey);
                            if (isRunning instanceof Promise) {
                                return isRunning.then((response) => {
                                    if (finalMeta.event) {
                                        const { eventName, payloadCreator } = finalMeta.event;
                                        emitFPIEvent(eventName, payloadCreator, eventEmitter);
                                    }
                                    return response;
                                });
                            }
                        }
                        if (dataCache && typeof dataCache === 'number') {
                            const cache = cacheMap.get(cacheKey);
                            if (cache) {
                                console.log('Data Cache exists: ');
                                console.log('returning cache : ');
                                if (finalMeta.event) {
                                    const { eventName, payloadCreator } = finalMeta.event;
                                    emitFPIEvent(eventName, payloadCreator, eventEmitter);
                                }
                                return cache;
                            }
                        }
                        let result;
                        try {
                            const executionPromise = targetFunc.apply(target, params);
                            if (executionPromise instanceof Promise) {
                                if (executionCache) {
                                    executionMap.set(cacheKey, executionPromise);
                                }
                                result = yield executionPromise;
                            }
                            cacheMap.set(cacheKey, result);
                            setTimeout(() => {
                                cacheMap.delete(cacheKey);
                            }, dataCache * 1000);
                            if (finalMeta.event) {
                                const { eventName, payloadCreator } = finalMeta.event;
                                emitFPIEvent(eventName, payloadCreator, eventEmitter);
                            }
                            return result;
                        }
                        catch (error) {
                            console.error('ProxyObjectError : ' + error.message);
                        }
                        finally {
                            executionMap.delete(cacheKey);
                        }
                    });
                };
            }
        },
    });
    return proxied;
}
//# sourceMappingURL=proxy.js.map