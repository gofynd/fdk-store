import type { ThunkActionDispatch } from "redux-thunk";
declare class collectionModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchCollection(params?: any): any;
}
export default collectionModule;
