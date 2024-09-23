[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > ProductDetail

# Type alias: ProductDetail

> **ProductDetail**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Custom JSON object for additional product data.

***

### `_custom_meta`

> `optional` **\_custom\_meta**: [`CustomMetaFields`](type-alias.CustomMetaFields.md)[]

- Custom metadata fields
associated with the product.

***

### `action`

> `optional` **action**: [`ProductListingAction`](../../../brands/internal_/type-aliases/type-alias.ProductListingAction.md)

***

### `attributes`

> `optional` **attributes**: `any`

- Additional attributes or characteristics of
the product.

***

### `brand`

> `optional` **brand**: [`ProductBrand`](type-alias.ProductBrand.md)

***

### `categories`

> `optional` **categories**: [`ProductBrand`](type-alias.ProductBrand.md)[]

- List of product categories
associated with the product.

***

### `category_map`

> `optional` **category\_map**: [`ProductCategoryMap`](type-alias.ProductCategoryMap.md)

***

### `color`

> `optional` **color**: `string`

- Color of the product, if applicable.

***

### `custom_order`

> `optional` **custom\_order**: [`ProductDetailCustomOrder`](type-alias.ProductDetailCustomOrder.md)

***

### `department`

> `optional` **department**: [`ProductDepartment`](type-alias.ProductDepartment.md)

***

### `description`

> `optional` **description**: `string`

- Detailed description of the product.

***

### `discount`

> `optional` **discount**: `string`

- Discount applied to the product, if any.

***

### `grouped_attributes`

> `optional` **grouped\_attributes**: [`ProductDetailGroupedAttribute`](type-alias.ProductDetailGroupedAttribute.md)[]

- Grouped
attributes detailing various characteristics of the product.

***

### `has_variant`

> `optional` **has\_variant**: `boolean`

- Indicates whether the product has variants.

***

### `highlights`

> `optional` **highlights**: `string`[]

- Key highlights or features of the product.

***

### `image_nature`

> `optional` **image\_nature**: `string`

- Type of the images associated with the
product such as standard.

***

### `is_dependent`

> `optional` **is\_dependent**: `boolean`

- Indicates whether the product can be
sold as an individual product.

***

### `item_code`

> `optional` **item\_code**: `string`

- Item Code defined for the product.

***

### `item_type`

> `optional` **item\_type**: `string`

- This field describes the type of item,
indicating the category or nature of the product. Possible values are
Standard, Composite, Wet, Digital.

***

### `medias`

> `optional` **medias**: [`Media`](../../../brands/internal_/type-aliases/type-alias.Media.md)[]

- Media files associated with the product.

***

### `moq`

> `optional` **moq**: [`ApplicationItemMOQ`](type-alias.ApplicationItemMOQ.md)

***

### `name`

> `optional` **name**: `string`

- Name of the product.

***

### `net_quantity`

> `optional` **net\_quantity**: [`NetQuantity`](type-alias.NetQuantity.md)

***

### `price`

> `optional` **price**: [`ProductListingPrice`](type-alias.ProductListingPrice.md)

***

### `product_group_tag`

> `optional` **product\_group\_tag**: `string`[]

- List of bundle/product grouping
slugs mapped to the product.

***

### `product_online_date`

> `optional` **product\_online\_date**: `string`

- Date and time when the product was
made available online.

***

### `rating`

> `optional` **rating**: `number`

- The rating of the product.

***

### `rating_count`

> `optional` **rating\_count**: `number`

- Count of ratings the product has received.

***

### `seo`

> `optional` **seo**: [`ApplicationItemSEO`](type-alias.ApplicationItemSEO.md)

***

### `short_description`

> `optional` **short\_description**: `string`

- Brief description of the product.

***

### `similars`

> `optional` **similars**: `string`[]

- List of products marked similar to given product.

***

### `slug`

> **slug**: `string`

- URL-friendly identifier for the product.

***

### `tags`

> `optional` **tags**: `string`[]

- Tags associated with the product for better
categorization.

***

### `teaser_tag`

> `optional` **teaser\_tag**: `string`

- Teaser tag or short promotional phrase for
the product.

***

### `tryouts`

> `optional` **tryouts**: `string`[]

- Identifiers or names of tryout versions of
the product.

***

### `type`

> `optional` **type**: `string`

- Product type or classification.

***

### `uid`

> `optional` **uid**: `number`

- Unique identifier for the product.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1367

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1368

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
