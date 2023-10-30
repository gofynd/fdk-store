import type ApplicationClient from '@gofynd/fdk-client-javascript/sdk/application/ApplicationClient';
declare global {
    interface Window {
        potlee: any;
    }
}
export default class PotleePayment {
    private sdk;
    selectedPayment: any;
    paymentFlow: any;
    constructor(sdk: ApplicationClient, selectedPayment: {
        paymentFlowMeta: any;
    });
    /**
     * This method is caled while paymentOptions list page only.
     * To verify that this user is allowed to do Potlee payment or not.
     */
    verifyUser(params?: any): Promise<void>;
    fetchAddressForApproval(params: {
        address_id?: any;
        billing_address_id?: any;
        bag_data?: any;
        fingerprint?: any;
    }): Promise<unknown>;
    checkPotleeApproval(data: {
        [x: string]: any;
        payload?: any;
        aggregator?: any;
        phone_number?: any;
        merchant_params?: {
            source: string;
        };
        merchant_profile_id: any;
        transaction_amount_in_paise?: number;
        delivery_address?: {
            line1: any;
            line2: any;
            city: any;
            state: any;
            country: any;
            pincode: any;
            type: any;
        };
        billing_address?: {
            line1: any;
            line2: any;
            city: any;
            state: any;
            country: any;
            pincode: any;
            type: any;
        };
        order_items?: any;
    }): Promise<void>;
    transaction(obj: {
        redirect_url: any;
    }): void;
    chargeCustomer(tokenData: {
        transaction_token: any;
    }, orderData: {
        order_id: any;
        amount: any;
    }): Promise<void>;
}
