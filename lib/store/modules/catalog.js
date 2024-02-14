var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getFollowedListing, getFollowerCountById, getFollowIds, getComparedFrequentlyProductBySlug, getProductDetailBySlug, getProductSizesBySlug, getProductPriceBySlug, getProductSellersBySlug, getProductVariantsBySlug, getSimilarComparisonProductBySlug, followById, getProductBundlesBySlug, unfollowById, fetchProducts, getCategoryDetailBySlug, getSearchResults, getProducts, getCollectionDetailBySlug, getBrandDetailBySlug, fetchProductListingMeta } from "../slices/catalog";
import { resetProductListingMeta } from "../slices/catalog";
export class CatalogModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchProductBySlug(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // params.image_size = params.image_size || 'med';
            const data = yield this.dispatch(getProductDetailBySlug(params));
            if (((_a = data.payload) === null || _a === void 0 ? void 0 : _a.has_variant) && params.slug) {
                return this.dispatch(getProductVariantsBySlug(params));
            }
            else {
                return this.dispatch(getProductVariantsBySlug(null));
            }
        });
    }
    getProductSizesBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getProductSizesBySlug(params));
        });
    }
    getProductDetailBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getProductDetailBySlug(params));
        });
    }
    followById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(followById(params));
        });
    }
    getFollowerCountById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getFollowerCountById(params));
        });
    }
    getProductBundlesBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getProductBundlesBySlug(params));
        });
    }
    getFollowedListing(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getFollowedListing(params));
        });
    }
    getFollowIds(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getFollowIds(params));
        });
    }
    unfollowById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(unfollowById(params));
        });
    }
    getSimilarComparisonProductBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getSimilarComparisonProductBySlug(params));
        });
    }
    getComparedFrequentlyProductBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getComparedFrequentlyProductBySlug(params));
        });
    }
    getProductPriceBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getProductPriceBySlug(params));
        });
    }
    getProductSellersBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getProductSellersBySlug(params));
        });
    }
    fetchProductListing(options) {
        return this.dispatch(fetchProducts(options));
    }
    fetchProductListingMeta(options) {
        return this.dispatch(fetchProductListingMeta(options));
    }
    fetchCategoryListing(options) {
        return this.dispatch(fetchProducts(options));
    }
    getCategoryDetailBySlug(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getCategoryDetailBySlug(options));
        });
    }
    fetchBrandListing(options) {
        return this.dispatch(fetchProducts(options));
    }
    getBrandDetailBySlug(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getBrandDetailBySlug(options));
        });
    }
    fetchCollectionListing(options) {
        return this.dispatch(fetchProducts(Object.assign({}, options)));
    }
    getCollectionDetailBySlug(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getCollectionDetailBySlug(options));
        });
    }
    resetProductListingMeta() {
        return this.dispatch(resetProductListingMeta());
    }
    getSearchResults(params) {
        return this.dispatch(getSearchResults(params));
    }
    getProducts(params) {
        return this.dispatch(getProducts(params));
    }
}
//# sourceMappingURL=catalog.js.map