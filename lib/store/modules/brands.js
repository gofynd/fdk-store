import { fetchBrands } from "../slices/brands";
class brandsModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchBrands(params = {}) {
        params.pageSize = params.pageSize || 12;
        params.image_size = params.image_size || 'large';
        return this.dispatch(fetchBrands(params));
    }
}
export default brandsModule;
//# sourceMappingURL=brands.js.map