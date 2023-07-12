[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Catalog

# Class: Catalog

[<internal>](../modules/internal_.md).Catalog

## Table of contents

### Constructors

- [constructor](internal_.Catalog.md#constructor)

### Properties

- [\_conf](internal_.Catalog.md#_conf)
- [\_relativeUrls](internal_.Catalog.md#_relativeurls)
- [\_urls](internal_.Catalog.md#_urls)

### Methods

- [followById](internal_.Catalog.md#followbyid)
- [getBrandDetailBySlug](internal_.Catalog.md#getbranddetailbyslug)
- [getBrands](internal_.Catalog.md#getbrands)
- [getBrandsPaginator](internal_.Catalog.md#getbrandspaginator)
- [getCategories](internal_.Catalog.md#getcategories)
- [getCategoryDetailBySlug](internal_.Catalog.md#getcategorydetailbyslug)
- [getCollectionDetailBySlug](internal_.Catalog.md#getcollectiondetailbyslug)
- [getCollectionItemsBySlug](internal_.Catalog.md#getcollectionitemsbyslug)
- [getCollectionItemsBySlugPaginator](internal_.Catalog.md#getcollectionitemsbyslugpaginator)
- [getCollections](internal_.Catalog.md#getcollections)
- [getCollectionsPaginator](internal_.Catalog.md#getcollectionspaginator)
- [getComparedFrequentlyProductBySlug](internal_.Catalog.md#getcomparedfrequentlyproductbyslug)
- [getDepartments](internal_.Catalog.md#getdepartments)
- [getFollowIds](internal_.Catalog.md#getfollowids)
- [getFollowedListing](internal_.Catalog.md#getfollowedlisting)
- [getFollowedListingPaginator](internal_.Catalog.md#getfollowedlistingpaginator)
- [getFollowerCountById](internal_.Catalog.md#getfollowercountbyid)
- [getHomeProducts](internal_.Catalog.md#gethomeproducts)
- [getHomeProductsPaginator](internal_.Catalog.md#gethomeproductspaginator)
- [getInStockLocations](internal_.Catalog.md#getinstocklocations)
- [getInStockLocationsPaginator](internal_.Catalog.md#getinstocklocationspaginator)
- [getLocationDetailsById](internal_.Catalog.md#getlocationdetailsbyid)
- [getProductBundlesBySlug](internal_.Catalog.md#getproductbundlesbyslug)
- [getProductComparisonBySlugs](internal_.Catalog.md#getproductcomparisonbyslugs)
- [getProductDetailBySlug](internal_.Catalog.md#getproductdetailbyslug)
- [getProductPriceBySlug](internal_.Catalog.md#getproductpricebyslug)
- [getProductSellersBySlug](internal_.Catalog.md#getproductsellersbyslug)
- [getProductSellersBySlugPaginator](internal_.Catalog.md#getproductsellersbyslugpaginator)
- [getProductSizesBySlug](internal_.Catalog.md#getproductsizesbyslug)
- [getProductStockByIds](internal_.Catalog.md#getproductstockbyids)
- [getProductStockForTimeByIds](internal_.Catalog.md#getproductstockfortimebyids)
- [getProductStockForTimeByIdsPaginator](internal_.Catalog.md#getproductstockfortimebyidspaginator)
- [getProductVariantsBySlug](internal_.Catalog.md#getproductvariantsbyslug)
- [getProducts](internal_.Catalog.md#getproducts)
- [getProductsPaginator](internal_.Catalog.md#getproductspaginator)
- [getSearchResults](internal_.Catalog.md#getsearchresults)
- [getSimilarComparisonProductBySlug](internal_.Catalog.md#getsimilarcomparisonproductbyslug)
- [getStores](internal_.Catalog.md#getstores)
- [getStoresPaginator](internal_.Catalog.md#getstorespaginator)
- [unfollowById](internal_.Catalog.md#unfollowbyid)
- [updateUrls](internal_.Catalog.md#updateurls)

## Constructors

### constructor

• **new Catalog**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `followById` | `string` |
| `getBrandDetailBySlug` | `string` |
| `getBrands` | `string` |
| `getCategories` | `string` |
| `getCategoryDetailBySlug` | `string` |
| `getCollectionDetailBySlug` | `string` |
| `getCollectionItemsBySlug` | `string` |
| `getCollections` | `string` |
| `getComparedFrequentlyProductBySlug` | `string` |
| `getDepartments` | `string` |
| `getFollowIds` | `string` |
| `getFollowedListing` | `string` |
| `getFollowerCountById` | `string` |
| `getHomeProducts` | `string` |
| `getInStockLocations` | `string` |
| `getLocationDetailsById` | `string` |
| `getProductBundlesBySlug` | `string` |
| `getProductComparisonBySlugs` | `string` |
| `getProductDetailBySlug` | `string` |
| `getProductPriceBySlug` | `string` |
| `getProductSellersBySlug` | `string` |
| `getProductSizesBySlug` | `string` |
| `getProductStockByIds` | `string` |
| `getProductStockForTimeByIds` | `string` |
| `getProductVariantsBySlug` | `string` |
| `getProducts` | `string` |
| `getSearchResults` | `string` |
| `getSimilarComparisonProductBySlug` | `string` |
| `getStores` | `string` |
| `unfollowById` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:37

## Methods

### followById

▸ **followById**(`arg?`): `Promise`<[`FollowPostResponse`](../modules/internal_.md#followpostresponse)\>

**`Name`**

followById
@summary: Follow an entity (product/brand/collection)
@description: Follow a particular entity such as product, brand, collection specified by its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`FollowByIdParam`](../modules/internal_.md#followbyidparam) | Arg object. |

#### Returns

`Promise`<[`FollowPostResponse`](../modules/internal_.md#followpostresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:46

___

### getBrandDetailBySlug

▸ **getBrandDetailBySlug**(`arg?`): `Promise`<[`BrandDetailResponse`](../modules/internal_.md#branddetailresponse)\>

**`Name`**

getBrandDetailBySlug
@summary: Get metadata of a brand
@description: Fetch metadata of a brand such as name, information, logo, banner, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetBrandDetailBySlugParam`](../modules/internal_.md#getbranddetailbyslugparam) | Arg object. |

#### Returns

`Promise`<[`BrandDetailResponse`](../modules/internal_.md#branddetailresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:54

___

### getBrands

▸ **getBrands**(`arg?`): `Promise`<[`BrandListingResponse`](../modules/internal_.md#brandlistingresponse)\>

**`Name`**

getBrands
@summary: Get all the brands
@description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetBrandsParam`](../modules/internal_.md#getbrandsparam) | Arg object. |

#### Returns

`Promise`<[`BrandListingResponse`](../modules/internal_.md#brandlistingresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:62

___

### getBrandsPaginator

▸ **getBrandsPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`BrandListingResponse`](../modules/internal_.md#brandlistingresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.department?` | `string` | The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/ |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`BrandListingResponse`](../modules/internal_.md#brandlistingresponse)\>

@summary: Get all the brands
@description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:74

___

### getCategories

▸ **getCategories**(`arg?`): `Promise`<[`CategoryListingResponse`](../modules/internal_.md#categorylistingresponse)\>

**`Name`**

getCategories
@summary: List all the categories
@description: Use this API to list all the categories. You can also filter the categories by department.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCategoriesParam`](../modules/internal_.md#getcategoriesparam) | Arg object. |

#### Returns

`Promise`<[`CategoryListingResponse`](../modules/internal_.md#categorylistingresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:86

___

### getCategoryDetailBySlug

▸ **getCategoryDetailBySlug**(`arg?`): `Promise`<[`CategoryMetaResponse`](../modules/internal_.md#categorymetaresponse)\>

**`Name`**

getCategoryDetailBySlug
@summary: Get metadata of a category
@description: Fetch metadata of a category such as name, information, logo, banner, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCategoryDetailBySlugParam`](../modules/internal_.md#getcategorydetailbyslugparam) | Arg object. |

#### Returns

`Promise`<[`CategoryMetaResponse`](../modules/internal_.md#categorymetaresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:94

___

### getCollectionDetailBySlug

▸ **getCollectionDetailBySlug**(`arg?`): `Promise`<[`CollectionDetailResponse`](../modules/internal_.md#collectiondetailresponse)\>

**`Name`**

getCollectionDetailBySlug
@summary: Get a particular collection
@description: Get the details of a collection by its `slug`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCollectionDetailBySlugParam`](../modules/internal_.md#getcollectiondetailbyslugparam) | Arg object. |

#### Returns

`Promise`<[`CollectionDetailResponse`](../modules/internal_.md#collectiondetailresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:105

___

### getCollectionItemsBySlug

▸ **getCollectionItemsBySlug**(`arg?`): `Promise`<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

**`Name`**

getCollectionItemsBySlug
@summary: Get the items in a collection
@description: Get items in a collection specified by its `slug`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCollectionItemsBySlugParam`](../modules/internal_.md#getcollectionitemsbyslugparam) | Arg object. |

#### Returns

`Promise`<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:115

___

### getCollectionItemsBySlugPaginator

▸ **getCollectionItemsBySlugPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.f?` | `string` | The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (\|\|) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition. |
| `arg.filters?` | `boolean` | This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |
| `arg.q?` | `string` | The search query for entering partial or full name of product, brand, category, or collection. |
| `arg.slug` | `string` | A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/. |
| `arg.sortOn?` | `string` | The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

@summary: Get the items in a collection
@description: Get items in a collection specified by its `slug`.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:137

___

### getCollections

▸ **getCollections**(`arg?`): `Promise`<[`GetCollectionListingResponse`](../modules/internal_.md#getcollectionlistingresponse)\>

**`Name`**

getCollections
@summary: List all the collections
@description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCollectionsParam`](../modules/internal_.md#getcollectionsparam) | Arg object. |

#### Returns

`Promise`<[`GetCollectionListingResponse`](../modules/internal_.md#getcollectionlistingresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:154

___

### getCollectionsPaginator

▸ **getCollectionsPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`GetCollectionListingResponse`](../modules/internal_.md#getcollectionlistingresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |
| `arg.q?` | `string` | Name of the collection to filter collection |
| `arg.tag?` | `string`[] | List of tags to filter collections |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`GetCollectionListingResponse`](../modules/internal_.md#getcollectionlistingresponse)\>

@summary: List all the collections
@description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:164

___

### getComparedFrequentlyProductBySlug

▸ **getComparedFrequentlyProductBySlug**(`arg?`): `Promise`<[`ProductFrequentlyComparedSimilarResponse`](../modules/internal_.md#productfrequentlycomparedsimilarresponse)\>

**`Name`**

getComparedFrequentlyProductBySlug
@summary: Get comparison between frequently compared products with the given product
@description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetComparedFrequentlyProductBySlugParam`](../modules/internal_.md#getcomparedfrequentlyproductbyslugparam) | Arg object. |

#### Returns

`Promise`<[`ProductFrequentlyComparedSimilarResponse`](../modules/internal_.md#productfrequentlycomparedsimilarresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:180

___

### getDepartments

▸ **getDepartments**(`arg?`): `Promise`<[`DepartmentResponse`](../modules/internal_.md#departmentresponse)\>

**`Name`**

getDepartments
@summary: List all the departments
@description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`DepartmentResponse`](../modules/internal_.md#departmentresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:188

___

### getFollowIds

▸ **getFollowIds**(`arg?`): `Promise`<[`FollowIdsResponse`](../modules/internal_.md#followidsresponse)\>

**`Name`**

getFollowIds
@summary: Get the IDs of followed products, brands and collections.
@description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetFollowIdsParam`](../modules/internal_.md#getfollowidsparam) | Arg object. |

#### Returns

`Promise`<[`FollowIdsResponse`](../modules/internal_.md#followidsresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:196

___

### getFollowedListing

▸ **getFollowedListing**(`arg?`): `Promise`<[`GetFollowListingResponse`](../modules/internal_.md#getfollowlistingresponse)\>

**`Name`**

getFollowedListing
@summary: Get a list of followed Products, Brands, Collections
@description: Users can follow a product they like. This API retrieves the products the user have followed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetFollowedListingParam`](../modules/internal_.md#getfollowedlistingparam) | Arg object. |

#### Returns

`Promise`<[`GetFollowListingResponse`](../modules/internal_.md#getfollowlistingresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:205

___

### getFollowedListingPaginator

▸ **getFollowedListingPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`GetFollowListingResponse`](../modules/internal_.md#getfollowlistingresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.collectionType` | `string` | Type of collection followed, i.e. products, brands, or collections. |
| `arg.pageSize?` | `number` | Page ID to retrieve next set of results. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`GetFollowListingResponse`](../modules/internal_.md#getfollowlistingresponse)\>

@summary: Get a list of followed Products, Brands, Collections
@description: Users can follow a product they like. This API retrieves the products the user have followed.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:215

___

### getFollowerCountById

▸ **getFollowerCountById**(`arg?`): `Promise`<[`FollowerCountResponse`](../modules/internal_.md#followercountresponse)\>

**`Name`**

getFollowerCountById
@summary: Get Follow Count
@description: Get the total count of followers for a given collection type and collection ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetFollowerCountByIdParam`](../modules/internal_.md#getfollowercountbyidparam) | Arg object. |

#### Returns

`Promise`<[`FollowerCountResponse`](../modules/internal_.md#followercountresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:227

___

### getHomeProducts

▸ **getHomeProducts**(`arg?`): `Promise`<[`HomeListingResponse`](../modules/internal_.md#homelistingresponse)\>

**`Name`**

getHomeProducts
@summary: List the products
@description: List all the products associated with a brand, collection or category in a random order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetHomeProductsParam`](../modules/internal_.md#gethomeproductsparam) | Arg object. |

#### Returns

`Promise`<[`HomeListingResponse`](../modules/internal_.md#homelistingresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:235

___

### getHomeProductsPaginator

▸ **getHomeProductsPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`HomeListingResponse`](../modules/internal_.md#homelistingresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |
| `arg.sortOn?` | `string` | The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`HomeListingResponse`](../modules/internal_.md#homelistingresponse)\>

@summary: List the products
@description: List all the products associated with a brand, collection or category in a random order.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:246

___

### getInStockLocations

▸ **getInStockLocations**(`arg?`): `Promise`<[`ApplicationStoreListing`](../modules/internal_.md#applicationstorelisting)\>

**`Name`**

getInStockLocations
@summary: Get store meta information.
@description: Use this API to get a list of stores in a specific application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetInStockLocationsParam`](../modules/internal_.md#getinstocklocationsparam) | Arg object. |

#### Returns

`Promise`<[`ApplicationStoreListing`](../modules/internal_.md#applicationstorelisting)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:258

___

### getInStockLocationsPaginator

▸ **getInStockLocationsPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`ApplicationStoreListing`](../modules/internal_.md#applicationstorelisting)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.city?` | `string` | Search stores by the city in which they are situated. |
| `arg.latitude?` | `number` | Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788 |
| `arg.longitude?` | `number` | Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114 |
| `arg.pageSize?` | `number` | Number of items to retrieve in each page. |
| `arg.q?` | `string` | Search a store by its name or store_code. |
| `arg.range?` | `number` | Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`ApplicationStoreListing`](../modules/internal_.md#applicationstorelisting)\>

@summary: Get store meta information.
@description: Use this API to get a list of stores in a specific application.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:274

___

### getLocationDetailsById

▸ **getLocationDetailsById**(`arg?`): `Promise`<[`StoreDetails`](../modules/internal_.md#storedetails)\>

**`Name`**

getLocationDetailsById
@summary: Get store meta information.
@description: Use this API to get meta details for a store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetLocationDetailsByIdParam`](../modules/internal_.md#getlocationdetailsbyidparam) | Arg object. |

#### Returns

`Promise`<[`StoreDetails`](../modules/internal_.md#storedetails)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:289

___

### getProductBundlesBySlug

▸ **getProductBundlesBySlug**(`arg?`): `Promise`<[`ProductBundle`](../modules/internal_.md#productbundle)\>

**`Name`**

getProductBundlesBySlug
@summary: Get product bundles
@description: Use this API to retrieve products bundles to the one specified by its slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductBundlesBySlugParam`](../modules/internal_.md#getproductbundlesbyslugparam) | Arg object. |

#### Returns

`Promise`<[`ProductBundle`](../modules/internal_.md#productbundle)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:297

___

### getProductComparisonBySlugs

▸ **getProductComparisonBySlugs**(`arg?`): `Promise`<[`ProductsComparisonResponse`](../modules/internal_.md#productscomparisonresponse)\>

**`Name`**

getProductComparisonBySlugs
@summary: Compare products
@description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductComparisonBySlugsParam`](../modules/internal_.md#getproductcomparisonbyslugsparam) | Arg object. |

#### Returns

`Promise`<[`ProductsComparisonResponse`](../modules/internal_.md#productscomparisonresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:308

___

### getProductDetailBySlug

▸ **getProductDetailBySlug**(`arg?`): `Promise`<[`ProductDetail`](../modules/internal_.md#productdetail)\>

**`Name`**

getProductDetailBySlug
@summary: Get a product
@description: Use this API to retrieve a product by its slug value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductDetailBySlugParam`](../modules/internal_.md#getproductdetailbyslugparam) | Arg object. |

#### Returns

`Promise`<[`ProductDetail`](../modules/internal_.md#productdetail)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:316

___

### getProductPriceBySlug

▸ **getProductPriceBySlug**(`arg?`): `Promise`<[`ProductSizePriceResponseV3`](../modules/internal_.md#productsizepriceresponsev3)\>

**`Name`**

getProductPriceBySlug
@summary: Get the price of a product size at a PIN Code
@description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductPriceBySlugParam`](../modules/internal_.md#getproductpricebyslugparam) | Arg object. |

#### Returns

`Promise`<[`ProductSizePriceResponseV3`](../modules/internal_.md#productsizepriceresponsev3)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:325

___

### getProductSellersBySlug

▸ **getProductSellersBySlug**(`arg?`): `Promise`<[`ProductSizeSellersResponseV3`](../modules/internal_.md#productsizesellersresponsev3)\>

**`Name`**

getProductSellersBySlug
@summary: Get the sellers of a product size at a PIN Code
@description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductSellersBySlugParam`](../modules/internal_.md#getproductsellersbyslugparam) | Arg object. |

#### Returns

`Promise`<[`ProductSizeSellersResponseV3`](../modules/internal_.md#productsizesellersresponsev3)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:335

___

### getProductSellersBySlugPaginator

▸ **getProductSellersBySlugPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`ProductSizeSellersResponseV3`](../modules/internal_.md#productsizesellersresponsev3)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |
| `arg.pincode?` | `string` | The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059 |
| `arg.size` | `string` | A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes |
| `arg.slug` | `string` | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |
| `arg.strategy?` | `string` | Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`ProductSizeSellersResponseV3`](../modules/internal_.md#productsizesellersresponsev3)\>

@summary: Get the sellers of a product size at a PIN Code
@description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:353

___

### getProductSizesBySlug

▸ **getProductSizesBySlug**(`arg?`): `Promise`<[`ProductSizes`](../modules/internal_.md#productsizes)\>

**`Name`**

getProductSizesBySlug
@summary: Get the sizes of a product
@description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductSizesBySlugParam`](../modules/internal_.md#getproductsizesbyslugparam) | Arg object. |

#### Returns

`Promise`<[`ProductSizes`](../modules/internal_.md#productsizes)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:367

___

### getProductStockByIds

▸ **getProductStockByIds**(`arg?`): `Promise`<[`ProductStockStatusResponse`](../modules/internal_.md#productstockstatusresponse)\>

**`Name`**

getProductStockByIds
@summary: Get the stock of a product
@description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductStockByIdsParam`](../modules/internal_.md#getproductstockbyidsparam) | Arg object. |

#### Returns

`Promise`<[`ProductStockStatusResponse`](../modules/internal_.md#productstockstatusresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:376

___

### getProductStockForTimeByIds

▸ **getProductStockForTimeByIds**(`arg?`): `Promise`<[`ProductStockPolling`](../modules/internal_.md#productstockpolling)\>

**`Name`**

getProductStockForTimeByIds
@summary: Get the stock of a product
@description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductStockForTimeByIdsParam`](../modules/internal_.md#getproductstockfortimebyidsparam) | Arg object. |

#### Returns

`Promise`<[`ProductStockPolling`](../modules/internal_.md#productstockpolling)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:386

___

### getProductStockForTimeByIdsPaginator

▸ **getProductStockForTimeByIdsPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`ProductStockPolling`](../modules/internal_.md#productstockpolling)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |
| `arg.timestamp` | `string` | Timestamp in UTC format (2020-07-23T10:27:50Z) |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`ProductStockPolling`](../modules/internal_.md#productstockpolling)\>

@summary: Get the stock of a product
@description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:395

___

### getProductVariantsBySlug

▸ **getProductVariantsBySlug**(`arg?`): `Promise`<[`ProductVariantsResponse`](../modules/internal_.md#productvariantsresponse)\>

**`Name`**

getProductVariantsBySlug
@summary: Get variant of a particular product
@description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductVariantsBySlugParam`](../modules/internal_.md#getproductvariantsbyslugparam) | Arg object. |

#### Returns

`Promise`<[`ProductVariantsResponse`](../modules/internal_.md#productvariantsresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:408

___

### getProducts

▸ **getProducts**(`arg?`): `Promise`<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

**`Name`**

getProducts
@summary: Get all the products
@description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductsParam`](../modules/internal_.md#getproductsparam) | Arg object. |

#### Returns

`Promise`<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:417

___

### getProductsPaginator

▸ **getProductsPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.f?` | `string` | The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (\|\|) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition. |
| `arg.filters?` | `boolean` | This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |
| `arg.q?` | `string` | The search query for entering partial or full name of product, brand, category, or collection. |
| `arg.sortOn?` | `string` | The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

@summary: Get all the products
@description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:436

___

### getSearchResults

▸ **getSearchResults**(`arg?`): `Promise`<[`AutoCompleteResponse`](../modules/internal_.md#autocompleteresponse)\>

**`Name`**

getSearchResults
@summary: Get relevant suggestions for a search query
@description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetSearchResultsParam`](../modules/internal_.md#getsearchresultsparam) | Arg object. |

#### Returns

`Promise`<[`AutoCompleteResponse`](../modules/internal_.md#autocompleteresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:450

___

### getSimilarComparisonProductBySlug

▸ **getSimilarComparisonProductBySlug**(`arg?`): `Promise`<[`ProductCompareResponse`](../modules/internal_.md#productcompareresponse)\>

**`Name`**

getSimilarComparisonProductBySlug
@summary: Get comparison between similar products
@description: Use this API to compare a given product automatically with similar products. Only one slug is needed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetSimilarComparisonProductBySlugParam`](../modules/internal_.md#getsimilarcomparisonproductbyslugparam) | Arg object. |

#### Returns

`Promise`<[`ProductCompareResponse`](../modules/internal_.md#productcompareresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:461

___

### getStores

▸ **getStores**(`arg?`): `Promise`<[`StoreListingResponse`](../modules/internal_.md#storelistingresponse)\>

**`Name`**

getStores
@summary: Get store meta information.
@description: Use this API to get a list of stores in a specific application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetStoresParam`](../modules/internal_.md#getstoresparam) | Arg object. |

#### Returns

`Promise`<[`StoreListingResponse`](../modules/internal_.md#storelistingresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:469

___

### getStoresPaginator

▸ **getStoresPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`StoreListingResponse`](../modules/internal_.md#storelistingresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.city?` | `string` | Search stores by the city in which they are situated. |
| `arg.latitude?` | `number` | Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788 |
| `arg.longitude?` | `number` | Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114 |
| `arg.pageSize?` | `number` | Number of items to retrieve in each page. |
| `arg.q?` | `string` | Search a store by its name or store_code. |
| `arg.range?` | `number` | Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`StoreListingResponse`](../modules/internal_.md#storelistingresponse)\>

@summary: Get store meta information.
@description: Use this API to get a list of stores in a specific application.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:485

___

### unfollowById

▸ **unfollowById**(`arg?`): `Promise`<[`FollowPostResponse`](../modules/internal_.md#followpostresponse)\>

**`Name`**

unfollowById
@summary: Unfollow an entity (product/brand/collection)
@description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UnfollowByIdParam`](../modules/internal_.md#unfollowbyidparam) | Arg object. |

#### Returns

`Promise`<[`FollowPostResponse`](../modules/internal_.md#followpostresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:500

___

### updateUrls

▸ **updateUrls**(`urls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `any` |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationClient.d.ts:38
