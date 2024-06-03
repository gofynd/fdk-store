import type ApplicationStore from "../store";
import { EventEmitterFunction } from "../types";
declare global {
    interface Window {
        FPI: {
            event: {
                emit: (eventName: string, payload: any) => undefined;
            };
        };
        fpi: ApplicationStore;
    }
}
export type PayloadCreator = (result: any, param: any, store: any, oldStore?: any) => any;
type FPI_EVENTS = {
    [key: string]: {
        eventName: string;
        payloadCreator: PayloadCreator;
    };
};
export type EventMap = {
    eventName: string;
    payloadCreator: PayloadCreator;
};
export declare const FPI_EVENTS: FPI_EVENTS;
export declare function emitFPIEvent(event: EventMap | undefined, params: any, result: any, oldStore: any, eventEmitter?: EventEmitterFunction): void;
export declare function defaultFPIEmit(eventName: string, payload: any): void;
export {};
