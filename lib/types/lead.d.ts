import { CustomForm, Ticket } from "@gofynd/fdk-client-javascript/sdk/application/Lead/LeadApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type SupportTicketType = Partial<Ticket & CommonAsyncLoadingTypes>;
export type CustomFormType = Partial<CustomForm & CommonAsyncLoadingTypes>;
export type LeadSlice = {
    support_ticket: SupportTicketType;
    custom_from: CustomFormType;
};
