import type ApplicationClient from "fdk-client-javascript/sdk/application/ApplicationClient";
export declare function handleConfirmPayment(sdk: ApplicationClient, params: any): Promise<import("fdk-client-javascript/sdk/application/Cart/CartApplicationModel").CartDetailResponse>;
export declare function handleCODOrder(sdk: ApplicationClient, state: any, paymentOptions: any): Promise<import("fdk-client-javascript/sdk/application/Cart/CartApplicationModel").CartCheckoutResponse>;
export declare function transactOrder(sdk: ApplicationClient, state: any, paymentOptions: {
    aggregator: string;
    payment: any;
}): Promise<void>;
export declare function createOrder(sdk: ApplicationClient, paymentOptions: any): Promise<import("fdk-client-javascript/sdk/application/Cart/CartApplicationModel").CartCheckoutResponse>;
export declare function updateOrderInfo(currentPaymentGatway: any, orderInfo: any, paymentOptions: any): any;