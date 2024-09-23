import { CustomPayload, CustomSlice } from "../../types/custom";
export declare const bindingNamespace = "core_binding_namespace";
export declare const customReducer: import("redux").Reducer<CustomSlice, import("redux").AnyAction>;
export declare const setValue: import("@reduxjs/toolkit").ActionCreatorWithPayload<CustomPayload, "custom/setValue">;
