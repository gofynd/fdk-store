import { CategoryListingResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { GetCategoriesParam } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class CategoriesModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchCategories(params: GetCategoriesParam): AsyncThunkPromise<CategoryListingResponse>;
}
