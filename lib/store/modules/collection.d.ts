import { GetCollectionListingResponse, ProductListingResponse } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { GetCollectionItemsBySlugParam, GetCollectionsParam } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class CollectionModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchCollection(params: GetCollectionsParam): AsyncThunkPromise<GetCollectionListingResponse>;
    fetchCollectionItem(params: GetCollectionItemsBySlugParam): AsyncThunkPromise<ProductListingResponse>;
}
