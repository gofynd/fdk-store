var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
import { isRunningOnClient } from "../../helpers/utils";
const initialState = {
    navigation: {},
    seo: {},
    blog: {},
    blogs: {},
    custom_page: {},
    faq_data: {},
    faqs: {},
    faqCategory: {},
    faqCategories: {},
    tags: {},
    legal_data: {},
    screen_saver: {},
    support_information: {},
    announcement: {},
    landing_page: {},
    data_loaders: {},
    custom_object: {},
};
export const fetchNavigation = createAsyncThunk("navigation", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getNavigations(params);
}));
export const fetchAppSeo = createAsyncThunk("seo", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getSEOConfiguration();
}));
export const fetchBlog = createAsyncThunk("blog", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getBlog(params);
}));
export const fetchBlogs = createAsyncThunk("blogs", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getBlogs(params);
}));
export const fetchCustomPage = createAsyncThunk("page", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getPage(params);
}));
export const fetchFaqByCategory = createAsyncThunk("faqByCateogry", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getFaqsByCategorySlug(params);
}));
export const getFaqCategoryBySlug = createAsyncThunk("getFaqCategoryBySlug", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getFaqCategoryBySlug(params);
}));
export const getFaqCategories = createAsyncThunk("getFaqCategories", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getFaqCategories(params);
}));
export const getFaqs = createAsyncThunk("getFaqs", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getFaqs(params);
}));
export const fetchTags = createAsyncThunk("tags", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getTags();
}));
export const fetchLegalData = createAsyncThunk("legal", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getLegalInformation();
}));
export const fetchScreenSaver = createAsyncThunk("screensaver", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getSlideshows(params);
}));
export const fetchSupportInformation = createAsyncThunk("supportInformation", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getSupportInformation();
}));
export const fetchAnnouncement = createAsyncThunk("announcement", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getAnnouncements(params);
}));
export const fetchLandingPage = createAsyncThunk("landingPage", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getLandingPage();
}));
export const fetchDataLoaders = createAsyncThunk("dataLoaders", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getDataLoaders();
}));
export const setDataLoaders = createAsyncThunk("setDataLoaders", (hostName, { extra, getState }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { sdk } = extra;
    const state = getState();
    let host = `https://${hostName}`;
    if (isRunningOnClient()) {
        const { isCLI } = window.APP_DATA;
        if (isCLI) {
            /**
             * During local theme serving, proxied `localhost:5501` is
             * passed to SDK which can be accessed through `sdk.config.domain`
             * CORS is auto-handled with this during theme serving
             */
            host = sdk.config.domain;
        }
    }
    let dataLoaders;
    const loadersInState = state.content.data_loaders;
    if (loadersInState === null || loadersInState === void 0 ? void 0 : loadersInState.items) {
        dataLoaders = loadersInState;
    }
    else {
        dataLoaders = yield sdk.content.getDataLoaders();
    }
    if (!((_a = dataLoaders === null || dataLoaders === void 0 ? void 0 : dataLoaders.items) === null || _a === void 0 ? void 0 : _a.length)) {
        return null;
    }
    const dataLoaderMap = dataLoaders.items.reduce((map, loader) => {
        if (loader.service && loader.operation_id) {
            map[loader.service] = Object.assign(Object.assign({}, (map[loader.service] || {})), { [loader.operation_id]: host + loader.url });
        }
        return map;
    }, {});
    Object.entries(dataLoaderMap).forEach(([service, urls]) => {
        sdk[service].updateUrls(urls);
    });
    return dataLoaders;
}));
export const getCustomObject = createAsyncThunk('getCustomObject', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getCustomObject(params);
}));
const contentSlice = createSlice({
    name: STORE_KEYS.CONTENT,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //navigation
            .addCase(fetchNavigation.pending, (state) => {
            state.navigation.loading = true;
        })
            .addCase(fetchNavigation.fulfilled, (state, action) => {
            state.navigation = action.payload;
            state.navigation.error = null;
            state.navigation.loading = false;
        })
            .addCase(fetchNavigation.rejected, (state, action) => {
            state.navigation = {};
            state.navigation.error = action.error;
            state.navigation.loading = false;
        })
            //getCustomObject
            .addCase(getCustomObject.pending, (state) => {
            state.custom_object.loading = true;
        })
            .addCase(getCustomObject.fulfilled, (state, action) => {
            state.custom_object = action.payload;
            state.custom_object.error = null;
            state.custom_object.loading = false;
        })
            .addCase(getCustomObject.rejected, (state, action) => {
            state.custom_object = {};
            state.custom_object.error = action.error;
            state.custom_object.loading = false;
        })
            //seo
            .addCase(fetchAppSeo.pending, (state) => {
            state.seo.loading = true;
        })
            .addCase(fetchAppSeo.fulfilled, (state, action) => {
            state.seo = action.payload;
            state.seo.error = null;
            state.seo.loading = false;
        })
            .addCase(fetchAppSeo.rejected, (state, action) => {
            state.seo = {};
            state.seo.error = action.error;
            state.seo.loading = false;
        })
            //blog item
            .addCase(fetchBlog.pending, (state) => {
            state.blog.loading = true;
        })
            .addCase(fetchBlog.fulfilled, (state, action) => {
            state.blog = action.payload;
            state.blog.error = null;
            state.blog.loading = false;
        })
            .addCase(fetchBlog.rejected, (state, action) => {
            state.blog = {};
            state.blog.error = action.error;
            state.blog.loading = false;
        })
            //blog list
            .addCase(fetchBlogs.pending, (state) => {
            state.blogs.loading = true;
        })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload;
            state.blogs.error = null;
            state.blogs.loading = false;
        })
            .addCase(fetchBlogs.rejected, (state, action) => {
            state.blogs = {};
            state.blogs.error = action.error;
            state.blogs.loading = false;
        })
            //custom page data
            .addCase(fetchCustomPage.pending, (state) => {
            state.custom_page.loading = true;
        })
            .addCase(fetchCustomPage.fulfilled, (state, action) => {
            state.custom_page = action.payload;
            state.custom_page.error = null;
            state.custom_page.loading = false;
        })
            .addCase(fetchCustomPage.rejected, (state, action) => {
            state.custom_page = {};
            state.custom_page.error = action.error;
            state.custom_page.loading = false;
        })
            //faq by category
            .addCase(fetchFaqByCategory.pending, (state) => {
            state.faq_data.loading = true;
        })
            .addCase(fetchFaqByCategory.fulfilled, (state, action) => {
            state.faq_data = action.payload;
            state.faq_data.error = null;
            state.faq_data.loading = false;
        })
            .addCase(fetchFaqByCategory.rejected, (state, action) => {
            state.faq_data = {};
            state.faq_data.error = action.error;
            state.faq_data.loading = false;
        })
            //getFaqs
            .addCase(getFaqs.pending, (state) => {
            state.faqs.loading = true;
        })
            .addCase(getFaqs.fulfilled, (state, action) => {
            state.faqs = action.payload;
            state.faqs.error = null;
            state.faqs.loading = false;
        })
            .addCase(getFaqs.rejected, (state, action) => {
            state.faqs = {};
            state.faqs.error = action.error;
            state.faqs.loading = false;
        })
            //getFaqCategoryBySlug
            .addCase(getFaqCategoryBySlug.pending, (state) => {
            state.faqCategory.loading = true;
        })
            .addCase(getFaqCategoryBySlug.fulfilled, (state, action) => {
            state.faqCategory = action.payload;
            state.faqCategory.error = null;
            state.faqCategory.loading = false;
        })
            .addCase(getFaqCategoryBySlug.rejected, (state, action) => {
            state.faqCategory = {};
            state.faqCategory.error = action.error;
            state.faqCategory.loading = false;
        })
            //getFaqCategories
            .addCase(getFaqCategories.pending, (state) => {
            state.faqCategories.loading = true;
        })
            .addCase(getFaqCategories.fulfilled, (state, action) => {
            state.faqCategories = action.payload;
            state.faqCategories.error = null;
            state.faqCategories.loading = false;
        })
            .addCase(getFaqCategories.rejected, (state, action) => {
            state.faqCategories = {};
            state.faqCategory.error = action.error;
            state.faqCategory.loading = false;
        })
            //fpi tags
            .addCase(fetchTags.pending, (state) => {
            state.tags.loading = true;
        })
            .addCase(fetchTags.fulfilled, (state, action) => {
            state.tags = action.payload;
            state.tags.error = null;
            state.tags.loading = false;
        })
            .addCase(fetchTags.rejected, (state, action) => {
            state.tags = {};
            state.tags.error = action.error;
            state.tags.loading = false;
        })
            //legal data
            .addCase(fetchLegalData.pending, (state) => {
            state.legal_data.loading = true;
        })
            .addCase(fetchLegalData.fulfilled, (state, action) => {
            state.legal_data = action.payload;
            state.legal_data.error = null;
            state.legal_data.loading = false;
        })
            .addCase(fetchLegalData.rejected, (state, action) => {
            state.legal_data = {};
            state.legal_data.error = action.error;
            state.legal_data.loading = false;
        })
            //screensaver
            .addCase(fetchScreenSaver.pending, (state) => {
            state.screen_saver.loading = true;
        })
            .addCase(fetchScreenSaver.fulfilled, (state, action) => {
            state.screen_saver = action.payload;
            state.screen_saver.error = null;
            state.screen_saver.loading = false;
        })
            .addCase(fetchScreenSaver.rejected, (state, action) => {
            state.screen_saver = {};
            state.screen_saver.error = action.error;
            state.screen_saver.loading = false;
        })
            //support information
            .addCase(fetchSupportInformation.pending, (state) => {
            state.support_information.loading = true;
        })
            .addCase(fetchSupportInformation.fulfilled, (state, action) => {
            state.support_information = action.payload;
            state.support_information.error = null;
            state.support_information.loading = false;
        })
            .addCase(fetchSupportInformation.rejected, (state, action) => {
            state.support_information = {};
            state.support_information.error = action.error;
            state.support_information.loading = false;
        })
            //announcement
            .addCase(fetchAnnouncement.pending, (state) => {
            state.announcement.loading = true;
        })
            .addCase(fetchAnnouncement.fulfilled, (state, action) => {
            state.announcement = action.payload;
            state.announcement.error = null;
            state.announcement.loading = false;
        })
            .addCase(fetchAnnouncement.rejected, (state, action) => {
            state.announcement = {};
            state.announcement.error = action.error;
            state.announcement.loading = false;
        })
            //landing page
            .addCase(fetchLandingPage.pending, (state) => {
            state.landing_page.loading = true;
        })
            .addCase(fetchLandingPage.fulfilled, (state, action) => {
            state.landing_page = action.payload;
            state.landing_page.error = null;
            state.landing_page.loading = false;
        })
            .addCase(fetchLandingPage.rejected, (state, action) => {
            state.landing_page = {};
            state.landing_page.error = action.error;
            state.landing_page.loading = false;
        })
            //data loaders
            .addCase(fetchDataLoaders.pending, (state) => {
            state.data_loaders.loading = true;
        })
            .addCase(fetchDataLoaders.fulfilled, (state, action) => {
            state.data_loaders = action.payload;
            state.data_loaders.error = null;
            state.data_loaders.loading = false;
        })
            .addCase(fetchDataLoaders.rejected, (state, action) => {
            state.data_loaders = {};
            state.data_loaders.error = action.error;
            state.data_loaders.loading = false;
        })
            .addCase(setDataLoaders.pending, (state) => {
            state.data_loaders.loading = true;
        })
            .addCase(setDataLoaders.fulfilled, (state, action) => {
            state.data_loaders = action.payload || {};
            state.data_loaders.error = null;
            state.data_loaders.loading = false;
        })
            .addCase(setDataLoaders.rejected, (state, action) => {
            state.data_loaders = {};
            state.data_loaders.error = action.error;
            state.data_loaders.loading = false;
        });
    },
});
export const contentReducer = contentSlice.reducer;
//# sourceMappingURL=content.js.map