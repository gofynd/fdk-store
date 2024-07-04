import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import { CreateHistoryParam, CreateTicketParam, GetCustomFormParam, GetTicketParam, SubmitCustomFormParam } from "@gofynd/fdk-client-javascript/sdk/application/Lead/LeadApplicationValidator";
import { CustomForm, SubmitCustomFormResponse, Ticket, TicketHistory } from "@gofynd/fdk-client-javascript/sdk/application/Lead/LeadApplicationModel";
export declare class LeadModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getCustomForm(params: GetCustomFormParam): AsyncThunkPromise<CustomForm>;
    submitCustomForm(params: SubmitCustomFormParam): AsyncThunkPromise<SubmitCustomFormResponse>;
    getTicket(params: GetTicketParam): AsyncThunkPromise<Ticket>;
    createHistory(params: CreateHistoryParam): AsyncThunkPromise<TicketHistory>;
    createTicket(params: CreateTicketParam): AsyncThunkPromise<Ticket>;
}
