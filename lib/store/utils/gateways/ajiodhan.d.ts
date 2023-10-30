export default class AjiodhanPayment {
    selectedPayment: any;
    paymentFlow: any;
    constructor(selectedPayment: {
        paymentFlowMeta: any;
    });
    transaction(obj: any): Promise<void>;
}
