export default class StandardExtension {
    selectedPayment: any;
    paymentFlow: any;
    constructor(selectedPayment: any);
    transaction(obj: any): Promise<void>;
}
