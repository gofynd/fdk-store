export default class JuspayPayment {
    selectedPayment: {
        paymentFlowMeta: any;
    };
    paymentFlow: any;
    constructor(selectedPayment: {
        paymentFlowMeta: any;
    });
    createCardPaymentData(obj: {
        card_token: any;
        card_security_code: any;
        card_number: any;
        card_exp_month: any;
        card_exp_year: any;
        name_on_card: any;
    }): {
        card_token: any;
        card_security_code: any;
        card_number?: undefined;
        card_exp_month?: undefined;
        card_exp_year?: undefined;
        name_on_card?: undefined;
        nickname?: undefined;
    } | {
        card_number: any;
        card_security_code: any;
        card_exp_month: any;
        card_exp_year: any;
        name_on_card: any;
        nickname: any;
        card_token?: undefined;
    };
    transaction(obj: any): Promise<void>;
}
