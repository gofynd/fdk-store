declare global {
    interface Window {
        Razorpay: any;
        env: any;
    }
}
export default class RazorpayPayment {
    private state;
    selectedPayment: any;
    paymentFlow: any;
    razorpay: any;
    constructor(selectedPayment: {
        paymentFlowMeta: any;
    }, state: any);
    createCardPaymentData(obj: {
        card_token: any;
        card_security_code: any;
        name_on_card: any;
        card_number: any;
        card_exp_month: any;
        card_exp_year: any;
    }): {
        card_token: any;
        'card[cvv]': any;
        'card[name]'?: undefined;
        'card[number]'?: undefined;
        'card[expiry_month]'?: undefined;
        'card[expiry_year]'?: undefined;
    } | {
        'card[name]': any;
        'card[number]': any;
        'card[cvv]': any;
        'card[expiry_month]': any;
        'card[expiry_year]': any;
        card_token?: undefined;
    };
    transaction(obj: any, consent: {
        checkedBoxValue: any;
        paymentdata: {
            option: {
                card_number: any;
            };
        };
    }): Promise<unknown>;
}
