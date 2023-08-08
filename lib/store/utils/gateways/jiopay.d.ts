export default class JiopayPayment {
    selectedPayment: {
        paymentFlowMeta: any;
    };
    paymentFlow: any;
    constructor(selectedPayment: {
        paymentFlowMeta: any;
    });
    transaction(obj: {
        merchant_id: any;
        appidtoken: any;
        appaccesstoken: any;
        intentid: any;
        themes: {
            mid?: any;
            appidtoken?: any;
            appaccesstoken?: any;
            intentid?: any;
        };
    }): Promise<void>;
}
