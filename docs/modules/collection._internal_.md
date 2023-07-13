[fdk-store](../README.md) / [Exports](../modules.md) / [collection](collection.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [CollectionListingFilter](collection._internal_.md#collectionlistingfilter)
- [CollectionListingFilterTag](collection._internal_.md#collectionlistingfiltertag)
- [CollectionListingFilterType](collection._internal_.md#collectionlistingfiltertype)
- [CollectionQuery](collection._internal_.md#collectionquery)
- [GetCollectionDetailNest](collection._internal_.md#getcollectiondetailnest)
- [GetCollectionListingResponse](collection._internal_.md#getcollectionlistingresponse)
- [GetCollectionsParam](collection._internal_.md#getcollectionsparam)

### Functions

- [CollectionListingFilter](collection._internal_.md#collectionlistingfilter-1)
- [CollectionListingFilterTag](collection._internal_.md#collectionlistingfiltertag-1)
- [CollectionListingFilterType](collection._internal_.md#collectionlistingfiltertype-1)
- [CollectionQuery](collection._internal_.md#collectionquery-1)
- [GetCollectionDetailNest](collection._internal_.md#getcollectiondetailnest-1)
- [GetCollectionListingResponse](collection._internal_.md#getcollectionlistingresponse-1)

## Type Aliases

### CollectionListingFilter

Ƭ **CollectionListingFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tags?` | [`CollectionListingFilterTag`](collection._internal_.md#collectionlistingfiltertag)[] |
| `type?` | [`CollectionListingFilterType`](collection._internal_.md#collectionlistingfiltertype)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1127

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1128

___

### CollectionListingFilterTag

Ƭ **CollectionListingFilterTag**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display?` | `string` |
| `is_selected?` | `boolean` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1133

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1134

___

### CollectionListingFilterType

Ƭ **CollectionListingFilterType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display?` | `string` |
| `is_selected?` | `boolean` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1140

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1141

___

### CollectionQuery

Ƭ **CollectionQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |
| `op` | `string` |
| `value` | `any`[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1147

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1148

___

### GetCollectionDetailNest

Ƭ **GetCollectionDetailNest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `_schedule?` | `any` |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `allow_facets?` | `boolean` |
| `allow_sort?` | `boolean` |
| `app_id?` | `string` |
| `badge?` | `any` |
| `banners?` | [`ImageUrls`](brands._internal_.md#imageurls) |
| `cron?` | `any` |
| `description?` | `string` |
| `is_active?` | `boolean` |
| `logo?` | [`Media`](brands._internal_.md#media) |
| `meta?` | `any` |
| `name?` | `string` |
| `priority?` | `number` |
| `query?` | [`CollectionQuery`](collection._internal_.md#collectionquery)[] |
| `slug?` | `string` |
| `sort_on?` | `string` |
| `tag?` | `string`[] |
| `type?` | `string` |
| `uid?` | `string` |
| `visible_facets_keys?` | `string`[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1289

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1290

___

### GetCollectionListingResponse

Ƭ **GetCollectionListingResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filters?` | [`CollectionListingFilter`](collection._internal_.md#collectionlistingfilter) |
| `items?` | [`GetCollectionDetailNest`](collection._internal_.md#getcollectiondetailnest)[] |
| `page` | [`Page`](brands._internal_.md#page) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1315

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1316

___

### GetCollectionsParam

Ƭ **GetCollectionsParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageNo?` | `number` | - The page number to navigate through the given set of results. |
| `pageSize?` | `number` | - The number of items to retrieve in each page. |
| `q?` | `string` | - Name of the collection to filter collection |
| `tag?` | `string`[] | - List of tags to filter collections |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:431

## Functions

### CollectionListingFilter

▸ **CollectionListingFilter**(): [`CollectionListingFilter`](collection._internal_.md#collectionlistingfilter)

#### Returns

[`CollectionListingFilter`](collection._internal_.md#collectionlistingfilter)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1127

___

### CollectionListingFilterTag

▸ **CollectionListingFilterTag**(): [`CollectionListingFilterTag`](collection._internal_.md#collectionlistingfiltertag)

#### Returns

[`CollectionListingFilterTag`](collection._internal_.md#collectionlistingfiltertag)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1133

___

### CollectionListingFilterType

▸ **CollectionListingFilterType**(): [`CollectionListingFilterType`](collection._internal_.md#collectionlistingfiltertype)

#### Returns

[`CollectionListingFilterType`](collection._internal_.md#collectionlistingfiltertype)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1140

___

### CollectionQuery

▸ **CollectionQuery**(): [`CollectionQuery`](collection._internal_.md#collectionquery)

#### Returns

[`CollectionQuery`](collection._internal_.md#collectionquery)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1147

___

### GetCollectionDetailNest

▸ **GetCollectionDetailNest**(): [`GetCollectionDetailNest`](collection._internal_.md#getcollectiondetailnest)

#### Returns

[`GetCollectionDetailNest`](collection._internal_.md#getcollectiondetailnest)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1289

___

### GetCollectionListingResponse

▸ **GetCollectionListingResponse**(): [`GetCollectionListingResponse`](collection._internal_.md#getcollectionlistingresponse)

#### Returns

[`GetCollectionListingResponse`](collection._internal_.md#getcollectionlistingresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1315
