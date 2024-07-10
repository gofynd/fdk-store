import { SerializedError } from "@reduxjs/toolkit";
import type ApplicationClient from "@gofynd/fdk-client-javascript/sdk/application/ApplicationClient";
import { AnyAction } from "redux";
export interface ExtraArguments {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
}
export type CommonAsyncLoadingTypes = {
    loading?: boolean;
    error?: any;
};
export type AsyncThunkPromise<T> = Promise<{
    meta?: any;
    type: string;
    payload?: T;
    error?: unknown;
}>;
export type AsyncThunkCompleted<T> = {
    meta?: any;
    type: string;
    payload?: T;
    error?: unknown;
};
export type SimplPaymentConfig = {
    env: string;
    simpl: {
        key: string;
    };
};
export type EventEmitterFunction = (event: string, payload: any) => void;
export type FPIClientOptions = {
    applicationID: string;
    applicationToken: string;
    domain: string;
    storeInitialData: unknown;
    eventEmitter?: EventEmitterFunction;
};
export type ProductListingOptions = {
    q?: string;
    f?: string;
    filters?: boolean;
    sortOn?: string;
    pageId?: string;
    pageSize?: number;
    pageNo?: number;
    pageType?: string;
};
export type GetPageOptions = {
    pageValue: string;
    themeId: string;
};
export type ActionGenerators = {
    [k in string]: (arg0: any) => AnyAction;
};
export type CustomAction<T> = {
    type: string;
    payload: T;
};
