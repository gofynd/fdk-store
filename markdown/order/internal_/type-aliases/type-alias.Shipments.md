[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > Shipments

# Type alias: Shipments

> **Shipments**: `object`

## Type declaration

### `awb_no`

> `optional` **awb\_no**: `string`

- The airway bill number for the shipment.

***

### `bags`

> `optional` **bags**: [`Bags`](type-alias.Bags.md)[]

- An array containing details about the individual
bags in the shipment.

***

### `beneficiary_details`

> `optional` **beneficiary\_details**: `boolean`

- Indicates if there are any
beneficiary details.

***

### `billing_address`

> `optional` **billing\_address**: [`Address`](type-alias.Address.md)

***

### `breakup_values`

> `optional` **breakup\_values**: [`BreakupValues`](type-alias.BreakupValues.md)[]

- An array containing the
breakup of various charges and discounts.

***

### `can_break`

> `optional` **can\_break**: `any`

- An object containing details about the
breakability of the shipment.

***

### `can_cancel`

> `optional` **can\_cancel**: `boolean`

- Indicates if the shipment can be canceled.

***

### `can_return`

> `optional` **can\_return**: `boolean`

- Indicates if the shipment can be returned.

***

### `comment`

> `optional` **comment**: `string`

- Any comments related to the shipment.

***

### `custom_meta`

> `optional` **custom\_meta**: `any`[]

- An object containing custom metadata for
the shipment.

***

### `delivery_address`

> `optional` **delivery\_address**: [`Address`](type-alias.Address.md)

***

### `delivery_date`

> `optional` **delivery\_date**: `string`

- The expected delivery date.

***

### `dp_name`

> `optional` **dp\_name**: `string`

- The name of the delivery partner.

***

### `fulfilling_company`

> `optional` **fulfilling\_company**: [`FulfillingCompany`](type-alias.FulfillingCompany.md)

***

### `fulfilling_store`

> `optional` **fulfilling\_store**: [`FulfillingStore`](type-alias.FulfillingStore.md)

***

### `gstin_code`

> `optional` **gstin\_code**: `string`

- The GSTIN code for the shipment.

***

### `invoice`

> `optional` **invoice**: [`Invoice`](type-alias.Invoice.md)

***

### `need_help_url`

> `optional` **need\_help\_url**: `string`

- The URL for customer support or help.

***

### `order`

> `optional` **order**: [`OrderRequest`](type-alias.OrderRequest.md)

***

### `order_id`

> `optional` **order\_id**: `string`

- The unique identifier for the order.

***

### `order_type`

> `optional` **order\_type**: `string`

- The type of order.

***

### `payment`

> `optional` **payment**: [`ShipmentPayment`](type-alias.ShipmentPayment.md)

***

### `payment_info`

> `optional` **payment\_info**: [`ShipmentPaymentInfo`](type-alias.ShipmentPaymentInfo.md)[]

- Array of objects
containing payment methods used for placing an order. Each object will
provide information about corresponding payment method with relevant details.

***

### `prices`

> `optional` **prices**: [`Prices`](type-alias.Prices.md)

***

### `promise`

> `optional` **promise**: [`Promise`](type-alias.Promise.md)

***

### `refund_details`

> `optional` **refund\_details**: `any`

- An object containing details of any refunds.

***

### `return_meta`

> `optional` **return\_meta**: `any`

- An object containing metadata about the
return process.

***

### `returnable_date`

> `optional` **returnable\_date**: `string`

- The last date by which the item can be returned.

***

### `shipment_created_at`

> `optional` **shipment\_created\_at**: `string`

- The date and time when the
shipment was created.

***

### `shipment_created_ts`

> `optional` **shipment\_created\_ts**: `string`

- The timestamp when the shipment was created.

***

### `shipment_id`

> `optional` **shipment\_id**: `string`

- The unique identifier for the shipment.

***

### `shipment_status`

> `optional` **shipment\_status**: [`ShipmentStatus`](type-alias.ShipmentStatus.md)

***

### `show_download_invoice`

> `optional` **show\_download\_invoice**: `boolean`

- Indicates if the download
invoice option should be shown.

***

### `show_track_link`

> `optional` **show\_track\_link**: `boolean`

- Indicates if the track link should be shown.

***

### `size_info`

> `optional` **size\_info**: `any`

- An object containing size information for
the items in the shipment.

***

### `total_bags`

> `optional` **total\_bags**: `number`

- The total number of bags in the shipment.

***

### `total_details`

> `optional` **total\_details**: [`ShipmentTotalDetails`](type-alias.ShipmentTotalDetails.md)

***

### `track_url`

> `optional` **track\_url**: `string`

- The URL for tracking the shipment.

***

### `tracking_details`

> `optional` **tracking\_details**: [`TrackingDetails`](type-alias.TrackingDetails.md)[]

- An array containing
details of the tracking history of the shipment.

***

### `traking_no`

> `optional` **traking\_no**: `string`

- The tracking number for the shipment.

***

### `user_info`

> `optional` **user\_info**: [`ShipmentUserInfo`](type-alias.ShipmentUserInfo.md)

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1527

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1528

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
