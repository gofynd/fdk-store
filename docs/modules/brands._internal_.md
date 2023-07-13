[fdk-store](../README.md) / [Exports](../modules.md) / [brands](brands.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [BrandItem](brands._internal_.md#branditem)
- [BrandListingResponse](brands._internal_.md#brandlistingresponse)
- [GetBrandsParam](brands._internal_.md#getbrandsparam)
- [ImageUrls](brands._internal_.md#imageurls)
- [Media](brands._internal_.md#media)
- [Meta](brands._internal_.md#meta)
- [Page](brands._internal_.md#page)
- [ProductListingAction](brands._internal_.md#productlistingaction)
- [ProductListingActionPage](brands._internal_.md#productlistingactionpage)

### Functions

- [BrandItem](brands._internal_.md#branditem-1)
- [BrandListingResponse](brands._internal_.md#brandlistingresponse-1)
- [ImageUrls](brands._internal_.md#imageurls-1)
- [Media](brands._internal_.md#media-1)
- [Meta](brands._internal_.md#meta-1)
- [Page](brands._internal_.md#page-1)
- [ProductListingAction](brands._internal_.md#productlistingaction-1)
- [ProductListingActionPage](brands._internal_.md#productlistingactionpage-1)

## Type Aliases

### BrandItem

Ƭ **BrandItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `banners?` | [`ImageUrls`](brands._internal_.md#imageurls) |
| `departments?` | `string`[] |
| `description?` | `string` |
| `discount?` | `string` |
| `logo?` | [`Media`](brands._internal_.md#media) |
| `name?` | `string` |
| `slug?` | `string` |
| `uid?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1042

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1043

___

### BrandListingResponse

Ƭ **BrandListingResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items?` | [`BrandItem`](brands._internal_.md#branditem)[] |
| `page` | [`Page`](brands._internal_.md#page) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1055

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1056

___

### GetBrandsParam

Ƭ **GetBrandsParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `department?` | `string` | - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/ |
| `pageNo?` | `number` | - The page number to navigate through the given set of results. |
| `pageSize?` | `number` | - The number of items to retrieve in each page. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:340

___

### ImageUrls

Ƭ **ImageUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `landscape?` | [`Media`](brands._internal_.md#media) |
| `portrait?` | [`Media`](brands._internal_.md#media) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1335

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1336

___

### Media

Ƭ **Media**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alt?` | `string` |
| `meta?` | [`Meta`](brands._internal_.md#meta) |
| `type?` | `string` |
| `url?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1353

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1354

___

### Meta

Ƭ **Meta**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `source?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1361

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1362

___

### Page

Ƭ **Page**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `current?` | `number` |
| `has_next?` | `boolean` |
| `has_previous?` | `boolean` |
| `item_total?` | `number` |
| `next_id?` | `string` |
| `size?` | `number` |
| `type` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1379

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1380

___

### ProductListingAction

Ƭ **ProductListingAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `page?` | [`ProductListingActionPage`](brands._internal_.md#productlistingactionpage) |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1753

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1754

___

### ProductListingActionPage

Ƭ **ProductListingActionPage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params?` | `any` |
| `query?` | `any` |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1759

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1760

## Functions

### BrandItem

▸ **BrandItem**(): [`BrandItem`](brands._internal_.md#branditem)

#### Returns

[`BrandItem`](brands._internal_.md#branditem)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1042

___

### BrandListingResponse

▸ **BrandListingResponse**(): [`BrandListingResponse`](brands._internal_.md#brandlistingresponse)

#### Returns

[`BrandListingResponse`](brands._internal_.md#brandlistingresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1055

___

### ImageUrls

▸ **ImageUrls**(): [`ImageUrls`](brands._internal_.md#imageurls)

#### Returns

[`ImageUrls`](brands._internal_.md#imageurls)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1335

___

### Media

▸ **Media**(): [`Media`](brands._internal_.md#media)

#### Returns

[`Media`](brands._internal_.md#media)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1353

___

### Meta

▸ **Meta**(): [`Meta`](brands._internal_.md#meta)

#### Returns

[`Meta`](brands._internal_.md#meta)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1361

___

### Page

▸ **Page**(): [`Page`](brands._internal_.md#page)

#### Returns

[`Page`](brands._internal_.md#page)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1379

___

### ProductListingAction

▸ **ProductListingAction**(): [`ProductListingAction`](brands._internal_.md#productlistingaction)

#### Returns

[`ProductListingAction`](brands._internal_.md#productlistingaction)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1753

___

### ProductListingActionPage

▸ **ProductListingActionPage**(): [`ProductListingActionPage`](brands._internal_.md#productlistingactionpage)

#### Returns

[`ProductListingActionPage`](brands._internal_.md#productlistingactionpage)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1759
