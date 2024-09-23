[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > ProductArticle

# Type alias: ProductArticle

> **ProductArticle**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Field to update custom json of the article in cart.

***

### `cart_item_meta`

> `optional` **cart\_item\_meta**: `any`

- Meta details of the article added from cart.

***

### `extra_meta`

> `optional` **extra\_meta**: `any`

- Field to update extra meta of the article in cart.

***

### `gift_card`

> `optional` **gift\_card**: `any`

- Gift card detail if gift card applied to the
product which indicates gift price, gift applicable flag and display
message for the gift.

***

### `identifier`

> `optional` **identifier**: `any`

- Unique identifier of the article.

***

### `is_gift_visible`

> `optional` **is\_gift\_visible**: `boolean`

- Whether the product can be purchased
as a gift. It is true if the product is available for gifting and false otherwise.

***

### `meta`

> `optional` **meta**: `any`

- Article meta data.

***

### `mto_quantity`

> `optional` **mto\_quantity**: `number`

- Quantity of the product which will
specially manufactured as not available in stock.

***

### `parent_item_identifiers`

> `optional` **parent\_item\_identifiers**: `any`

- Fields to determine parent
product of the product.

***

### `price`

> `optional` **price**: [`ArticlePriceInfo`](type-alias.ArticlePriceInfo.md)

***

### `product_group_tags`

> `optional` **product\_group\_tags**: `string`[]

- List fot the unique identifier
for the product grouping.

***

### `quantity`

> `optional` **quantity**: `number`

- Quantity of the article added in cart.

***

### `seller`

> `optional` **seller**: [`BaseInfo`](type-alias.BaseInfo.md)

***

### `seller_identifier`

> `optional` **seller\_identifier**: `string`

- List of identifiers used by sellers
for the product size.

***

### `size`

> `optional` **size**: `string`

- Size of the article added in cart.

***

### `store`

> `optional` **store**: [`StoreInfo`](type-alias.StoreInfo.md)

***

### `tags`

> `optional` **tags**: `string`[]

- A list of article tags.

***

### `type`

> `optional` **type**: `string`

- Type of the data sent in response. Possible value
is article.

***

### `uid`

> `optional` **uid**: `string`

- This unique identifier is assigned to the specific
article. This represents item x size x location.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1446

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1447

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
