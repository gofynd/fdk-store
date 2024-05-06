var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchApplication } from "../slices/configuration";
import { fetchAnnouncement, fetchAppSeo, fetchBlog, fetchBlogs, fetchCustomPage, fetchDataLoaders, fetchFaqByCategory, fetchLandingPage, fetchLegalData, fetchNavigation, fetchScreenSaver, fetchSupportInformation, fetchTags, getCustomObject, getFaqCategories, getFaqCategoryBySlug, getFaqs, setDataLoaders, } from "../slices/content";
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
    getCustomObject(params) {
        return this.dispatch(getCustomObject(params));
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
    setDataLoaders() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const application = yield this.dispatch(fetchApplication());
                const appDomain = (_d = (_c = ((_b = (_a = application.payload) === null || _a === void 0 ? void 0 : _a.domains) !== null && _b !== void 0 ? _b : []).find((domain) => domain.is_primary)) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '';
                return this.dispatch(setDataLoaders(appDomain));
            }
            catch (error) {
                return Promise.resolve({ type: 'setDataLoaders', error });
            }
        });
    }
}
//# sourceMappingURL=content.js.map