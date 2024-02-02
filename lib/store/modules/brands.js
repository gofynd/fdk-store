import { getBrands } from "../slices/brands";
export class BrandsModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getBrands(params) {
        params.pageSize = params.pageSize || 12;
        return this.dispatch(getBrands(params));
    }
}
//# sourceMappingURL=brands.js.map