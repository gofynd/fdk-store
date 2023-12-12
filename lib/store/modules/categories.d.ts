import { CategoryListingResponse } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { GetCategoriesParam } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class CategoriesModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getCategories(params: GetCategoriesParam): AsyncThunkPromise<CategoryListingResponse>;
}
