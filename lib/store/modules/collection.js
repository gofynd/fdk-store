import { fetchCollection, fetchCollectionItem } from "../slices/collection";
export class CollectionModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchCollection(params) {
        params.pageSize = params.pageSize || 12;
        return this.dispatch(fetchCollection(params));
    }
    fetchCollectionItem(params) {
        return this.dispatch(fetchCollectionItem(params));
    }
}
//# sourceMappingURL=collection.js.map