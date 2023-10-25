import { Options } from "fdk-client-javascript/sdk/application/ApplicationAPIClient";
import { AnnouncementsResponseSchema, ApplicationLegal, BlogGetResponse, BlogSchema, DataLoadersSchema, FaqResponseSchema, GetFaqCategoriesSchema, GetFaqSchema, LandingPageSchema, NavigationGetResponse, PageSchema, SeoComponent, SlideshowGetResponse, Support, TagsSchema } from "fdk-client-javascript/sdk/application/Content/ContentApplicationModel";
import { GetBlogParam, GetBlogsParam, GetFaqCategoriesParam, GetFaqsByCategorySlugParam, GetFaqsParam, GetNavigationsParam, GetPageParam, GetSlideshowsParam } from "fdk-client-javascript/sdk/application/Content/ContentApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ContentModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchNavigation(params: GetNavigationsParam | undefined): AsyncThunkPromise<NavigationGetResponse> | null;
    fetchAppSeo(): AsyncThunkPromise<SeoComponent>;
    fetchBlogData(params: GetBlogParam): AsyncThunkPromise<BlogSchema>;
    fetchBlogs(params: GetBlogsParam): AsyncThunkPromise<BlogGetResponse>;
    fetchCustomPageData(params: GetPageParam): AsyncThunkPromise<PageSchema>;
    fetchFaqByCategory(params: GetFaqsByCategorySlugParam): AsyncThunkPromise<GetFaqSchema>;
    getFaqCategories(params: GetFaqCategoriesParam): AsyncThunkPromise<GetFaqCategoriesSchema>;
    getFaqs(params: GetFaqsParam): AsyncThunkPromise<FaqResponseSchema>;
    fetchTags(): AsyncThunkPromise<TagsSchema>;
    fetchLegalData(): AsyncThunkPromise<ApplicationLegal>;
    fetchScreenSaver(params: GetSlideshowsParam): AsyncThunkPromise<SlideshowGetResponse>;
    fetchSupportInformation(): AsyncThunkPromise<Support>;
    fetchAnnouncement(params?: Options): AsyncThunkPromise<AnnouncementsResponseSchema>;
    fetchLandingPage(): AsyncThunkPromise<LandingPageSchema>;
    fetchDataLoaders(): AsyncThunkPromise<DataLoadersSchema>;
}
