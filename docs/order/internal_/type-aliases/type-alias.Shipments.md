[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > Shipments

# Type alias: Shipments

> **Shipments**: `object`

## Type declaration

### awb_no

`optional` **awb_no**: `string`

---

### bags

`optional` **bags**: [`Bags`](type-alias.Bags.md)[]

---

### beneficiary_details

`optional` **beneficiary_details**: `boolean`

---

### breakup_values

`optional` **breakup_values**: [`BreakupValues`](type-alias.BreakupValues.md)[]

---

### can_break

`optional` **can_break**: `any`

---

### can_cancel

`optional` **can_cancel**: `boolean`

---

### can_return

`optional` **can_return**: `boolean`

---

### comment

`optional` **comment**: `string`

---

### custom_meta

`optional` **custom_meta**: `any`[]

---

### delivery_address

`optional` **delivery_address**: [`DeliveryAddress`](type-alias.DeliveryAddress.md)

---

### delivery_date

`optional` **delivery_date**: `string`

---

### dp_name

`optional` **dp_name**: `string`

---

### fulfilling_company

`optional` **fulfilling_company**: [`FulfillingCompany`](type-alias.FulfillingCompany.md)

---

### fulfilling_store

`optional` **fulfilling_store**: [`FulfillingStore`](type-alias.FulfillingStore.md)

---

### invoice

`optional` **invoice**: [`Invoice`](type-alias.Invoice.md)

---

### need_help_url

`optional` **need_help_url**: `string`

---

### order_id

`optional` **order_id**: `string`

---

### order_type

`optional` **order_type**: `string`

---

### payment

`optional` **payment**: [`ShipmentPayment`](type-alias.ShipmentPayment.md)

---

### prices

`optional` **prices**: [`Prices`](type-alias.Prices.md)

---

### promise

`optional` **promise**: [`Promise`](type-alias.Promise.md)

---

### refund_details

`optional` **refund_details**: `any`

---

### return_meta

`optional` **return_meta**: `any`

---

### returnable_date

`optional` **returnable_date**: `string`

---

### shipment_created_at

`optional` **shipment_created_at**: `string`

---

### shipment_id

`optional` **shipment_id**: `string`

---

### shipment_status

`optional` **shipment_status**: [`ShipmentStatus`](type-alias.ShipmentStatus.md)

---

### show_download_invoice

`optional` **show_download_invoice**: `boolean`

---

### show_track_link

`optional` **show_track_link**: `boolean`

---

### size_info

`optional` **size_info**: `any`

---

### total_bags

`optional` **total_bags**: `number`

---

### total_details

`optional` **total_details**: [`ShipmentTotalDetails`](type-alias.ShipmentTotalDetails.md)

---

### track_url

`optional` **track_url**: `string`

---

### tracking_details

`optional` **tracking_details**: [`TrackingDetails`](type-alias.TrackingDetails.md)[]

---

### traking_no

`optional` **traking_no**: `string`

---

### user_info

`optional` **user_info**: [`ShipmentUserInfo`](type-alias.ShipmentUserInfo.md)

## Source

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1058

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1059

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
