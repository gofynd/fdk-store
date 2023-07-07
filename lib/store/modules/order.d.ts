import type { ThunkActionDispatch } from "redux-thunk";
declare class OrderModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getOrderById(params?: any): Promise<any>;
}
export default OrderModule;
