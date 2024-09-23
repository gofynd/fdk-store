[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > ProductSizePriceResponseV3

# Type alias: ProductSizePriceResponseV3

> **ProductSizePriceResponseV3**: `object`

## Type declaration

### `article_assignment`

> `optional` **article\_assignment**: [`ArticleAssignmentV3`](type-alias.ArticleAssignmentV3.md)

***

### `article_id`

> `optional` **article\_id**: `string`

- This unique identifier is assigned to the
specific article. This represents item x size x location.

***

### `delivery_promise`

> `optional` **delivery\_promise**: [`PromiseSchema`](type-alias.PromiseSchema.md)

***

### `discount`

> `optional` **discount**: `string`

- Amount or percentage of discount applied to
the product's price, showing the savings for the customer.

***

### `discount_meta`

> `optional` **discount\_meta**: [`DiscountMeta`](type-alias.DiscountMeta.md)

***

### `grouped_attributes`

> `optional` **grouped\_attributes**: [`SellerGroupAttributes`](type-alias.SellerGroupAttributes.md)[]

- Collection of
attributes grouped together, which provides detailed characteristics of the
product, such as color, size, material, etc.

***

### `is_cod`

> `optional` **is\_cod**: `boolean`

- Whether Cash on Delivery (COD) is available
for this product. It is true if COD is available and false otherwise.

***

### `is_gift`

> `optional` **is\_gift**: `boolean`

- Whether the product can be purchased as a
gift. It is true if the product is available for gifting and false otherwise.

***

### `item_type`

> `optional` **item\_type**: `string`

- Type of item, indicating the category or
nature of the product. Possible values are Standard, Composite, Wet, Digital.

***

### `long_lat`

> `optional` **long\_lat**: `number`[]

- Longitude and latitude coordinates,
possibly indicating the location of the store or warehouse where the
product is stocked.

***

### `marketplace_attributes`

> `optional` **marketplace\_attributes**: [`MarketPlaceSttributesSchemaV3`](type-alias.MarketPlaceSttributesSchemaV3.md)[]

-
Attributes specific to the marketplace, such as ratings, reviews, shipping
options, and other marketplace-specific details.

***

### `pincode`

> `optional` **pincode**: `number`

- Postal code or zip code for which the
product's availability and delivery options are being checked.

***

### `price`

> `optional` **price**: [`ProductStockPriceV3`](type-alias.ProductStockPriceV3.md)

***

### `price_per_piece`

> `optional` **price\_per\_piece**: [`ProductStockPriceV3`](type-alias.ProductStockPriceV3.md)

***

### `price_per_unit`

> `optional` **price\_per\_unit**: [`ProductStockUnitPriceV3`](type-alias.ProductStockUnitPriceV3.md)

***

### `quantity`

> `optional` **quantity**: `number`

- Available quantity of the product in stock.
It shows the number of units available for purchase.

***

### `return_config`

> `optional` **return\_config**: [`ReturnConfigSchemaV3`](type-alias.ReturnConfigSchemaV3.md)

***

### `seller`

> `optional` **seller**: [`SellerV3`](type-alias.SellerV3.md)

***

### `seller_count`

> `optional` **seller\_count**: `number`

- Number of sellers offering this product.
It indicates the level of competition and availability from different sellers.

***

### `set`

> `optional` **set**: [`ProductSetV3`](type-alias.ProductSetV3.md)

***

### `special_badge`

> `optional` **special\_badge**: `string`

- Special badges or labels assigned to the
product, such as "Bestseller," "New Arrival," or "Limited Edition.".

***

### `store`

> `optional` **store**: [`StoreV3`](type-alias.StoreV3.md)

***

### `strategy_wise_listing`

> `optional` **strategy\_wise\_listing**: [`StrategyWiseListingSchemaV3`](type-alias.StrategyWiseListingSchemaV3.md)[]

- Details
about serviceability attributes.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:3746

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:3747

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
