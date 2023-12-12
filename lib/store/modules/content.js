import { getAnnouncements, getSEOConfiguration, getBlog, getBlogs, getPage, getDataLoaders, getFaqsByCategorySlug, getLandingPage, getLegalInformation, getNavigations, getSlideshows, getSupportInformation, getTags, getFaqCategories, getFaqCategoryBySlug, getFaqs, } from "../slices/content";
export class ContentModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getNavigations(params) {
        if (params) {
            return this.dispatch(getNavigations(params));
        }
        return null;
    }
    getSEOConfiguration() {
        return this.dispatch(getSEOConfiguration());
    }
    fetchBlogData(params) {
        return this.dispatch(getBlog(params));
    }
    getBlogs(params) {
        return this.dispatch(getBlogs(params));
    }
    fetchCustomPageData(params) {
        return this.dispatch(getPage(params));
    }
    getFaqsByCategorySlug(params) {
        return this.dispatch(getFaqsByCategorySlug(params));
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
    getTags() {
        return this.dispatch(getTags());
    }
    getLegalInformation() {
        return this.dispatch(getLegalInformation());
    }
    getSlideshows(params) {
        return this.dispatch(getSlideshows(params));
    }
    getSupportInformation() {
        return this.dispatch(getSupportInformation());
    }
    getAnnouncements(params = { responseHeaders: false }) {
        return this.dispatch(getAnnouncements(params));
    }
    getLandingPage() {
        return this.dispatch(getLandingPage());
    }
    getDataLoaders() {
        return this.dispatch(getDataLoaders());
    }
}
//# sourceMappingURL=content.js.map