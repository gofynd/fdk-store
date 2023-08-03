import { GetCollectionListingResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { GetCollectionsParam } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
declare class collectionModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchCollection(params: GetCollectionsParam): AsyncThunkPromise<GetCollectionListingResponse>;
}
export default collectionModule;
