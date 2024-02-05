export default class JioPayment {
    selectedPayment: {
        paymentFlowMeta: any;
    };
    paymentFlow: any;
    constructor(selectedPayment: {
        paymentFlowMeta: any;
    });
    transaction(obj: {
        base64_html: any;
    }): Promise<void>;
}
