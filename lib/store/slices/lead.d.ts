import { CreateHistoryParam, CreateTicketParam, GetCustomFormParam, GetTicketParam, SubmitCustomFormParam } from '@gofynd/fdk-client-javascript/sdk/application/Lead/LeadApplicationValidator';
import { CustomForm, SubmitCustomFormResponse, Ticket, TicketHistory } from '@gofynd/fdk-client-javascript/sdk/application/Lead/LeadApplicationModel';
import { LeadSlice } from '../../types/lead';
export declare const getCustomForm: import("@reduxjs/toolkit").AsyncThunk<CustomForm, GetCustomFormParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const submitCustomForm: import("@reduxjs/toolkit").AsyncThunk<SubmitCustomFormResponse, SubmitCustomFormParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getTicket: import("@reduxjs/toolkit").AsyncThunk<Ticket, GetTicketParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const createHistory: import("@reduxjs/toolkit").AsyncThunk<TicketHistory, CreateHistoryParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const createTicket: import("@reduxjs/toolkit").AsyncThunk<Ticket, CreateTicketParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const leadReducer: import("redux").Reducer<LeadSlice, import("redux").AnyAction>;
