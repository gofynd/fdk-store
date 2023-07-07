var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchBulkPrice, fetchFrequentlyComparedProducts, fetchProductDetails, fetchProductMeta, fetchProductPriceBySlug, fetchProductSellerBySlug, fetchProductVariants, fetchSimilarCompareProduct } from "../slices/product-description";
class ProductDescriptionModule {
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
    fetchProductMeta(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchProductMeta(params));
        });
    }
    fetchBulkPrice(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchBulkPrice(params));
        });
    }
    fetchSimilarCompareProduct(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchSimilarCompareProduct(params));
        });
    }
    fetchFrequentlyComparedProducts(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchFrequentlyComparedProducts(params));
        });
    }
    fetchProductPriceBySlug(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchProductPriceBySlug(params));
        });
    }
    fetchProductSellerBySlug(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchProductSellerBySlug(params));
        });
    }
}
export default ProductDescriptionModule;
//# sourceMappingURL=product-description.js.map