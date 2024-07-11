import { BrandListingResponse } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { GetBrandsParam } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class BrandsModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchBrands(params: GetBrandsParam): AsyncThunkPromise<BrandListingResponse>;
}
