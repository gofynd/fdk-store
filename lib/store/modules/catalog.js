var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getFollowedListing, getFollowerCountById, getFollowIds, getComparedFrequentlyProductBySlug, getProductDetailBySlug, getProductSizesBySlug, getProductPriceBySlug, getProductSellersBySlug, getProductVariantsBySlug, getSimilarComparisonProductBySlug, followById, getProductBundlesBySlug, unfollowById, fetchProducts, getCategoryDetailBySlug, getSearchResults, getProducts, getCollectionDetailBySlug, getBrandDetailBySlug, getProductComparisonBySlugs, getStores, getLocationDetailsById, getInStockLocations } from "../slices/catalog";
import { resetProductListingMeta } from "../slices/catalog";
export class CatalogModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchProductBySlug(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // params.image_size = params.image_size || 'med';
            let data = yield Promise.all([this.dispatch(getProductDetailBySlug(params)), this.dispatch(getProductSizesBySlug(params))]);
            if (((_a = data === null || data === void 0 ? void 0 : data[0].payload) === null || _a === void 0 ? void 0 : _a.has_variant) && params.slug) {
                yield this.dispatch(getProductVariantsBySlug(params));
            }
            else {
                yield this.dispatch(getProductVariantsBySlug(null));
            }
            return data[0];
        });
    }
    getProductSizesBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getProductSizesBySlug(params));
        });
    }
    getProductVariantsBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getProductVariantsBySlug(params));
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
    getStores(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getStores(params));
        });
    }
    getLocationDetailsById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getLocationDetailsById(params));
        });
    }
    getInStockLocations(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getInStockLocations(params));
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
    getProductComparisonBySlugs(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getProductComparisonBySlugs(params));
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