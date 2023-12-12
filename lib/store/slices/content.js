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
};
export const getNavigations = createAsyncThunk("navigation", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getNavigations(params);
}));
export const getSEOConfiguration = createAsyncThunk("seo", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getSEOConfiguration();
}));
export const getBlog = createAsyncThunk("blog", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getBlog(params);
}));
export const getBlogs = createAsyncThunk("blogs", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getBlogs(params);
}));
export const getPage = createAsyncThunk("page", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getPage(params);
}));
export const getFaqsByCategorySlug = createAsyncThunk("faqByCateogry", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
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
export const getTags = createAsyncThunk("tags", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getTags();
}));
export const getLegalInformation = createAsyncThunk("legal", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getLegalInformation();
}));
export const getSlideshows = createAsyncThunk("screensaver", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getSlideshows(params);
}));
export const getSupportInformation = createAsyncThunk("supportInformation", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getSupportInformation();
}));
export const getAnnouncements = createAsyncThunk("announcement", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getAnnouncements(params);
}));
export const getLandingPage = createAsyncThunk("landingPage", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getLandingPage();
}));
export const getDataLoaders = createAsyncThunk("dataLoaders", (_, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.content.getDataLoaders();
}));
const contentSlice = createSlice({
    name: STORE_KEYS.CONTENT,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //navigation
            .addCase(getNavigations.pending, (state) => {
            state.navigation.loading = true;
        })
            .addCase(getNavigations.fulfilled, (state, action) => {
            state.navigation = action.payload;
            state.navigation.error = null;
            state.navigation.loading = false;
        })
            .addCase(getNavigations.rejected, (state, action) => {
            state.navigation = {};
            state.navigation.error = action.error;
            state.navigation.loading = false;
        })
            //seo
            .addCase(getSEOConfiguration.pending, (state) => {
            state.seo.loading = true;
        })
            .addCase(getSEOConfiguration.fulfilled, (state, action) => {
            state.seo = action.payload;
            state.seo.error = null;
            state.seo.loading = false;
        })
            .addCase(getSEOConfiguration.rejected, (state, action) => {
            state.seo = {};
            state.seo.error = action.error;
            state.seo.loading = false;
        })
            //blog item
            .addCase(getBlog.pending, (state) => {
            state.blog.loading = true;
        })
            .addCase(getBlog.fulfilled, (state, action) => {
            state.blog = action.payload;
            state.blog.error = null;
            state.blog.loading = false;
        })
            .addCase(getBlog.rejected, (state, action) => {
            state.blog = {};
            state.blog.error = action.error;
            state.blog.loading = false;
        })
            //blog list
            .addCase(getBlogs.pending, (state) => {
            state.blogs.loading = true;
        })
            .addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload;
            state.blogs.error = null;
            state.blogs.loading = false;
        })
            .addCase(getBlogs.rejected, (state, action) => {
            state.blogs = {};
            state.blogs.error = action.error;
            state.blogs.loading = false;
        })
            //custom page data
            .addCase(getPage.pending, (state) => {
            state.custom_page.loading = true;
        })
            .addCase(getPage.fulfilled, (state, action) => {
            state.custom_page = action.payload;
            state.custom_page.error = null;
            state.custom_page.loading = false;
        })
            .addCase(getPage.rejected, (state, action) => {
            state.custom_page = {};
            state.custom_page.error = action.error;
            state.custom_page.loading = false;
        })
            //faq by category
            .addCase(getFaqsByCategorySlug.pending, (state) => {
            state.faq_data.loading = true;
        })
            .addCase(getFaqsByCategorySlug.fulfilled, (state, action) => {
            state.faq_data = action.payload;
            state.faq_data.error = null;
            state.faq_data.loading = false;
        })
            .addCase(getFaqsByCategorySlug.rejected, (state, action) => {
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
            .addCase(getTags.pending, (state) => {
            state.tags.loading = true;
        })
            .addCase(getTags.fulfilled, (state, action) => {
            state.tags = action.payload;
            state.tags.error = null;
            state.tags.loading = false;
        })
            .addCase(getTags.rejected, (state, action) => {
            state.tags = {};
            state.tags.error = action.error;
            state.tags.loading = false;
        })
            //legal data
            .addCase(getLegalInformation.pending, (state) => {
            state.legal_data.loading = true;
        })
            .addCase(getLegalInformation.fulfilled, (state, action) => {
            state.legal_data = action.payload;
            state.legal_data.error = null;
            state.legal_data.loading = false;
        })
            .addCase(getLegalInformation.rejected, (state, action) => {
            state.legal_data = {};
            state.legal_data.error = action.error;
            state.legal_data.loading = false;
        })
            //screensaver
            .addCase(getSlideshows.pending, (state) => {
            state.screen_saver.loading = true;
        })
            .addCase(getSlideshows.fulfilled, (state, action) => {
            state.screen_saver = action.payload;
            state.screen_saver.error = null;
            state.screen_saver.loading = false;
        })
            .addCase(getSlideshows.rejected, (state, action) => {
            state.screen_saver = {};
            state.screen_saver.error = action.error;
            state.screen_saver.loading = false;
        })
            //support information
            .addCase(getSupportInformation.pending, (state) => {
            state.support_information.loading = true;
        })
            .addCase(getSupportInformation.fulfilled, (state, action) => {
            state.support_information = action.payload;
            state.support_information.error = null;
            state.support_information.loading = false;
        })
            .addCase(getSupportInformation.rejected, (state, action) => {
            state.support_information = {};
            state.support_information.error = action.error;
            state.support_information.loading = false;
        })
            //announcement
            .addCase(getAnnouncements.pending, (state) => {
            state.announcement.loading = true;
        })
            .addCase(getAnnouncements.fulfilled, (state, action) => {
            state.announcement = action.payload;
            state.announcement.error = null;
            state.announcement.loading = false;
        })
            .addCase(getAnnouncements.rejected, (state, action) => {
            state.announcement = {};
            state.announcement.error = action.error;
            state.announcement.loading = false;
        })
            //landing page
            .addCase(getLandingPage.pending, (state) => {
            state.landing_page.loading = true;
        })
            .addCase(getLandingPage.fulfilled, (state, action) => {
            state.landing_page = action.payload;
            state.landing_page.error = null;
            state.landing_page.loading = false;
        })
            .addCase(getLandingPage.rejected, (state, action) => {
            state.landing_page = {};
            state.landing_page.error = action.error;
            state.landing_page.loading = false;
        })
            //data loaders
            .addCase(getDataLoaders.pending, (state) => {
            state.data_loaders.loading = true;
        })
            .addCase(getDataLoaders.fulfilled, (state, action) => {
            state.data_loaders = action.payload;
            state.data_loaders.error = null;
            state.data_loaders.loading = false;
        })
            .addCase(getDataLoaders.rejected, (state, action) => {
            state.data_loaders = {};
            state.data_loaders.error = action.error;
            state.data_loaders.loading = false;
        });
    },
});
export const contentReducer = contentSlice.reducer;
//# sourceMappingURL=content.js.map