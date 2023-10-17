import type ApplicationClient from "fdk-client-javascript/sdk/application/ApplicationClient";
import { CartCheckoutResponse } from "fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
export declare function handleConfirmPayment(sdk: ApplicationClient, params: any): Promise<import("fdk-client-javascript/sdk/application/Cart/CartApplicationModel").CartDetailResponse>;
export declare function handleCODOrder(sdk: ApplicationClient, state: any, paymentOptions: any, create_order?: (sdk: ApplicationClient, paymentOptions: any) => Promise<CartCheckoutResponse>): Promise<CartCheckoutResponse>;
export declare function transactOrder(sdk: ApplicationClient, state: any, paymentOptions: {
    aggregator: string;
    payment: any;
}, create_order?: (sdk: ApplicationClient, paymentOptions: any) => Promise<CartCheckoutResponse>): Promise<void>;
export declare function createOrder(sdk: ApplicationClient, paymentOptions: any): Promise<CartCheckoutResponse>;
export declare function updateOrderInfo(currentPaymentGatway: any, orderInfo: any, paymentOptions: any): any;
