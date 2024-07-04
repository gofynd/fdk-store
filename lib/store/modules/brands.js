import { fetchBrands } from "../slices/brands";
export class BrandsModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchBrands(params) {
        params.pageSize = params.pageSize || 12;
        return this.dispatch(fetchBrands(params));
    }
}
//# sourceMappingURL=brands.js.map