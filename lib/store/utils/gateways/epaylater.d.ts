export default class EpayLaterPayment {
    selectedPayment: {
        paymentFlowMeta: any;
    };
    paymentFlow: any;
    constructor(selectedPayment: {
        paymentFlowMeta: any;
    });
    transaction(obj: {
        checksum: any;
        encdata: any;
        mCode: any;
    }): Promise<void>;
}
