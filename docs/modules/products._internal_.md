[fdk-store](../README.md) / [Exports](../modules.md) / [products](products.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [ApplicationItemMOQ](products._internal_.md#applicationitemmoq)
- [ApplicationItemSEO](products._internal_.md#applicationitemseo)
- [AutoCompleteResponse](products._internal_.md#autocompleteresponse)
- [AutocompleteItem](products._internal_.md#autocompleteitem)
- [BrandDetailResponse](products._internal_.md#branddetailresponse)
- [CategoryMetaResponse](products._internal_.md#categorymetaresponse)
- [CollectionDetailResponse](products._internal_.md#collectiondetailresponse)
- [FetchProductsOptions](products._internal_.md#fetchproductsoptions)
- [FetchProductsResponse](products._internal_.md#fetchproductsresponse)
- [GetBrandDetailBySlugParam](products._internal_.md#getbranddetailbyslugparam)
- [GetCategoryDetailBySlugParam](products._internal_.md#getcategorydetailbyslugparam)
- [GetCollectionDetailBySlugParam](products._internal_.md#getcollectiondetailbyslugparam)
- [GetProductDetailBySlugParam](products._internal_.md#getproductdetailbyslugparam)
- [GetSearchResultsParam](products._internal_.md#getsearchresultsparam)
- [NetQuantity](products._internal_.md#netquantity)
- [Price](products._internal_.md#price)
- [ProductBrand](products._internal_.md#productbrand)
- [ProductCategoryMap](products._internal_.md#productcategorymap)
- [ProductDetail](products._internal_.md#productdetail)
- [ProductDetailAttribute](products._internal_.md#productdetailattribute)
- [ProductDetailCustomOrder](products._internal_.md#productdetailcustomorder)
- [ProductDetailGroupedAttribute](products._internal_.md#productdetailgroupedattribute)
- [ProductFilters](products._internal_.md#productfilters)
- [ProductFiltersKey](products._internal_.md#productfilterskey)
- [ProductFiltersValue](products._internal_.md#productfiltersvalue)
- [ProductListingDetail](products._internal_.md#productlistingdetail)
- [ProductListingPrice](products._internal_.md#productlistingprice)
- [ProductListingResponse](products._internal_.md#productlistingresponse)
- [ProductSortOn](products._internal_.md#productsorton)
- [ProductVariantListingResponse](products._internal_.md#productvariantlistingresponse)

### Functions

- [ApplicationItemMOQ](products._internal_.md#applicationitemmoq-1)
- [ApplicationItemSEO](products._internal_.md#applicationitemseo-1)
- [AutoCompleteResponse](products._internal_.md#autocompleteresponse-1)
- [AutocompleteItem](products._internal_.md#autocompleteitem-1)
- [BrandDetailResponse](products._internal_.md#branddetailresponse-1)
- [CategoryMetaResponse](products._internal_.md#categorymetaresponse-1)
- [CollectionDetailResponse](products._internal_.md#collectiondetailresponse-1)
- [NetQuantity](products._internal_.md#netquantity-1)
- [Price](products._internal_.md#price-1)
- [ProductBrand](products._internal_.md#productbrand-1)
- [ProductCategoryMap](products._internal_.md#productcategorymap-1)
- [ProductDetail](products._internal_.md#productdetail-1)
- [ProductDetailAttribute](products._internal_.md#productdetailattribute-1)
- [ProductDetailCustomOrder](products._internal_.md#productdetailcustomorder-1)
- [ProductDetailGroupedAttribute](products._internal_.md#productdetailgroupedattribute-1)
- [ProductFilters](products._internal_.md#productfilters-1)
- [ProductFiltersKey](products._internal_.md#productfilterskey-1)
- [ProductFiltersValue](products._internal_.md#productfiltersvalue-1)
- [ProductListingDetail](products._internal_.md#productlistingdetail-1)
- [ProductListingPrice](products._internal_.md#productlistingprice-1)
- [ProductListingResponse](products._internal_.md#productlistingresponse-1)
- [ProductSortOn](products._internal_.md#productsorton-1)
- [ProductVariantListingResponse](products._internal_.md#productvariantlistingresponse-1)

## Type Aliases

### ApplicationItemMOQ

Ƭ **ApplicationItemMOQ**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `increment_unit?` | `number` | - The minimum quantity increment in which the item can be purchased. |
| `maximum?` | `number` | - The maximum quantity allowed for purchase. |
| `minimum?` | `number` | - The minimum quantity required for purchase. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:950

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:951

___

### ApplicationItemSEO

Ƭ **ApplicationItemSEO**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `description?` | `string` | - The SEO description of the item |
| `title?` | `string` | - The SEO title of the item |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:967

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:968

___

### AutoCompleteResponse

Ƭ **AutoCompleteResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items?` | [`AutocompleteItem`](products._internal_.md#autocompleteitem)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1027

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1028

___

### AutocompleteItem

Ƭ **AutocompleteItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `display?` | `string` |
| `logo?` | [`Media`](brands._internal_.md#media) |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1018

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1019

___

### BrandDetailResponse

Ƭ **BrandDetailResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `banners?` | [`ImageUrls`](brands._internal_.md#imageurls) |
| `description?` | `string` |
| `logo?` | [`Media`](brands._internal_.md#media) |
| `name?` | `string` |
| `uid?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1032

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1033

___

### CategoryMetaResponse

Ƭ **CategoryMetaResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `banners?` | [`ImageUrls`](brands._internal_.md#imageurls) |
| `logo?` | [`Media`](brands._internal_.md#media) |
| `name?` | `string` |
| `uid?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1083

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1084

___

### CollectionDetailResponse

Ƭ **CollectionDetailResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `_schedule?` | `any` |
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
| `visible_facets_keys?` | `string`[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1103

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1104

___

### FetchProductsOptions

Ƭ **FetchProductsOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `f` | `any` |
| `filters` | `any` |
| `infiniteLoading` | `any` |
| `isCollection` | `any` |
| `pageId` | `any` |
| `pageNo` | `any` |
| `pageSize` | `number` |
| `q` | `any` |
| `sortOn` | `string` |

#### Defined in

src/types/products.ts:5

___

### FetchProductsResponse

Ƭ **FetchProductsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ProductListingResponse`](products._internal_.md#productlistingresponse) |
| `options` | [`FetchProductsOptions`](products._internal_.md#fetchproductsoptions) |

#### Defined in

src/types/products.ts:17

___

### GetBrandDetailBySlugParam

Ƭ **GetBrandDetailBySlugParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | - A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:332

___

### GetCategoryDetailBySlugParam

Ƭ **GetCategoryDetailBySlugParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | - A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:367

___

### GetCollectionDetailBySlugParam

Ƭ **GetCollectionDetailBySlugParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:375

___

### GetProductDetailBySlugParam

Ƭ **GetProductDetailBySlugParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:565

___

### GetSearchResultsParam

Ƭ **GetSearchResultsParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `string` | - The search query for entering partial or full name of a product, brand or category. For example, if the given search query `q` is _ski_, the relevant search suggestions could be _skirt_, _ski shoes_, __skin cream_ etc. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:738

___

### NetQuantity

Ƭ **NetQuantity**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `unit?` | `string` | - The unit of measurement used for the net quantity of the product. |
| `value?` | `number` | - The value of the net quantity of the product. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1366

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1367

___

### Price

Ƭ **Price**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currency_code?` | `string` |
| `currency_symbol?` | `string` |
| `max?` | `number` |
| `min?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1390

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1391

___

### ProductBrand

Ƭ **ProductBrand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `description?` | `string` |
| `logo?` | [`Media`](brands._internal_.md#media) |
| `name?` | `string` |
| `uid?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1398

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1399

___

### ProductCategoryMap

Ƭ **ProductCategoryMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `l1?` | [`ProductBrand`](products._internal_.md#productbrand) |
| `l2?` | [`ProductBrand`](products._internal_.md#productbrand) |
| `l3?` | [`ProductBrand`](products._internal_.md#productbrand) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1412

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1413

___

### ProductDetail

Ƭ **ProductDetail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `_custom_meta?` | [`CustomMetaFields`](product._internal_.md#custommetafields)[] |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `attributes?` | `any` |
| `brand?` | [`ProductBrand`](products._internal_.md#productbrand) |
| `categories?` | [`ProductBrand`](products._internal_.md#productbrand)[] |
| `category_map?` | [`ProductCategoryMap`](products._internal_.md#productcategorymap) |
| `color?` | `string` |
| `custom_order?` | [`ProductDetailCustomOrder`](products._internal_.md#productdetailcustomorder) |
| `description?` | `string` |
| `discount?` | `string` |
| `grouped_attributes?` | [`ProductDetailGroupedAttribute`](products._internal_.md#productdetailgroupedattribute)[] |
| `has_variant?` | `boolean` |
| `highlights?` | `string`[] |
| `image_nature?` | `string` |
| `is_dependent?` | `boolean` |
| `item_code?` | `string` |
| `item_type?` | `string` |
| `medias?` | [`Media`](brands._internal_.md#media)[] |
| `moq?` | [`ApplicationItemMOQ`](products._internal_.md#applicationitemmoq) |
| `name?` | `string` |
| `net_quantity?` | [`NetQuantity`](products._internal_.md#netquantity) |
| `price?` | [`ProductListingPrice`](products._internal_.md#productlistingprice) |
| `product_group_tag?` | `string`[] |
| `product_online_date?` | `string` |
| `rating?` | `number` |
| `rating_count?` | `number` |
| `seo?` | [`ApplicationItemSEO`](products._internal_.md#applicationitemseo) |
| `short_description?` | `string` |
| `similars?` | `string`[] |
| `slug` | `string` |
| `tags?` | `string`[] |
| `teaser_tag?` | `string` |
| `tryouts?` | `string`[] |
| `type?` | `string` |
| `uid?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1427

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1428

___

### ProductDetailAttribute

Ƭ **ProductDetailAttribute**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key?` | `string` |
| `type?` | `string` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1467

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1468

___

### ProductDetailCustomOrder

Ƭ **ProductDetailCustomOrder**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `is_custom_order?` | `boolean` |
| `manufacturing_time?` | `number` |
| `manufacturing_time_unit?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1474

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1475

___

### ProductDetailGroupedAttribute

Ƭ **ProductDetailGroupedAttribute**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `details?` | [`ProductDetailAttribute`](products._internal_.md#productdetailattribute)[] |
| `title?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1481

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1482

___

### ProductFilters

Ƭ **ProductFilters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | [`ProductFiltersKey`](products._internal_.md#productfilterskey) |
| `values` | [`ProductFiltersValue`](products._internal_.md#productfiltersvalue)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1575

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1576

___

### ProductFiltersKey

Ƭ **ProductFiltersKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display` | `string` |
| `kind?` | `string` |
| `logo?` | `string` |
| `name` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1581

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1582

___

### ProductFiltersValue

Ƭ **ProductFiltersValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count?` | `number` |
| `currency_code?` | `string` |
| `currency_symbol?` | `string` |
| `display` | `string` |
| `display_format?` | `string` |
| `is_selected` | `boolean` |
| `max?` | `number` |
| `min?` | `number` |
| `query_format?` | `string` |
| `selected_max?` | `number` |
| `selected_min?` | `number` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1589

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1590

___

### ProductListingDetail

Ƭ **ProductListingDetail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `_custom_meta?` | [`CustomMetaFields`](product._internal_.md#custommetafields)[] |
| `action?` | [`ProductListingAction`](brands._internal_.md#productlistingaction) |
| `attributes?` | `any` |
| `brand?` | [`ProductBrand`](products._internal_.md#productbrand) |
| `categories?` | [`ProductBrand`](products._internal_.md#productbrand)[] |
| `category_map?` | [`ProductCategoryMap`](products._internal_.md#productcategorymap) |
| `color?` | `string` |
| `custom_order?` | [`ProductDetailCustomOrder`](products._internal_.md#productdetailcustomorder) |
| `description?` | `string` |
| `discount?` | `string` |
| `grouped_attributes?` | [`ProductDetailGroupedAttribute`](products._internal_.md#productdetailgroupedattribute)[] |
| `has_variant?` | `boolean` |
| `highlights?` | `string`[] |
| `identifiers?` | `string`[] |
| `image_nature?` | `string` |
| `is_dependent?` | `boolean` |
| `item_code?` | `string` |
| `item_type?` | `string` |
| `medias?` | [`Media`](brands._internal_.md#media)[] |
| `moq?` | [`ApplicationItemMOQ`](products._internal_.md#applicationitemmoq) |
| `name?` | `string` |
| `net_quantity?` | [`NetQuantity`](products._internal_.md#netquantity) |
| `price?` | [`ProductListingPrice`](products._internal_.md#productlistingprice) |
| `product_group_tag?` | `string`[] |
| `product_online_date?` | `string` |
| `rating?` | `number` |
| `rating_count?` | `number` |
| `sellable?` | `boolean` |
| `seo?` | [`ApplicationItemSEO`](products._internal_.md#applicationitemseo) |
| `short_description?` | `string` |
| `similars?` | `string`[] |
| `sizes?` | `string`[] |
| `slug` | `string` |
| `tags?` | `string`[] |
| `teaser_tag?` | `string` |
| `tryouts?` | `string`[] |
| `type?` | `string` |
| `uid?` | `number` |
| `variants?` | [`ProductVariantListingResponse`](products._internal_.md#productvariantlistingresponse)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1766

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1767

___

### ProductListingPrice

Ƭ **ProductListingPrice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `effective?` | [`Price`](products._internal_.md#price) |
| `marked?` | [`Price`](products._internal_.md#price) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1810

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1811

___

### ProductListingResponse

Ƭ **ProductListingResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filters?` | [`ProductFilters`](products._internal_.md#productfilters)[] |
| `items?` | [`ProductListingDetail`](products._internal_.md#productlistingdetail)[] |
| `page` | [`Page`](brands._internal_.md#page) |
| `sort_on?` | [`ProductSortOn`](products._internal_.md#productsorton)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1816

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1817

___

### ProductSortOn

Ƭ **ProductSortOn**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `is_selected?` | `boolean` |
| `name?` | `string` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1914

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1915

___

### ProductVariantListingResponse

Ƭ **ProductVariantListingResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display_type?` | `string` |
| `header?` | `string` |
| `items?` | [`ProductVariantItemResponse`](product._internal_.md#productvariantitemresponse)[] |
| `key?` | `string` |
| `total?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1982

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1983

## Functions

### ApplicationItemMOQ

▸ **ApplicationItemMOQ**(): [`ApplicationItemMOQ`](products._internal_.md#applicationitemmoq)

#### Returns

[`ApplicationItemMOQ`](products._internal_.md#applicationitemmoq)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:950

___

### ApplicationItemSEO

▸ **ApplicationItemSEO**(): [`ApplicationItemSEO`](products._internal_.md#applicationitemseo)

#### Returns

[`ApplicationItemSEO`](products._internal_.md#applicationitemseo)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:967

___

### AutoCompleteResponse

▸ **AutoCompleteResponse**(): [`AutoCompleteResponse`](products._internal_.md#autocompleteresponse)

#### Returns

[`AutoCompleteResponse`](products._internal_.md#autocompleteresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1027

___

### AutocompleteItem

▸ **AutocompleteItem**(): [`AutocompleteItem`](products._internal_.md#autocompleteitem)

#### Returns

[`AutocompleteItem`](products._internal_.md#autocompleteitem)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1018

___

### BrandDetailResponse

▸ **BrandDetailResponse**(): [`BrandDetailResponse`](products._internal_.md#branddetailresponse)

#### Returns

[`BrandDetailResponse`](products._internal_.md#branddetailresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1032

___

### CategoryMetaResponse

▸ **CategoryMetaResponse**(): [`CategoryMetaResponse`](products._internal_.md#categorymetaresponse)

#### Returns

[`CategoryMetaResponse`](products._internal_.md#categorymetaresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1083

___

### CollectionDetailResponse

▸ **CollectionDetailResponse**(): [`CollectionDetailResponse`](products._internal_.md#collectiondetailresponse)

#### Returns

[`CollectionDetailResponse`](products._internal_.md#collectiondetailresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1103

___

### NetQuantity

▸ **NetQuantity**(): [`NetQuantity`](products._internal_.md#netquantity)

#### Returns

[`NetQuantity`](products._internal_.md#netquantity)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1366

___

### Price

▸ **Price**(): [`Price`](products._internal_.md#price)

#### Returns

[`Price`](products._internal_.md#price)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1390

___

### ProductBrand

▸ **ProductBrand**(): [`ProductBrand`](products._internal_.md#productbrand)

#### Returns

[`ProductBrand`](products._internal_.md#productbrand)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1398

___

### ProductCategoryMap

▸ **ProductCategoryMap**(): [`ProductCategoryMap`](products._internal_.md#productcategorymap)

#### Returns

[`ProductCategoryMap`](products._internal_.md#productcategorymap)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1412

___

### ProductDetail

▸ **ProductDetail**(): [`ProductDetail`](products._internal_.md#productdetail)

#### Returns

[`ProductDetail`](products._internal_.md#productdetail)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1427

___

### ProductDetailAttribute

▸ **ProductDetailAttribute**(): [`ProductDetailAttribute`](products._internal_.md#productdetailattribute)

#### Returns

[`ProductDetailAttribute`](products._internal_.md#productdetailattribute)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1467

___

### ProductDetailCustomOrder

▸ **ProductDetailCustomOrder**(): [`ProductDetailCustomOrder`](products._internal_.md#productdetailcustomorder)

#### Returns

[`ProductDetailCustomOrder`](products._internal_.md#productdetailcustomorder)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1474

___

### ProductDetailGroupedAttribute

▸ **ProductDetailGroupedAttribute**(): [`ProductDetailGroupedAttribute`](products._internal_.md#productdetailgroupedattribute)

#### Returns

[`ProductDetailGroupedAttribute`](products._internal_.md#productdetailgroupedattribute)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1481

___

### ProductFilters

▸ **ProductFilters**(): [`ProductFilters`](products._internal_.md#productfilters)

#### Returns

[`ProductFilters`](products._internal_.md#productfilters)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1575

___

### ProductFiltersKey

▸ **ProductFiltersKey**(): [`ProductFiltersKey`](products._internal_.md#productfilterskey)

#### Returns

[`ProductFiltersKey`](products._internal_.md#productfilterskey)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1581

___

### ProductFiltersValue

▸ **ProductFiltersValue**(): [`ProductFiltersValue`](products._internal_.md#productfiltersvalue)

#### Returns

[`ProductFiltersValue`](products._internal_.md#productfiltersvalue)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1589

___

### ProductListingDetail

▸ **ProductListingDetail**(): [`ProductListingDetail`](products._internal_.md#productlistingdetail)

#### Returns

[`ProductListingDetail`](products._internal_.md#productlistingdetail)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1766

___

### ProductListingPrice

▸ **ProductListingPrice**(): [`ProductListingPrice`](products._internal_.md#productlistingprice)

#### Returns

[`ProductListingPrice`](products._internal_.md#productlistingprice)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1810

___

### ProductListingResponse

▸ **ProductListingResponse**(): [`ProductListingResponse`](products._internal_.md#productlistingresponse)

#### Returns

[`ProductListingResponse`](products._internal_.md#productlistingresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1816

___

### ProductSortOn

▸ **ProductSortOn**(): [`ProductSortOn`](products._internal_.md#productsorton)

#### Returns

[`ProductSortOn`](products._internal_.md#productsorton)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1914

___

### ProductVariantListingResponse

▸ **ProductVariantListingResponse**(): [`ProductVariantListingResponse`](products._internal_.md#productvariantlistingresponse)

#### Returns

[`ProductVariantListingResponse`](products._internal_.md#productvariantlistingresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1982
