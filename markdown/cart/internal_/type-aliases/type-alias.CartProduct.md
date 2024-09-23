[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartProduct

# Type alias: CartProduct

> **CartProduct**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Field to add custom json of the product in cart.

***

### `action`

> `optional` **action**: [`ProductAction`](type-alias.ProductAction.md)

***

### `attributes`

> `optional` **attributes**: `any`

- Product attributes defined on platform.

***

### `brand`

> `optional` **brand**: [`BaseInfo`](type-alias.BaseInfo.md)

***

### `categories`

> `optional` **categories**: [`CategoryInfo`](type-alias.CategoryInfo.md)[]

- Product category information which
incldes category name and category id.

***

### `images`

> `optional` **images**: [`ProductImage`](type-alias.ProductImage.md)[]

- Product Images urls of different types
like secure url, aspect ration url and url.

***

### `item_code`

> `optional` **item\_code**: `string`

- Product code of the product while defining
product on platform.

***

### `name`

> `optional` **name**: `string`

- Product name of the product in cart which is
defined on platform.

***

### `slug`

> `optional` **slug**: `string`

- Unique product url name generated via product
name and other meta data.

***

### `tags`

> `optional` **tags**: `string`[]

- Products tags that are added to each product to
identify the set of products.

***

### `teaser_tag`

> `optional` **teaser\_tag**: [`Tags`](type-alias.Tags.md)

***

### `type`

> `optional` **type**: `string`

- Type of product in cart.

***

### `uid`

> `optional` **uid**: `number`

- Unique identifier of the product in cart.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1760

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1761

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
