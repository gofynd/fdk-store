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
import { getAnnouncements, getSEOConfiguration, getBlog, getBlogs, getPage, getDataLoaders, getFaqsByCategorySlug, getLandingPage, getLegalInformation, getNavigations, getSlideshows, getSupportInformation, getTags, getFaqCategories, getFaqCategoryBySlug, getFaqs, setDataLoaders, } from "../slices/content";
export class ContentModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getNavigations(params) {
        return this.dispatch(getNavigations(params));
    }
    getSEOConfiguration() {
        return this.dispatch(getSEOConfiguration());
    }
    getBlog(params) {
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