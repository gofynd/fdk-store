import { fetchCategories } from "../slices/categories";
export class CategoriesModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchCategories(params) {
        return this.dispatch(fetchCategories(params));
    }
}
//# sourceMappingURL=categories.js.map