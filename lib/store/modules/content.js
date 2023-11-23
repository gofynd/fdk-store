import { fetchAnnouncement, fetchAppSeo, fetchBlog, fetchBlogs, fetchCustomPage, fetchDataLoaders, fetchFaqByCategory, fetchLandingPage, fetchLegalData, fetchNavigation, fetchScreenSaver, fetchSupportInformation, fetchTags, getFaqCategories, getFaqCategoryBySlug, getFaqs, } from "../slices/content";
export class ContentModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchNavigation(params) {
        if (params) {
            return this.dispatch(fetchNavigation(params));
        }
        return null;
    }
    fetchAppSeo() {
        return this.dispatch(fetchAppSeo());
    }
    fetchBlogData(params) {
        return this.dispatch(fetchBlog(params));
    }
    fetchBlogs(params) {
        return this.dispatch(fetchBlogs(params));
    }
    fetchCustomPageData(params) {
        return this.dispatch(fetchCustomPage(params));
    }
    fetchFaqByCategory(params) {
        return this.dispatch(fetchFaqByCategory(params));
    }
    getFaqCategories(params) {
        return this.dispatch(getFaqCategories(params));
    }
    getFaqCategoryBySlug(params) {
        return this.dispatch(getFaqCategoryBySlug(params));
    }
    getFaqs(params) {
        return this.dispatch(getFaqs(params));
    }
    fetchTags() {
        return this.dispatch(fetchTags());
    }
    fetchLegalData() {
        return this.dispatch(fetchLegalData());
    }
    fetchScreenSaver(params) {
        return this.dispatch(fetchScreenSaver(params));
    }
    fetchSupportInformation() {
        return this.dispatch(fetchSupportInformation());
    }
    fetchAnnouncement(params = { responseHeaders: false }) {
        return this.dispatch(fetchAnnouncement(params));
    }
    fetchLandingPage() {
        return this.dispatch(fetchLandingPage());
    }
    fetchDataLoaders() {
        return this.dispatch(fetchDataLoaders());
    }
}
//# sourceMappingURL=content.js.map