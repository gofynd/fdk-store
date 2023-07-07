import type { ThunkActionDispatch } from "redux-thunk";
declare class contentModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchNavigation(params?: any): any;
    fetchAppSeo(): any;
    fetchBlogData(params: {
        slug: string;
    }): any;
    fetchBlogs(params: {
        pageNo: number;
        pageSize: number;
    }): any;
    fetchCustomPageData(params: {
        slug: string;
        rootId: string;
    }): any;
    fetchFaqByCategory(params: {
        slug: string;
    }): any;
    fetchTags(): any;
    fetchLegalData(): any;
    fetchScreenSaver(params?: any): any;
    fetchSupportInformation(): any;
    fetchAnnouncement(params?: any): any;
    fetchLandingPage(): any;
    fetchDataLoaders(): any;
}
export default contentModule;
