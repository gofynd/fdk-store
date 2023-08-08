import { AnnouncementsResponseSchema, ApplicationLegal, BlogGetResponse, BlogSchema, DataLoadersSchema, GetFaqSchema, LandingPageSchema, NavigationGetResponse, PageSchema, SeoComponent, SlideshowGetResponse, Support, TagsSchema } from "fdk-client-javascript/sdk/application/Content/ContentApplicationModel";
import { GetBlogParam, GetBlogsParam, GetFaqsByCategorySlugParam, GetNavigationsParam, GetPageParam, GetSlideshowsParam } from "fdk-client-javascript/sdk/application/Content/ContentApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
declare class contentModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchNavigation(params: GetNavigationsParam): AsyncThunkPromise<NavigationGetResponse>;
    fetchAppSeo(): AsyncThunkPromise<SeoComponent>;
    fetchBlogData(params: GetBlogParam): AsyncThunkPromise<BlogSchema>;
    fetchBlogs(params: GetBlogsParam): AsyncThunkPromise<BlogGetResponse>;
    fetchCustomPageData(params: GetPageParam): AsyncThunkPromise<PageSchema>;
    fetchFaqByCategory(params: GetFaqsByCategorySlugParam): AsyncThunkPromise<GetFaqSchema>;
    fetchTags(): AsyncThunkPromise<TagsSchema>;
    fetchLegalData(): AsyncThunkPromise<ApplicationLegal>;
    fetchScreenSaver(params: GetSlideshowsParam): AsyncThunkPromise<SlideshowGetResponse>;
    fetchSupportInformation(): AsyncThunkPromise<Support>;
    fetchAnnouncement(): AsyncThunkPromise<AnnouncementsResponseSchema>;
    fetchLandingPage(): AsyncThunkPromise<LandingPageSchema>;
    fetchDataLoaders(): AsyncThunkPromise<DataLoadersSchema>;
}
export default contentModule;
