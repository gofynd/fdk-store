[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartProductInfo

# Type alias: CartProductInfo

> **CartProductInfo**: `object`

## Type declaration

### `article`

> `optional` **article**: [`ProductArticle`](type-alias.ProductArticle.md)

***

### `availability`

> `optional` **availability**: [`ProductAvailability`](type-alias.ProductAvailability.md)

***

### `bulk_offer`

> `optional` **bulk\_offer**: `any`

- Bulk offer information for the product
which denotes if any bulk offer is applied to the product in cart.

***

### `charges`

> `optional` **charges**: [`Charges`](type-alias.Charges.md)[]

- Charges information which denotes types of
charges and amount of charge applied to that product in cart.

***

### `coupon`

> `optional` **coupon**: [`CouponDetails`](type-alias.CouponDetails.md)

***

### `coupon_message`

> `optional` **coupon\_message**: `string`

- Message for the coupon denotes which
coupon is applied and empty if not applied.

***

### `custom_order`

> `optional` **custom\_order**: `any`

- Whether MTO (Make to Order) is enabled or not.

***

### `delivery_promise`

> `optional` **delivery\_promise**: [`ShipmentPromise`](type-alias.ShipmentPromise.md)

***

### `discount`

> `optional` **discount**: `string`

- Discount amount of the product in cart.

***

### `identifiers`

> **identifiers**: [`CartProductIdentifer`](type-alias.CartProductIdentifer.md)

***

### `is_set`

> `optional` **is\_set**: `boolean`

- Whether or not the product is a set of items.

***

### `key`

> `optional` **key**: `string`

- The attribute key associated with the size.

***

### `message`

> `optional` **message**: `string`

- Product level message which denotes error
information to display over the product in cart.

***

### `moq`

> `optional` **moq**: `any`

- An Integer indication the Minimum Order Quantity
of a product, e.g. 100.

***

### `parent_item_identifiers`

> `optional` **parent\_item\_identifiers**: `any`

- Parent item information of the
product which identifies the parent of the product in cart.

***

### `price`

> `optional` **price**: [`ProductPriceInfo`](type-alias.ProductPriceInfo.md)

***

### `price_per_unit`

> `optional` **price\_per\_unit**: [`ProductPricePerUnitInfo`](type-alias.ProductPricePerUnitInfo.md)

***

### `product`

> `optional` **product**: [`CartProduct`](type-alias.CartProduct.md)

***

### `product_ean_id`

> `optional` **product\_ean\_id**: `string`

- European Article Number of the product
(limited upto 50 EAN identifier in a single request).

***

### `promo_meta`

> `optional` **promo\_meta**: [`PromoMeta`](type-alias.PromoMeta.md)

***

### `promotions_applied`

> `optional` **promotions\_applied**: [`AppliedPromotion`](type-alias.AppliedPromotion.md)[]

- List of applicable
promotion for the product in cart.

***

### `quantity`

> `optional` **quantity**: `number`

- Quantity of the product added in cart.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1831

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1832

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
