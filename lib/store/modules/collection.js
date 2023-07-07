import { fetchCollection } from "../slices/collection";
class collectionModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchCollection(params = {}) {
        params.pageSize = params.pageSize || 12;
        return this.dispatch(fetchCollection(params));
    }
}
export default collectionModule;
//# sourceMappingURL=collection.js.map