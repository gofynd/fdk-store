[fdk-store](../README.md) / [Exports](../modules.md) / [categories](categories.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [CategoryBanner](categories._internal_.md#categorybanner)
- [CategoryItems](categories._internal_.md#categoryitems)
- [CategoryListingResponse](categories._internal_.md#categorylistingresponse)
- [Child](categories._internal_.md#child)
- [DepartmentCategoryTree](categories._internal_.md#departmentcategorytree)
- [DepartmentIdentifier](categories._internal_.md#departmentidentifier)
- [GetCategoriesParam](categories._internal_.md#getcategoriesparam)
- [SecondLevelChild](categories._internal_.md#secondlevelchild)
- [ThirdLevelChild](categories._internal_.md#thirdlevelchild)

### Functions

- [CategoryBanner](categories._internal_.md#categorybanner-1)
- [CategoryItems](categories._internal_.md#categoryitems-1)
- [CategoryListingResponse](categories._internal_.md#categorylistingresponse-1)
- [Child](categories._internal_.md#child-1)
- [DepartmentCategoryTree](categories._internal_.md#departmentcategorytree-1)
- [DepartmentIdentifier](categories._internal_.md#departmentidentifier-1)
- [SecondLevelChild](categories._internal_.md#secondlevelchild-1)
- [ThirdLevelChild](categories._internal_.md#thirdlevelchild-1)

## Type Aliases

### CategoryBanner

Ƭ **CategoryBanner**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `landscape` | [`Media`](brands._internal_.md#media) |
| `portrait` | [`Media`](brands._internal_.md#media) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1061

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1062

___

### CategoryItems

Ƭ **CategoryItems**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `banners` | [`CategoryBanner`](categories._internal_.md#categorybanner) |
| `childs?` | [`Child`](categories._internal_.md#child)[] |
| `name` | `string` |
| `slug` | `string` |
| `uid` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1067

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1068

___

### CategoryListingResponse

Ƭ **CategoryListingResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | [`DepartmentCategoryTree`](categories._internal_.md#departmentcategorytree)[] |
| `departments?` | [`DepartmentIdentifier`](categories._internal_.md#departmentidentifier)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1077

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1078

___

### Child

Ƭ **Child**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `banners?` | [`ImageUrls`](brands._internal_.md#imageurls) |
| `childs?` | [`SecondLevelChild`](categories._internal_.md#secondlevelchild)[] |
| `name?` | `string` |
| `slug?` | `string` |
| `uid?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1092

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1093

___

### DepartmentCategoryTree

Ƭ **DepartmentCategoryTree**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `department` | `string` |
| `items?` | [`CategoryItems`](categories._internal_.md#categoryitems)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1205

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1206

___

### DepartmentIdentifier

Ƭ **DepartmentIdentifier**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `slug?` | `string` |
| `uid?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1211

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1212

___

### GetCategoriesParam

Ƭ **GetCategoriesParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `department?` | `string` | - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/ |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:358

___

### SecondLevelChild

Ƭ **SecondLevelChild**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `banners?` | [`ImageUrls`](brands._internal_.md#imageurls) |
| `childs?` | [`ThirdLevelChild`](categories._internal_.md#thirdlevelchild)[] |
| `name?` | `string` |
| `slug?` | `string` |
| `uid?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2011

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2012

___

### ThirdLevelChild

Ƭ **ThirdLevelChild**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `banners?` | [`ImageUrls`](brands._internal_.md#imageurls) |
| `childs?` | `any`[] |
| `name?` | `string` |
| `slug?` | `string` |
| `uid?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2183

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2184

## Functions

### CategoryBanner

▸ **CategoryBanner**(): [`CategoryBanner`](categories._internal_.md#categorybanner)

#### Returns

[`CategoryBanner`](categories._internal_.md#categorybanner)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1061

___

### CategoryItems

▸ **CategoryItems**(): [`CategoryItems`](categories._internal_.md#categoryitems)

#### Returns

[`CategoryItems`](categories._internal_.md#categoryitems)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1067

___

### CategoryListingResponse

▸ **CategoryListingResponse**(): [`CategoryListingResponse`](categories._internal_.md#categorylistingresponse)

#### Returns

[`CategoryListingResponse`](categories._internal_.md#categorylistingresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1077

___

### Child

▸ **Child**(): [`Child`](categories._internal_.md#child)

#### Returns

[`Child`](categories._internal_.md#child)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1092

___

### DepartmentCategoryTree

▸ **DepartmentCategoryTree**(): [`DepartmentCategoryTree`](categories._internal_.md#departmentcategorytree)

#### Returns

[`DepartmentCategoryTree`](categories._internal_.md#departmentcategorytree)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1205

___

### DepartmentIdentifier

▸ **DepartmentIdentifier**(): [`DepartmentIdentifier`](categories._internal_.md#departmentidentifier)

#### Returns

[`DepartmentIdentifier`](categories._internal_.md#departmentidentifier)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1211

___

### SecondLevelChild

▸ **SecondLevelChild**(): [`SecondLevelChild`](categories._internal_.md#secondlevelchild)

#### Returns

[`SecondLevelChild`](categories._internal_.md#secondlevelchild)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2011

___

### ThirdLevelChild

▸ **ThirdLevelChild**(): [`ThirdLevelChild`](categories._internal_.md#thirdlevelchild)

#### Returns

[`ThirdLevelChild`](categories._internal_.md#thirdlevelchild)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2183
