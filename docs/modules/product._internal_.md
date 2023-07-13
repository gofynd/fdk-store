[fdk-store](../README.md) / [Exports](../modules.md) / [product](product.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [CustomMetaFields](product._internal_.md#custommetafields)
- [ProductVariantItemResponse](product._internal_.md#productvariantitemresponse)
- [ProductVariantResponse](product._internal_.md#productvariantresponse)

### Functions

- [CustomMetaFields](product._internal_.md#custommetafields-1)
- [ProductVariantItemResponse](product._internal_.md#productvariantitemresponse-1)
- [ProductVariantResponse](product._internal_.md#productvariantresponse-1)

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

### ProductVariantItemResponse

Ƭ **ProductVariantItemResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_meta?` | [`CustomMetaFields`](product._internal_.md#custommetafields)[] |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `color?` | `string` |
| `color_name?` | `string` |
| `is_available?` | `boolean` |
| `medias?` | [`Media`](brands._internal_.md#media)[] |
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
| `items?` | [`ProductVariantItemResponse`](product._internal_.md#productvariantitemresponse)[] |
| `key?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1991

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1992

## Functions

### CustomMetaFields

▸ **CustomMetaFields**(): [`CustomMetaFields`](product._internal_.md#custommetafields)

#### Returns

[`CustomMetaFields`](product._internal_.md#custommetafields)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1184

___

### ProductVariantItemResponse

▸ **ProductVariantItemResponse**(): [`ProductVariantItemResponse`](product._internal_.md#productvariantitemresponse)

#### Returns

[`ProductVariantItemResponse`](product._internal_.md#productvariantitemresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1968

___

### ProductVariantResponse

▸ **ProductVariantResponse**(): [`ProductVariantResponse`](product._internal_.md#productvariantresponse)

#### Returns

[`ProductVariantResponse`](product._internal_.md#productvariantresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1991
