import { CustomPayload, CustomSlice } from "../../types/custom";
export declare const customReducer: import("redux").Reducer<CustomSlice, import("redux").AnyAction>;
export declare const setValue: import("@reduxjs/toolkit").ActionCreatorWithPayload<CustomPayload, "custom/setValue">;
