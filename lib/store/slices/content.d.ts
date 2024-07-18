import { SerializedError } from "@reduxjs/toolkit";
import type { Options } from "@gofynd/fdk-client-javascript/sdk/application/ApplicationAPIClient";
import type ApplicationClient from "@gofynd/fdk-client-javascript/sdk/application/ApplicationClient";
import { AnnouncementsResponseSchema, ApplicationLegal, BlogGetResponse, BlogSchema, CustomFieldsResponseByResourceIdSchema, CustomObjectByIdSchema, DataLoadersSchema, FaqResponseSchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, GetFaqSchema, LandingPageSchema, NavigationGetResponse, PageSchema, SeoComponent, SlideshowGetResponse, Support, TagsSchema } from "@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel";
import { GetBlogParam, GetBlogsParam, GetCustomFieldsParam, GetCustomObjectParam, GetFaqCategoryBySlugParam, GetFaqsByCategorySlugParam, GetNavigationsParam, GetPageParam, GetSlideshowsParam } from "@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationValidator";
import { ContentSlice } from "../../types/content";
declare global {
    interface Window {
        APP_DATA: any;
    }
}
export declare const getNavigations: import("@reduxjs/toolkit").AsyncThunk<NavigationGetResponse, GetNavigationsParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getCustomObject: import("@reduxjs/toolkit").AsyncThunk<CustomObjectByIdSchema, GetCustomObjectParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getSEOConfiguration: import("@reduxjs/toolkit").AsyncThunk<SeoComponent, void, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getBlog: import("@reduxjs/toolkit").AsyncThunk<BlogSchema, GetBlogParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getBlogs: import("@reduxjs/toolkit").AsyncThunk<BlogGetResponse, GetBlogsParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getPage: import("@reduxjs/toolkit").AsyncThunk<PageSchema, GetPageParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getCustomFields: import("@reduxjs/toolkit").AsyncThunk<CustomFieldsResponseByResourceIdSchema, GetCustomFieldsParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFaqsByCategorySlug: import("@reduxjs/toolkit").AsyncThunk<GetFaqSchema, GetFaqsByCategorySlugParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFaqCategoryBySlug: import("@reduxjs/toolkit").AsyncThunk<GetFaqCategoryBySlugSchema, GetFaqCategoryBySlugParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFaqCategories: import("@reduxjs/toolkit").AsyncThunk<GetFaqCategoriesSchema, any, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFaqs: import("@reduxjs/toolkit").AsyncThunk<FaqResponseSchema, any, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getTags: import("@reduxjs/toolkit").AsyncThunk<TagsSchema, void, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getLegalInformation: import("@reduxjs/toolkit").AsyncThunk<ApplicationLegal, void, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getSlideshows: import("@reduxjs/toolkit").AsyncThunk<SlideshowGetResponse, GetSlideshowsParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getSupportInformation: import("@reduxjs/toolkit").AsyncThunk<Support, void, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getAnnouncements: import("@reduxjs/toolkit").AsyncThunk<AnnouncementsResponseSchema, Options, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getLandingPage: import("@reduxjs/toolkit").AsyncThunk<LandingPageSchema, void, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getDataLoaders: import("@reduxjs/toolkit").AsyncThunk<DataLoadersSchema, void, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const setDataLoaders: import("@reduxjs/toolkit").AsyncThunk<DataLoadersSchema | null, string, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const contentReducer: import("redux").Reducer<ContentSlice, import("redux").AnyAction>;
