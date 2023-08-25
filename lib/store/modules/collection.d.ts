import { GetCollectionListingResponse, ProductListingResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { GetCollectionDetailBySlugParam, GetCollectionsParam } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class CollectionModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchCollection(params: GetCollectionsParam): AsyncThunkPromise<GetCollectionListingResponse>;
    fetchCollectionItem(params: GetCollectionDetailBySlugParam): AsyncThunkPromise<ProductListingResponse>;
}
