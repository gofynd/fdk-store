export default class PayumoneyPayment {
    selectedPayment: any;
    paymentFlow: any;
    constructor(selectedPayment: {
        paymentFlowMeta: any;
    });
    transaction(): Promise<unknown>;
}
