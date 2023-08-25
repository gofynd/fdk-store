var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchBrandListingMeta, fetchCategoryListingMeta, fetchCollectionListingMeta, fetchProductListingMeta, fetchProducts, fetchProductSuggestions, fetchSuggestions, resetProductListingMeta } from "../slices/products";
export class ProductsModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    /**
     * Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
     */
    fetchProductListing(options) {
        return this.dispatch(fetchProducts(options));
    }
    fetchProductListingMeta(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchProductListingMeta(options));
        });
    }
    fetchCategoryListing(options) {
        return this.dispatch(fetchProducts(options));
    }
    fetchCategoryListingMeta(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchCategoryListingMeta(options));
        });
    }
    fetchBrandListing(options) {
        return this.dispatch(fetchProducts(options));
    }
    fetchBrandListingMeta(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchBrandListingMeta(options));
        });
    }
    fetchCollectionListing(options) {
        return this.dispatch(fetchProducts(Object.assign(Object.assign({}, options), { isCollection: true })));
    }
    fetchCollectionListingMeta(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(fetchCollectionListingMeta(options));
        });
    }
    resetProductListingMeta() {
        return this.dispatch(resetProductListingMeta());
    }
    fetchSuggestions(params) {
        return this.dispatch(fetchSuggestions(params));
    }
    fetchProductSuggestions(params) {
        return this.dispatch(fetchProductSuggestions(params));
    }
}
//# sourceMappingURL=products.js.map