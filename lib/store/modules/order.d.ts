import { OrderById } from "fdk-client-javascript/sdk/application/Order/OrderApplicationModel";
import { GetOrderByIdParam } from "fdk-client-javascript/sdk/application/Order/OrderApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class OrderModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getOrderById(params: GetOrderByIdParam): AsyncThunkPromise<OrderById>;
}
