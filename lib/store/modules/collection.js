import { getCollections, getCollectionItemsBySlug } from "../slices/collection";
export class CollectionModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getCollections(params) {
        params.pageSize = params.pageSize || 12;
        return this.dispatch(getCollections(params));
    }
    getCollectionItemsBySlug(params) {
        return this.dispatch(getCollectionItemsBySlug(params));
    }
}
//# sourceMappingURL=collection.js.map