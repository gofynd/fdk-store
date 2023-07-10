[fdk-store](../README.md) / [Exports](../modules.md) / [product-description](product_description.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [CustomMetaFields](product_description._internal_.md#custommetafields)
- [Media](product_description._internal_.md#media)
- [Meta](product_description._internal_.md#meta)
- [ProductListingAction](product_description._internal_.md#productlistingaction)
- [ProductListingActionPage](product_description._internal_.md#productlistingactionpage)
- [ProductVariantItemResponse](product_description._internal_.md#productvariantitemresponse)
- [ProductVariantResponse](product_description._internal_.md#productvariantresponse)

### Functions

- [CustomMetaFields](product_description._internal_.md#custommetafields-1)
- [Media](product_description._internal_.md#media-1)
- [Meta](product_description._internal_.md#meta-1)
- [ProductListingAction](product_description._internal_.md#productlistingaction-1)
- [ProductListingActionPage](product_description._internal_.md#productlistingactionpage-1)
- [ProductVariantItemResponse](product_description._internal_.md#productvariantitemresponse-1)
- [ProductVariantResponse](product_description._internal_.md#productvariantresponse-1)

## Type Aliases

### CustomMetaFields

Ƭ **CustomMetaFields**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | - A key to store a custom field. |
| `value` | `string` | - A value to store in the custom field. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1184

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1185

___

### Media

Ƭ **Media**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alt?` | `string` |
| `meta?` | [`Meta`](product_description._internal_.md#meta) |
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

### ProductListingAction

Ƭ **ProductListingAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `page?` | [`ProductListingActionPage`](product_description._internal_.md#productlistingactionpage) |
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

___

### ProductVariantItemResponse

Ƭ **ProductVariantItemResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_meta?` | [`CustomMetaFields`](product_description._internal_.md#custommetafields)[] |
| `action?` | [`ProductListingAction`](product_description._internal_.md#productlistingaction) |
| `color?` | `string` |
| `color_name?` | `string` |
| `is_available?` | `boolean` |
| `medias?` | [`Media`](product_description._internal_.md#media)[] |
| `name?` | `string` |
| `slug?` | `string` |
| `uid?` | `number` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1968

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1969

___

### ProductVariantResponse

Ƭ **ProductVariantResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display_type?` | `string` |
| `header?` | `string` |
| `items?` | [`ProductVariantItemResponse`](product_description._internal_.md#productvariantitemresponse)[] |
| `key?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1991

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1992

## Functions

### CustomMetaFields

▸ **CustomMetaFields**(): [`CustomMetaFields`](product_description._internal_.md#custommetafields)

#### Returns

[`CustomMetaFields`](product_description._internal_.md#custommetafields)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1184

___

### Media

▸ **Media**(): [`Media`](product_description._internal_.md#media)

#### Returns

[`Media`](product_description._internal_.md#media)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1353

___

### Meta

▸ **Meta**(): [`Meta`](product_description._internal_.md#meta)

#### Returns

[`Meta`](product_description._internal_.md#meta)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1361

___

### ProductListingAction

▸ **ProductListingAction**(): [`ProductListingAction`](product_description._internal_.md#productlistingaction)

#### Returns

[`ProductListingAction`](product_description._internal_.md#productlistingaction)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1753

___

### ProductListingActionPage

▸ **ProductListingActionPage**(): [`ProductListingActionPage`](product_description._internal_.md#productlistingactionpage)

#### Returns

[`ProductListingActionPage`](product_description._internal_.md#productlistingactionpage)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1759

___

### ProductVariantItemResponse

▸ **ProductVariantItemResponse**(): [`ProductVariantItemResponse`](product_description._internal_.md#productvariantitemresponse)

#### Returns

[`ProductVariantItemResponse`](product_description._internal_.md#productvariantitemresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1968

___

### ProductVariantResponse

▸ **ProductVariantResponse**(): [`ProductVariantResponse`](product_description._internal_.md#productvariantresponse)

#### Returns

[`ProductVariantResponse`](product_description._internal_.md#productvariantresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1991
