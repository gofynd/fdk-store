[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > ProductInGroup

# Type alias: ProductInGroup

> **ProductInGroup**: `object`

## Type declaration

### `allow_remove`

> `optional` **allow\_remove**: `boolean`

- A flag indicating whether the product
can be removed from the cart.

***

### `auto_add_to_cart`

> `optional` **auto\_add\_to\_cart**: `boolean`

- A flag indicating whether the
product should be automatically added to the cart.

***

### `auto_select`

> `optional` **auto\_select**: `boolean`

- A flag indicating whether the product
should be automatically selected.

***

### `max_quantity`

> **max\_quantity**: `number`

- The maximum quantity of the product that
can be added to the cart.

***

### `min_quantity`

> `optional` **min\_quantity**: `number`

- The minimum quantity of the product that
can be added to the cart.

***

### `price`

> `optional` **price**: [`ProductGroupPrice`](type-alias.ProductGroupPrice.md)

- The price details for the product group.

***

### `product_details`

> `optional` **product\_details**: [`ProductDetails`](type-alias.ProductDetails.md)

- The details of the product.

***

### `product_uid`

> **product\_uid**: `number`

- The unique ID of the product in the group.

***

### `sizes`

> `optional` **sizes**: [`Size`](type-alias.Size.md)[]

- The available sizes for the product.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2065

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2066

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
