import { Options } from "@gofynd/fdk-client-javascript/sdk/application/ApplicationAPIClient";
import { AnnouncementsResponseSchema, ApplicationLegal, BlogGetResponse, BlogSchema, CustomFieldsResponseByResourceIdSchema, DataLoadersSchema, FaqResponseSchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, GetFaqSchema, LandingPageSchema, NavigationGetResponse, PageSchema, SeoComponent, SlideshowGetResponse, Support, TagsSchema } from "@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel";
import { GetBlogParam, GetBlogsParam, GetCustomFieldsParam, GetFaqCategoriesParam, GetFaqCategoryBySlugParam, GetFaqsByCategorySlugParam, GetFaqsParam, GetNavigationsParam, GetPageParam, GetSlideshowsParam } from "@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ContentModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getNavigations(params: GetNavigationsParam): AsyncThunkPromise<NavigationGetResponse>;
    getSEOConfiguration(): AsyncThunkPromise<SeoComponent>;
    getBlog(params: GetBlogParam): AsyncThunkPromise<BlogSchema>;
    getBlogs(params: GetBlogsParam): AsyncThunkPromise<BlogGetResponse>;
    fetchCustomPageData(params: GetPageParam): AsyncThunkPromise<PageSchema>;
    getFaqsByCategorySlug(params: GetFaqsByCategorySlugParam): AsyncThunkPromise<GetFaqSchema>;
    getFaqCategories(params: GetFaqCategoriesParam): AsyncThunkPromise<GetFaqCategoriesSchema>;
    getCustomFields(params: GetCustomFieldsParam): AsyncThunkPromise<CustomFieldsResponseByResourceIdSchema>;
    getFaqCategoryBySlug(params: GetFaqCategoryBySlugParam): AsyncThunkPromise<GetFaqCategoryBySlugSchema>;
    getFaqs(params: GetFaqsParam): AsyncThunkPromise<FaqResponseSchema>;
    getTags(): AsyncThunkPromise<TagsSchema>;
    getLegalInformation(): AsyncThunkPromise<ApplicationLegal>;
    getSlideshows(params: GetSlideshowsParam): AsyncThunkPromise<SlideshowGetResponse>;
    getSupportInformation(): AsyncThunkPromise<Support>;
    getAnnouncements(params?: Options): AsyncThunkPromise<AnnouncementsResponseSchema>;
    getLandingPage(): AsyncThunkPromise<LandingPageSchema>;
    getDataLoaders(): AsyncThunkPromise<DataLoadersSchema>;
    setDataLoaders(): AsyncThunkPromise<DataLoadersSchema>;
}
