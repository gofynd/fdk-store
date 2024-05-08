import type ApplicationClient from "@gofynd/fdk-client-javascript/sdk/application/ApplicationClient";
import { CartCheckoutResponse } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import { SimplPaymentConfig } from "../../types";
export declare function handleConfirmPayment(sdk: ApplicationClient, params: any): Promise<import("@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel").CartDetailResponse>;
export declare function handleCODOrder(sdk: ApplicationClient, state: any, paymentOptions: any, create_order?: (sdk: ApplicationClient, paymentOptions: any) => Promise<CartCheckoutResponse>): Promise<void>;
export declare function transactOrder(sdk: ApplicationClient, state: any, paymentOptions: {
    aggregator: string;
    payment: any;
}, payment_config: SimplPaymentConfig, create_order?: (sdk: ApplicationClient, paymentOptions: any) => Promise<CartCheckoutResponse>): Promise<void>;
export declare function createOrder(sdk: ApplicationClient, paymentOptions: any): Promise<CartCheckoutResponse>;
export declare function updateOrderInfo(currentPaymentGatway: any, orderInfo: any, paymentOptions: any): any;
