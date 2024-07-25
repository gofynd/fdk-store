import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { STORE_KEYS } from "./enums/keys";
import { collectionReducer } from "./slices/collection";
import { paymentReducer } from "./slices/payment";
import { themeReducer } from "./slices/theme";
import { shareReducer } from "./slices/share";
import { CatalogModule } from "./modules/catalog";
import { CartModule } from "./modules/cart";
import { BrandsModule } from "./modules/brands";
import { CategoriesModule } from "./modules/categories";
import { AuthModule } from "./modules/auth";
import { PaymentModule } from "./modules/payment";
import { AddressModule } from "./modules/address";
import { ContentModule } from "./modules/content";
import { ThemeModule } from "./modules/theme";
import { ConfigurationModule } from "./modules/configuration";
import { LogisticModule } from "./modules/logistic";
import { pdpReducer } from "./slices/catalog";
import { cartReducer } from "./slices/cart";
import { brandsReducer } from "./slices/brands";
import { addressReducer } from "./slices/address";
import { contentReducer } from "./slices/content";
import { logisticsReducer } from "./slices/logistic";
import { configurationReducer } from "./slices/configuration";
import { authReducer } from "./slices/auth";
import { ShareModule } from "./modules/share";
import { CollectionModule } from "./modules/collection";
import { OrderModule } from "./modules/order";
import { categoriesReducer } from "./slices/categories";
import { orderReducer } from "./slices/order";
import { customReducer } from "./slices/custom";
import { CustomModule } from "./modules/custom";
import { createCacheProxy } from "../helpers/proxy";
import { fileStorageModule } from "./modules/fileStorage";
import { fileStorageReducer } from "./slices/fileStorage";
import { leadReducer } from "./slices/lead";
import { LeadModule } from "./modules/lead";
class ApplicationStore {
    constructor(sdk, initialData, eventEmitter) {
        const rootReducer = combineReducers({
            // [STORE_KEYS.PRODUCTS]: plpReducer,
            [STORE_KEYS.CATALOG]: pdpReducer,
            [STORE_KEYS.CART]: cartReducer,
            [STORE_KEYS.BRANDS]: brandsReducer,
            [STORE_KEYS.ADDRESS]: addressReducer,
            [STORE_KEYS.CONTENT]: contentReducer,
            [STORE_KEYS.THEME]: themeReducer,
            [STORE_KEYS.CONFIGURATION]: configurationReducer,
            [STORE_KEYS.LOGISTIC]: logisticsReducer,
            [STORE_KEYS.CATEGORIES]: categoriesReducer,
            [STORE_KEYS.COLLECTION]: collectionReducer,
            [STORE_KEYS.AUTH]: authReducer,
            [STORE_KEYS.PAYMENT]: paymentReducer,
            [STORE_KEYS.SHARE]: shareReducer,
            [STORE_KEYS.ORDER]: orderReducer,
            [STORE_KEYS.CUSTOM]: customReducer,
            [STORE_KEYS.FILE_STORAGE]: fileStorageReducer,
            [STORE_KEYS.LEAD]: leadReducer,
        });
        this.store = configureStore({
            reducer: rootReducer,
            middleware: (defaultMiddleware) => {
                return defaultMiddleware({
                    thunk: {
                        extraArgument: {
                            sdk,
                        },
                    },
                });
            },
            preloadedState: initialData ? initialData : {},
        });
        this.getters = {
            // Product Listing Getters
            PRODUCTS: (store) => store.catalog.product_lists,
            PRODUCT_LISTING_META: (store) => store.catalog.product_listing_meta,
            CATEGORY_LISTING_META: (store) => store.catalog.category_listing_meta,
            COLLECTION_LISTING_META: (store) => store.catalog.collection_listing_meta,
            BRAND_LISTING_META: (store) => store.catalog.brand_listing_meta,
            PRODUCT_SEARCH_RESULTS: (store) => store.catalog.product_search_results,
            SEARCH_RESULTS: (store) => store.catalog.search_results,
            // Lead Getters
            CUSTOM_FORM: (store) => store.lead.custom_from,
            SUPPORT_TICKET: (store) => store.lead.support_ticket,
            // Product Description Getters
            PRODUCT: (store) => store.catalog,
            PRODUCT_DETAILS: (store) => store.catalog.product_details,
            PRODUCT_VARIANTS: (store) => store.catalog.product_variants,
            PRODUCT_META: (store) => store.catalog.product_meta,
            BULK_PRICE: (store) => store.cart.bulk_price,
            SIMILAR_COMPARE_PRODUCTS: (store) => store.catalog.similar_compare_products,
            FREQUENTLY_COMPARED_PRODUCTS: (store) => store.catalog.frequently_compared_products,
            PRODUCT_PRICE_BY_SLUG: (store) => store.catalog.product_price_by_slug,
            PRODUCT_SELLER_BY_SLUG: (store) => store.catalog.product_seller_by_slug,
            FOLLOW_BY_ID: (store) => store.catalog.follow_by_id,
            FOLLOWER_COUNT_BY_ID: (store) => store.catalog.follower_count_by_id,
            FOLLOWED_LIST: (store) => store.catalog.followed_listing,
            FOLLOW_IDS: (store) => store.catalog.fetch_follow_ids,
            UNFOLLOW_BY_IDS: (store) => store.catalog.unfollow_by_id,
            STORES_DETAILS: (store) => store.catalog.stores_details,
            INSTOCK_LOACTIONS: (store) => store.catalog.instock_locations,
            LOCATION_DETAILS: (store) => store.catalog.location_details,
            // Cart Getters
            CART: (store) => store.cart,
            CART_ITEMS: (store) => store.cart.cart_items,
            BUY_NOW_CART_ITEMS: (store) => store.cart.buy_now_cart_items,
            CHECKOUT_MODE: (store) => store.cart.checkout_mode,
            CART_ITEMS_COUNT: (store) => store.cart.cart_items_count,
            SHIPMENTS: (store) => store.cart.shipments,
            LADDER_OFFERS: (store) => store.cart.ladder_offers,
            PROMOTION_OFFERS: (store) => store.cart.promotion_offers,
            COUPONS: (store) => store.cart.coupons,
            CART_SHARE_LINK: (store) => store.cart.cart_share_link,
            // Address Getters
            ADDRESS: (store) => store.address.address,
            ADDRESS_ITEM: (store) => store.address.address_item,
            // categories Getters
            CATEGORIES: (store) => store.categories.categories,
            // Collection Getters
            COLLECTION: (store) => store.collection,
            COLLECTION_LIST: (store) => store.collection.collection,
            COLLECTION_ITEM: (store) => store.collection.item,
            // Theme Getters
            THEME: (store) => store.theme.theme,
            PAGE: (store) => store.theme.page,
            // Logistic Getters
            LOGISTIC: (store) => store.logistic,
            COUNTRIES: (store) => store.logistic.countries,
            PRODUCT_TAT: (store) => store.logistic.product_tat,
            PINCODE_DETAILS: (store) => store.logistic.pincode_details,
            // Brands Getters
            BRANDS: (store) => store.brands.brands,
            // Configuration Getters
            CONFIGURATION: (store) => store.configuration,
            APPLICATION: (store) => store.configuration.application,
            CONTACT_INFO: (store) => store.configuration.contact_info,
            APP_FEATURES: (store) => store.configuration.app_features,
            INTEGRATION_TOKENS: (store) => store.configuration.integration_tokens,
            DEPLOYMENT_STORES: (store) => store.configuration.deployment_stores,
            STAFF: (store) => store.configuration.staff,
            STORE_DETAILS: (store) => store.configuration.store_details,
            CURRENCIES: (store) => store.configuration.currencies,
            // Content Getters
            CONTENT: (store) => store.content,
            NAVIGATION: (store) => store.content.navigation,
            SEO: (store) => store.content.seo,
            BLOG: (store) => store.content.blog,
            BLOGS: (store) => store.content.blogs,
            CUSTOM_PAGE: (store) => store.content.custom_page,
            FAQ: (store) => store.content.faq_data,
            FAQS: (store) => store.content.faqs,
            FAQ_CATEGORY: (store) => store.content.faqCategory,
            FAQ_CATEGORIES: (store) => store.content.faqCategories,
            TAGS: (store) => store.content.tags,
            LEGAL_DATA: (store) => store.content.legal_data,
            SCREEN_SAVER: (store) => store.content.screen_saver,
            SUPPORT_INFORMATION: (store) => store.content.support_information,
            ANNOUNCEMENT: (store) => store.content.announcement,
            LANDING_PAGE: (store) => store.content.landing_page,
            DATA_LOADERS: (store) => store.content.data_loaders,
            CUSTOM_FIELD: (store) => store.content.custom_field,
            // Auth Getters
            LOGGED_IN: (store) => store.auth.logged_in,
            USER_FETCHED: (store) => store.auth.user_fetched,
            USER_DATA: (store) => store.auth.user_data,
            PLATFORM_DATA: (store) => store.auth.platform_data,
            //filestorage getters
            START_UPLOAD: (store) => store.fileStorage.startUploadresponce,
            COMPLETE_UPLOAD: (store) => store.fileStorage.CompleteResponse,
            SIGN_URLS: (store) => store.fileStorage.signUrls,
            // Payment Getters
            PAYMENT_OPTIONS: (store) => store.payment.payment_options,
            AGGREGATORS_CONFIG: (store) => store.payment.aggregators_config,
            // Custom Getters
            CUSTOM_VALUE: (store) => store.custom,
        };
        const dispatch = this.store.dispatch;
        this.address = createCacheProxy('address', new AddressModule(dispatch), dispatch, eventEmitter);
        this.catalog = createCacheProxy('catalog', new CatalogModule(dispatch), dispatch, eventEmitter);
        this.cart = createCacheProxy('cart', new CartModule(dispatch), dispatch, eventEmitter);
        this.brands = createCacheProxy('brands', new BrandsModule(dispatch), dispatch, eventEmitter);
        this.theme = createCacheProxy('theme', new ThemeModule(dispatch), dispatch, eventEmitter);
        this.content = createCacheProxy('content', new ContentModule(dispatch), dispatch, eventEmitter);
        this.configuration = createCacheProxy('configuration', new ConfigurationModule(dispatch), dispatch, eventEmitter);
        this.logistic = createCacheProxy('logistic', new LogisticModule(dispatch), dispatch, eventEmitter);
        this.payment = createCacheProxy('payment', new PaymentModule(dispatch), dispatch, eventEmitter);
        this.auth = createCacheProxy('auth', new AuthModule(dispatch), dispatch, eventEmitter);
        this.share = createCacheProxy('share', new ShareModule(dispatch), dispatch, eventEmitter);
        this.collection = createCacheProxy('collection', new CollectionModule(dispatch), dispatch, eventEmitter);
        this.categories = createCacheProxy('categories', new CategoriesModule(dispatch), dispatch, eventEmitter);
        this.order = createCacheProxy('order', new OrderModule(dispatch), dispatch, eventEmitter);
        this.custom = createCacheProxy('custom', new CustomModule(dispatch), dispatch, eventEmitter);
        this.lead = createCacheProxy('lead', new LeadModule(dispatch), dispatch, eventEmitter);
        this.fileStorage = createCacheProxy('fileStorage', new fileStorageModule(dispatch), dispatch, eventEmitter);
        this.observeStore = this.observeStore.bind(this);
    }
    observeStore(selector, onChange) {
        let previousState;
        const handleChange = () => {
            var _a, _b;
            let currentState = selector((_b = (_a = this === null || this === void 0 ? void 0 : this.store) === null || _a === void 0 ? void 0 : _a.getState) === null || _b === void 0 ? void 0 : _b.call(_a));
            if (currentState !== previousState) {
                previousState = currentState;
                onChange(currentState);
            }
        };
        let unsubscribe = this.store.subscribe(handleChange);
        handleChange();
        return unsubscribe;
    }
}
export default ApplicationStore;
//# sourceMappingURL=index.js.map