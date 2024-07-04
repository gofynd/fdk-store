import { getCategories } from "../slices/categories";
export class CategoriesModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getCategories(params) {
        return this.dispatch(getCategories(params));
    }
}
//# sourceMappingURL=categories.js.map