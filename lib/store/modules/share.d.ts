import type { ThunkActionDispatch } from "redux-thunk";
declare class shareModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    createShortLink(params?: any): Promise<any>;
    getUrlQRCode(params?: any): Promise<any>;
}
export default shareModule;
