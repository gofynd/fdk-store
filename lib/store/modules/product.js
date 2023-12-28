var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchBulkPrice, fetchFollowedListing, fetchFollowerCountById, fetchFollowIds, fetchFrequentlyComparedProducts, fetchProductDetails, fetchProductMeta, fetchProductPriceBySlug, fetchProductSellerBySlug, fetchProductVariants, fetchSimilarCompareProduct, followById, getProductBundlesBySlug, unfollowById } from "../slices/product";
export class ProductModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchProductBySlug(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // params.image_size = params.image_size || 'med';
            const data = yield this.dispatch(fetchProductDetails(params));
            if (((_a = data.payload) === null || _a === void 0 ? void 0 : _a.has_variant) && params.slug) {
                return this.dispatch(fetchProductVariants(params));
            }
            else {
                return this.dispatch(fetchProductVariants(null));
            }
        });
    }
    fetchProductMeta(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchProductMeta(params));
        });
    }
    followById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(followById(params));
        });
    }
    fetchFollowerCountById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchFollowerCountById(params));
        });
    }
    getProductBundlesBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getProductBundlesBySlug(params));
        });
    }
    fetchFollowedListing(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchFollowedListing(params));
        });
    }
    fetchFollowIds(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchFollowIds(params));
        });
    }
    unfollowById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(unfollowById(params));
        });
    }
    fetchBulkPrice(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchBulkPrice(params));
        });
    }
    fetchSimilarCompareProduct(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchSimilarCompareProduct(params));
        });
    }
    fetchFrequentlyComparedProducts(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchFrequentlyComparedProducts(params));
        });
    }
    fetchProductPriceBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchProductPriceBySlug(params));
        });
    }
    fetchProductSellerBySlug(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchProductSellerBySlug(params));
        });
    }
}
//# sourceMappingURL=product.js.map