import { CustomerDetailsResponse, OrderById, OrderList, ResponseGetInvoiceShipment, SendOtpToCustomerResponse, ShipmentApplicationStatusResponse, ShipmentBagReasons, ShipmentById, ShipmentReasons, ShipmentTrack, VerifyOtpResponse } from "@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel";
import { GetCustomerDetailsByShipmentIdParam, GetInvoiceByShipmentIdParam, GetOrderByIdParam, GetOrdersParam, GetPosOrderByIdParam, GetShipmentBagReasonsParam, GetShipmentByIdParam, GetShipmentReasonsParam, SendOtpToShipmentCustomerParam, TrackShipmentParam, UpdateShipmentStatusParam, VerifyOtpShipmentCustomerParam } from "@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class OrderModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getOrderById(params: GetOrderByIdParam): AsyncThunkPromise<OrderById>;
    getCustomerDetailsByShipmentId(params: GetCustomerDetailsByShipmentIdParam): AsyncThunkPromise<CustomerDetailsResponse>;
    getInvoiceByShipmentId(params: GetInvoiceByShipmentIdParam): AsyncThunkPromise<ResponseGetInvoiceShipment>;
    getPosOrderById(params: GetPosOrderByIdParam): AsyncThunkPromise<OrderById>;
    getShipmentBagReasons(params: GetShipmentBagReasonsParam): AsyncThunkPromise<ShipmentBagReasons>;
    getShipmentById(params: GetShipmentByIdParam): AsyncThunkPromise<ShipmentById>;
    getShipmentReasons(params: GetShipmentReasonsParam): AsyncThunkPromise<ShipmentReasons>;
    sendOtpToShipmentCustomer(params: SendOtpToShipmentCustomerParam): AsyncThunkPromise<SendOtpToCustomerResponse>;
    trackShipment(params: TrackShipmentParam): AsyncThunkPromise<ShipmentTrack>;
    updateShipmentStatus(params: UpdateShipmentStatusParam): AsyncThunkPromise<ShipmentApplicationStatusResponse>;
    verifyOtpShipmentCustomer(params: VerifyOtpShipmentCustomerParam): AsyncThunkPromise<VerifyOtpResponse>;
    getOrders(params: GetOrdersParam): AsyncThunkPromise<OrderList>;
}
