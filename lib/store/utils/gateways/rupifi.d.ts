import type ApplicationClient from "fdk-client-javascript/sdk/application/ApplicationClient";
export default class RupifiPayment {
    private sdk;
    selectedPayment: {
        id: string;
        aggregator_name: any;
        amount: any;
        paymentFlowMeta: any;
    };
    paymentFlow: any;
    constructor(sdk: ApplicationClient, selectedPayment: {
        id: string;
        aggregator_name: any;
        amount: any;
        paymentFlowMeta: any;
    });
    verifyUser(params: any, phone: any): Promise<void>;
    transaction(obj: any): Promise<unknown>;
}
