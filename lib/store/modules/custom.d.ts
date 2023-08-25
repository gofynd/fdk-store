import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkCompleted } from "../../types";
import { CustomPayload } from "../../types/custom";
export declare class CustomModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    setValue(key: string, value: any): AsyncThunkCompleted<CustomPayload>;
}
