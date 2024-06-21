import { createHistory, createTicket, getCustomForm, getTicket, submitCustomForm } from "../slices/lead";
export class LeadModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getCustomForm(params) {
        return this.dispatch(getCustomForm(params));
    }
    submitCustomForm(params) {
        return this.dispatch(submitCustomForm(params));
    }
    getTicket(params) {
        return this.dispatch(getTicket(params));
    }
    createHistory(params) {
        return this.dispatch(createHistory(params));
    }
    createTicket(params) {
        return this.dispatch(createTicket(params));
    }
}
//# sourceMappingURL=lead.js.map