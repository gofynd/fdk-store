import type ApplicationClient from '@gofynd/fdk-client-javascript/sdk/application/ApplicationClient';
import { SimplPaymentConfig } from '../../../types';
interface SelectedPayment {
    aggregator_name: any;
    amount: any;
    paymentFlowMeta: any;
    id: string;
}
declare global {
    interface Window {
        Simpl: any;
        env: any;
    }
}
export default class SimplypayPayment {
    private sdk;
    selectedPayment: SelectedPayment;
    paymentFlow: any;
    constructor(sdk: ApplicationClient, selectedPayment: SelectedPayment);
    /**
     * This method is caled while paymentOptions list page only.
     * To verify that this user is allowed to do simple payment or not.
     */
    verifyUser(): Promise<void>;
    checkSimpleApproval(data: {
        [x: string]: any;
        payload?: unknown;
        aggregator?: any;
        phone_number?: any;
        merchant_params?: {
            source: string;
        };
        merchant_profile_id: any;
        transaction_amount_in_paise?: any;
    }): Promise<void>;
    transaction(obj: any): Promise<unknown>;
    chargeCustomer(tokenData: {
        transaction_token: any;
    }, orderData: {
        order_id: any;
        amount: any;
    }): Promise<void>;
    injectScript(payment_config: SimplPaymentConfig): Promise<void>;
}
export {};
