import { fetchCategories } from "../slices/categories";
class categoriesModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchCategories(params = {}) {
        params.image_size = params.image_size || 'large';
        return this.dispatch(fetchCategories(params));
    }
}
export default categoriesModule;
//# sourceMappingURL=categories.js.map