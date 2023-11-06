import { SerializedError } from '@reduxjs/toolkit';
import { CustomerDetailsResponse, OrderById, OrderList, ResponseGetInvoiceShipment, SendOtpToCustomerResponse, ShipmentApplicationStatusResponse, ShipmentBagReasons, ShipmentById, ShipmentReasons, ShipmentTrack, VerifyOtpResponse } from '@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel';
import { GetCustomerDetailsByShipmentIdParam, GetInvoiceByShipmentIdParam, GetOrderByIdParam, GetOrdersParam, GetPosOrderByIdParam, GetShipmentBagReasonsParam, GetShipmentByIdParam, GetShipmentReasonsParam, SendOtpToShipmentCustomerParam, TrackShipmentParam, UpdateShipmentStatusParam, VerifyOtpShipmentCustomerParam } from '@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationValidator';
export declare const getOrders: import("@reduxjs/toolkit").AsyncThunk<OrderList, GetOrdersParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getOrderById: import("@reduxjs/toolkit").AsyncThunk<OrderById, GetOrderByIdParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getCustomerDetailsByShipmentId: import("@reduxjs/toolkit").AsyncThunk<CustomerDetailsResponse, GetCustomerDetailsByShipmentIdParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getInvoiceByShipmentId: import("@reduxjs/toolkit").AsyncThunk<ResponseGetInvoiceShipment, GetInvoiceByShipmentIdParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getPosOrderById: import("@reduxjs/toolkit").AsyncThunk<OrderById, GetPosOrderByIdParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getShipmentBagReasons: import("@reduxjs/toolkit").AsyncThunk<ShipmentBagReasons, GetShipmentBagReasonsParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getShipmentById: import("@reduxjs/toolkit").AsyncThunk<ShipmentById, GetShipmentByIdParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getShipmentReasons: import("@reduxjs/toolkit").AsyncThunk<ShipmentReasons, GetShipmentReasonsParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const sendOtpToShipmentCustomer: import("@reduxjs/toolkit").AsyncThunk<SendOtpToCustomerResponse, SendOtpToShipmentCustomerParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const trackShipment: import("@reduxjs/toolkit").AsyncThunk<ShipmentTrack, TrackShipmentParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateShipmentStatus: import("@reduxjs/toolkit").AsyncThunk<ShipmentApplicationStatusResponse, UpdateShipmentStatusParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const verifyOtpShipmentCustomer: import("@reduxjs/toolkit").AsyncThunk<VerifyOtpResponse, VerifyOtpShipmentCustomerParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const orderReducer: import("redux").Reducer<{}, import("redux").AnyAction>;
