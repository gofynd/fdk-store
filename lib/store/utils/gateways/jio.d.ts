export default class JioPayment {
    selectedPayment: {
        mode_name: any;
        paymentFlowMeta: any;
        aggregator_name: any;
        name: any;
    };
    paymentFlow: any;
    payment_mode: any;
    constructor(selectedPayment: any, payment_mode: any);
    createCardPaymentData(obj: any): {
        token: any;
        cvv: any;
        card?: undefined;
    } | {
        card: {
            name: any;
            number: any;
            cvv: any;
            expiryMonth: any;
            expiryYear: string;
        };
        token?: undefined;
        cvv?: undefined;
    };
    createUPIPaymentData(obj: any): {
        upi: {
            vpa: any;
            type: string;
        };
    };
    createNetBankingData(payment: any): {
        nb: {
            bankCode: any;
        };
    };
    createWalletData(payment: any): {
        wallet: {
            instrumentId: any;
            token: any;
        };
    };
    transaction(obj: any, payload: any): Promise<void>;
}
