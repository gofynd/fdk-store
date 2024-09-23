[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > FinancialBreakup

# Type alias: FinancialBreakup

> **FinancialBreakup**: `object`

## Type declaration

### `added_to_fynd_cash`

> `optional` **added\_to\_fynd\_cash**: `boolean`

- Indicates if the refund amount was
added to Fynd Cash.

***

### `amount_paid`

> `optional` **amount\_paid**: `number`

- The total amount paid by the customer.

***

### `amount_paid_roundoff`

> `optional` **amount\_paid\_roundoff**: `number`

- The rounded-off amount paid by
the customer.

***

### `amount_to_be_collected`

> `optional` **amount\_to\_be\_collected**: `number`

- The total amount that needs to
be collected from the customer.

***

### `brand_calculated_amount`

> `optional` **brand\_calculated\_amount**: `number`

- The amount calculated by the brand.

***

### `cashback`

> `optional` **cashback**: `number`

- The cashback amount earned.

***

### `cashback_applied`

> `optional` **cashback\_applied**: `number`

- The amount of cashback applied.

***

### `cod_charges`

> `optional` **cod\_charges**: `number`

- The cash on delivery charges, if applicable.

***

### `coupon_effective_discount`

> `optional` **coupon\_effective\_discount**: `number`

- The effective discount from coupons.

***

### `coupon_value`

> `optional` **coupon\_value**: `number`

- The value of the coupon applied.

***

### `delivery_charge`

> `optional` **delivery\_charge**: `number`

- The delivery charge for the order.

***

### `discount`

> `optional` **discount**: `number`

- The discount applied to the item.

***

### `fynd_credits`

> `optional` **fynd\_credits**: `number`

- The amount of Fynd credits used.

***

### `gst_fee`

> `optional` **gst\_fee**: `number`

- The GST fee applied to the item.

***

### `gst_tag`

> `optional` **gst\_tag**: `string`

- The GST tag indicating the type of GST applied.

***

### `gst_tax_percentage`

> `optional` **gst\_tax\_percentage**: `number`

- The GST tax percentage applied .

***

### `hsn_code`

> `optional` **hsn\_code**: `string`

- The HSN (Harmonized System of Nomenclature)
code of the item.

***

### `identifiers`

> `optional` **identifiers**: [`Identifiers`](type-alias.Identifiers.md)

***

### `item_name`

> `optional` **item\_name**: `string`

- The name of the item.

***

### `price_effective`

> `optional` **price\_effective**: `number`

- The effective price after all adjustments.

***

### `price_marked`

> `optional` **price\_marked**: `number`

- The original marked price of the item.

***

### `promotion_effective_discount`

> `optional` **promotion\_effective\_discount**: `number`

- The effective discount
from promotions.

***

### `refund_amount`

> `optional` **refund\_amount**: `number`

- The amount refunded to the customer.

***

### `refund_credit`

> `optional` **refund\_credit**: `number`

- The amount credited for refund .

***

### `size`

> `optional` **size**: `string`

- The size of the item .

***

### `total_units`

> `optional` **total\_units**: `number`

- The total number of units purchased.

***

### `transfer_price`

> `optional` **transfer\_price**: `number`

- The transfer price of the item.

***

### `value_of_good`

> `optional` **value\_of\_good**: `number`

- The value of the goods before tax and
other charges.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1200

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1201

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
