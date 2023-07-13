[fdk-store](../README.md) / [Exports](../modules.md) / [order](order.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [AppliedFreeArticles](order._internal_.md#appliedfreearticles)
- [AppliedPromos](order._internal_.md#appliedpromos)
- [Bags](order._internal_.md#bags)
- [BagsForReorder](order._internal_.md#bagsforreorder)
- [BagsForReorderArticleAssignment](order._internal_.md#bagsforreorderarticleassignment)
- [BreakupValues](order._internal_.md#breakupvalues)
- [CurrentStatus](order._internal_.md#currentstatus)
- [DeliveryAddress](order._internal_.md#deliveryaddress)
- [FinancialBreakup](order._internal_.md#financialbreakup)
- [FulfillingCompany](order._internal_.md#fulfillingcompany)
- [FulfillingStore](order._internal_.md#fulfillingstore)
- [GetOrderByIdParam](order._internal_.md#getorderbyidparam)
- [Identifiers](order._internal_.md#identifiers)
- [Invoice](order._internal_.md#invoice)
- [Item](order._internal_.md#item)
- [ItemBrand](order._internal_.md#itembrand)
- [NestedTrackingDetails](order._internal_.md#nestedtrackingdetails)
- [OrderById](order._internal_.md#orderbyid)
- [OrderSchema](order._internal_.md#orderschema)
- [Prices](order._internal_.md#prices)
- [Promise](order._internal_.md#promise)
- [ShipmentPayment](order._internal_.md#shipmentpayment)
- [ShipmentStatus](order._internal_.md#shipmentstatus)
- [ShipmentTotalDetails](order._internal_.md#shipmenttotaldetails)
- [ShipmentUserInfo](order._internal_.md#shipmentuserinfo)
- [Shipments](order._internal_.md#shipments)
- [TimeStampData](order._internal_.md#timestampdata)
- [TrackingDetails](order._internal_.md#trackingdetails)
- [UserInfo](order._internal_.md#userinfo)

### Functions

- [AppliedFreeArticles](order._internal_.md#appliedfreearticles-1)
- [AppliedPromos](order._internal_.md#appliedpromos-1)
- [Bags](order._internal_.md#bags-1)
- [BagsForReorder](order._internal_.md#bagsforreorder-1)
- [BagsForReorderArticleAssignment](order._internal_.md#bagsforreorderarticleassignment-1)
- [BreakupValues](order._internal_.md#breakupvalues-1)
- [CurrentStatus](order._internal_.md#currentstatus-1)
- [DeliveryAddress](order._internal_.md#deliveryaddress-1)
- [FinancialBreakup](order._internal_.md#financialbreakup-1)
- [FulfillingCompany](order._internal_.md#fulfillingcompany-1)
- [FulfillingStore](order._internal_.md#fulfillingstore-1)
- [Identifiers](order._internal_.md#identifiers-1)
- [Invoice](order._internal_.md#invoice-1)
- [Item](order._internal_.md#item-1)
- [ItemBrand](order._internal_.md#itembrand-1)
- [NestedTrackingDetails](order._internal_.md#nestedtrackingdetails-1)
- [OrderById](order._internal_.md#orderbyid-1)
- [OrderSchema](order._internal_.md#orderschema-1)
- [Prices](order._internal_.md#prices-1)
- [Promise](order._internal_.md#promise-1)
- [ShipmentPayment](order._internal_.md#shipmentpayment-1)
- [ShipmentStatus](order._internal_.md#shipmentstatus-1)
- [ShipmentTotalDetails](order._internal_.md#shipmenttotaldetails-1)
- [ShipmentUserInfo](order._internal_.md#shipmentuserinfo-1)
- [Shipments](order._internal_.md#shipments-1)
- [TimeStampData](order._internal_.md#timestampdata-1)
- [TrackingDetails](order._internal_.md#trackingdetails-1)
- [UserInfo](order._internal_.md#userinfo-1)

## Type Aliases

### AppliedFreeArticles

Ƭ **AppliedFreeArticles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `article_id?` | `string` |
| `free_gift_item_details?` | `any` |
| `parent_item_identifier?` | `string` |
| `quantity?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:578

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:579

___

### AppliedPromos

Ƭ **AppliedPromos**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount?` | `number` |
| `applied_free_articles?` | [`AppliedFreeArticles`](order._internal_.md#appliedfreearticles)[] |
| `article_quantity?` | `number` |
| `mrp_promotion?` | `boolean` |
| `promo_id?` | `string` |
| `promotion_name?` | `string` |
| `promotion_type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:586

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:587

___

### Bags

Ƭ **Bags**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `applied_promos?` | [`AppliedPromos`](order._internal_.md#appliedpromos)[] |
| `can_cancel?` | `boolean` |
| `can_return?` | `boolean` |
| `currency_code?` | `string` |
| `currency_symbol?` | `string` |
| `current_status?` | [`CurrentStatus`](order._internal_.md#currentstatus) |
| `delivery_date?` | `string` |
| `financial_breakup?` | [`FinancialBreakup`](order._internal_.md#financialbreakup)[] |
| `id?` | `number` |
| `item?` | [`Item`](order._internal_.md#item) |
| `line_number?` | `number` |
| `meta?` | `any` |
| `parent_promo_bags?` | `any` |
| `prices?` | [`Prices`](order._internal_.md#prices) |
| `quantity?` | `number` |
| `returnable_date?` | `string` |
| `seller_identifier?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:612

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:613

___

### BagsForReorder

Ƭ **BagsForReorder**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `article_assignment?` | [`BagsForReorderArticleAssignment`](order._internal_.md#bagsforreorderarticleassignment) |
| `item_id?` | `number` |
| `item_size?` | `string` |
| `quantity?` | `number` |
| `seller_id?` | `number` |
| `store_id?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:633

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:634

___

### BagsForReorderArticleAssignment

Ƭ **BagsForReorderArticleAssignment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `level?` | `string` |
| `strategy?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:643

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:644

___

### BreakupValues

Ƭ **BreakupValues**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currency_code?` | `string` |
| `currency_symbol?` | `string` |
| `display?` | `string` |
| `name?` | `string` |
| `value?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:649

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:650

___

### CurrentStatus

Ƭ **CurrentStatus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created_at?` | `string` |
| `journey_type?` | `string` |
| `name?` | `string` |
| `status?` | `string` |
| `updated_at?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:667

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:668

___

### DeliveryAddress

Ƭ **DeliveryAddress**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | `string` |
| `address1?` | `string` |
| `address2?` | `string` |
| `address_category?` | `string` |
| `address_type?` | `string` |
| `area?` | `string` |
| `city?` | `string` |
| `contact_person?` | `string` |
| `country?` | `string` |
| `country_iso_code?` | `string` |
| `country_phone_code?` | `string` |
| `created_at?` | `string` |
| `email?` | `string` |
| `landmark?` | `string` |
| `latitude?` | `number` |
| `longitude?` | `number` |
| `name?` | `string` |
| `phone?` | `string` |
| `pincode?` | `string` |
| `state?` | `string` |
| `updated_at?` | `string` |
| `version?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:691

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:692

___

### FinancialBreakup

Ƭ **FinancialBreakup**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `added_to_fynd_cash?` | `boolean` |
| `amount_paid?` | `number` |
| `amount_paid_roundoff?` | `number` |
| `brand_calculated_amount?` | `number` |
| `cashback?` | `number` |
| `cashback_applied?` | `number` |
| `cod_charges?` | `number` |
| `coupon_effective_discount?` | `number` |
| `coupon_value?` | `number` |
| `delivery_charge?` | `number` |
| `discount?` | `number` |
| `fynd_credits?` | `number` |
| `gst_fee?` | `number` |
| `gst_tag?` | `string` |
| `gst_tax_percentage?` | `number` |
| `hsn_code?` | `string` |
| `identifiers?` | [`Identifiers`](order._internal_.md#identifiers) |
| `item_name?` | `string` |
| `price_effective?` | `number` |
| `price_marked?` | `number` |
| `promotion_effective_discount?` | `number` |
| `refund_amount?` | `number` |
| `refund_credit?` | `number` |
| `size?` | `string` |
| `total_units?` | `number` |
| `transfer_price?` | `number` |
| `value_of_good?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:744

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:745

___

### FulfillingCompany

Ƭ **FulfillingCompany**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `number` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:775

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:776

___

### FulfillingStore

Ƭ **FulfillingStore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `string` |
| `company_id?` | `number` |
| `company_name?` | `string` |
| `id?` | `number` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:781

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:782

___

### GetOrderByIdParam

Ƭ **GetOrderByIdParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | - A unique number used for identifying and tracking your orders. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationValidator.d.ts:150

___

### Identifiers

Ƭ **Identifiers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ean?` | `string` |
| `sku_code?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:790

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:791

___

### Invoice

Ƭ **Invoice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `invoice_url?` | `string` |
| `label_url?` | `string` |
| `updated_date?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:796

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:797

___

### Item

Ƭ **Item**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `brand?` | [`ItemBrand`](order._internal_.md#itembrand) |
| `code?` | `string` |
| `id?` | `number` |
| `image?` | `string`[] |
| `l1_categories?` | `string`[] |
| `l2_categories?` | `string`[] |
| `l3_category_name?` | `string` |
| `name?` | `string` |
| `seller_identifier?` | `string` |
| `size?` | `string` |
| `slug_key?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:803

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:804

___

### ItemBrand

Ƭ **ItemBrand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `logo?` | `string` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:818

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:819

___

### NestedTrackingDetails

Ƭ **NestedTrackingDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `is_current?` | `boolean` |
| `is_passed?` | `boolean` |
| `status?` | `string` |
| `time?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:824

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:825

___

### OrderById

Ƭ **OrderById**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `order?` | [`OrderSchema`](order._internal_.md#orderschema) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:832

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:833

___

### OrderSchema

Ƭ **OrderSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bags_for_reorder?` | [`BagsForReorder`](order._internal_.md#bagsforreorder)[] |
| `breakup_values?` | [`BreakupValues`](order._internal_.md#breakupvalues)[] |
| `order_created_time?` | `string` |
| `order_id?` | `string` |
| `shipments?` | [`Shipments`](order._internal_.md#shipments)[] |
| `total_shipments_in_order?` | `number` |
| `user_info?` | [`UserInfo`](order._internal_.md#userinfo) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:858

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:859

___

### Prices

Ƭ **Prices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `added_to_fynd_cash?` | `boolean` |
| `amount_paid?` | `number` |
| `amount_paid_roundoff?` | `number` |
| `brand_calculated_amount?` | `number` |
| `cashback?` | `number` |
| `cashback_applied?` | `number` |
| `cod_charges?` | `number` |
| `coupon_effective_discount?` | `number` |
| `coupon_value?` | `number` |
| `currency_code?` | `string` |
| `currency_symbol?` | `string` |
| `delivery_charge?` | `number` |
| `discount?` | `number` |
| `fynd_credits?` | `number` |
| `gst_tax_percentage?` | `number` |
| `price_effective?` | `number` |
| `price_marked?` | `number` |
| `promotion_effective_discount?` | `number` |
| `refund_amount?` | `number` |
| `refund_credit?` | `number` |
| `transfer_price?` | `number` |
| `value_of_good?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:876

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:877

___

### Promise

Ƭ **Promise**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `show_promise?` | `boolean` |
| `timestamp?` | [`TimeStampData`](order._internal_.md#timestampdata) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:983

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:984

___

### ShipmentPayment

Ƭ **ShipmentPayment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display_name?` | `string` |
| `logo?` | `string` |
| `mode?` | `string` |
| `mop?` | `string` |
| `payment_mode?` | `string` |
| `status?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1033

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1034

___

### ShipmentStatus

Ƭ **ShipmentStatus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hex_code?` | `string` |
| `title?` | `string` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1106

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1107

___

### ShipmentTotalDetails

Ƭ **ShipmentTotalDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pieces?` | `number` |
| `sizes?` | `number` |
| `total_price?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1113

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1114

___

### ShipmentUserInfo

Ƭ **ShipmentUserInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email?` | `string` |
| `first_name?` | `string` |
| `gender?` | `string` |
| `last_name?` | `string` |
| `mobile?` | `string` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1125

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1126

___

### Shipments

Ƭ **Shipments**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `awb_no?` | `string` |
| `bags?` | [`Bags`](order._internal_.md#bags)[] |
| `beneficiary_details?` | `boolean` |
| `breakup_values?` | [`BreakupValues`](order._internal_.md#breakupvalues)[] |
| `can_break?` | `any` |
| `can_cancel?` | `boolean` |
| `can_return?` | `boolean` |
| `comment?` | `string` |
| `custom_meta?` | `any`[] |
| `delivery_address?` | [`DeliveryAddress`](order._internal_.md#deliveryaddress) |
| `delivery_date?` | `string` |
| `dp_name?` | `string` |
| `fulfilling_company?` | [`FulfillingCompany`](order._internal_.md#fulfillingcompany) |
| `fulfilling_store?` | [`FulfillingStore`](order._internal_.md#fulfillingstore) |
| `invoice?` | [`Invoice`](order._internal_.md#invoice) |
| `need_help_url?` | `string` |
| `order_id?` | `string` |
| `order_type?` | `string` |
| `payment?` | [`ShipmentPayment`](order._internal_.md#shipmentpayment) |
| `prices?` | [`Prices`](order._internal_.md#prices) |
| `promise?` | [`Promise`](order._internal_.md#promise) |
| `refund_details?` | `any` |
| `return_meta?` | `any` |
| `returnable_date?` | `string` |
| `shipment_created_at?` | `string` |
| `shipment_id?` | `string` |
| `shipment_status?` | [`ShipmentStatus`](order._internal_.md#shipmentstatus) |
| `show_download_invoice?` | `boolean` |
| `show_track_link?` | `boolean` |
| `size_info?` | `any` |
| `total_bags?` | `number` |
| `total_details?` | [`ShipmentTotalDetails`](order._internal_.md#shipmenttotaldetails) |
| `track_url?` | `string` |
| `tracking_details?` | [`TrackingDetails`](order._internal_.md#trackingdetails)[] |
| `traking_no?` | `string` |
| `user_info?` | [`ShipmentUserInfo`](order._internal_.md#shipmentuserinfo) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1058

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1059

___

### TimeStampData

Ƭ **TimeStampData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `string` |
| `min?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1147

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1148

___

### TrackingDetails

Ƭ **TrackingDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `is_current?` | `boolean` |
| `is_passed?` | `boolean` |
| `status?` | `string` |
| `time?` | `string` |
| `tracking_details?` | [`NestedTrackingDetails`](order._internal_.md#nestedtrackingdetails)[] |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1165

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1166

___

### UserInfo

Ƭ **UserInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email?` | `string` |
| `first_name?` | `string` |
| `gender?` | `string` |
| `last_name?` | `string` |
| `mobile?` | `string` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1184

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1185

## Functions

### AppliedFreeArticles

▸ **AppliedFreeArticles**(): [`AppliedFreeArticles`](order._internal_.md#appliedfreearticles)

#### Returns

[`AppliedFreeArticles`](order._internal_.md#appliedfreearticles)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:578

___

### AppliedPromos

▸ **AppliedPromos**(): [`AppliedPromos`](order._internal_.md#appliedpromos)

#### Returns

[`AppliedPromos`](order._internal_.md#appliedpromos)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:586

___

### Bags

▸ **Bags**(): [`Bags`](order._internal_.md#bags)

#### Returns

[`Bags`](order._internal_.md#bags)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:612

___

### BagsForReorder

▸ **BagsForReorder**(): [`BagsForReorder`](order._internal_.md#bagsforreorder)

#### Returns

[`BagsForReorder`](order._internal_.md#bagsforreorder)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:633

___

### BagsForReorderArticleAssignment

▸ **BagsForReorderArticleAssignment**(): [`BagsForReorderArticleAssignment`](order._internal_.md#bagsforreorderarticleassignment)

#### Returns

[`BagsForReorderArticleAssignment`](order._internal_.md#bagsforreorderarticleassignment)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:643

___

### BreakupValues

▸ **BreakupValues**(): [`BreakupValues`](order._internal_.md#breakupvalues)

#### Returns

[`BreakupValues`](order._internal_.md#breakupvalues)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:649

___

### CurrentStatus

▸ **CurrentStatus**(): [`CurrentStatus`](order._internal_.md#currentstatus)

#### Returns

[`CurrentStatus`](order._internal_.md#currentstatus)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:667

___

### DeliveryAddress

▸ **DeliveryAddress**(): [`DeliveryAddress`](order._internal_.md#deliveryaddress)

#### Returns

[`DeliveryAddress`](order._internal_.md#deliveryaddress)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:691

___

### FinancialBreakup

▸ **FinancialBreakup**(): [`FinancialBreakup`](order._internal_.md#financialbreakup)

#### Returns

[`FinancialBreakup`](order._internal_.md#financialbreakup)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:744

___

### FulfillingCompany

▸ **FulfillingCompany**(): [`FulfillingCompany`](order._internal_.md#fulfillingcompany)

#### Returns

[`FulfillingCompany`](order._internal_.md#fulfillingcompany)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:775

___

### FulfillingStore

▸ **FulfillingStore**(): [`FulfillingStore`](order._internal_.md#fulfillingstore)

#### Returns

[`FulfillingStore`](order._internal_.md#fulfillingstore)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:781

___

### Identifiers

▸ **Identifiers**(): [`Identifiers`](order._internal_.md#identifiers)

#### Returns

[`Identifiers`](order._internal_.md#identifiers)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:790

___

### Invoice

▸ **Invoice**(): [`Invoice`](order._internal_.md#invoice)

#### Returns

[`Invoice`](order._internal_.md#invoice)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:796

___

### Item

▸ **Item**(): [`Item`](order._internal_.md#item)

#### Returns

[`Item`](order._internal_.md#item)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:803

___

### ItemBrand

▸ **ItemBrand**(): [`ItemBrand`](order._internal_.md#itembrand)

#### Returns

[`ItemBrand`](order._internal_.md#itembrand)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:818

___

### NestedTrackingDetails

▸ **NestedTrackingDetails**(): [`NestedTrackingDetails`](order._internal_.md#nestedtrackingdetails)

#### Returns

[`NestedTrackingDetails`](order._internal_.md#nestedtrackingdetails)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:824

___

### OrderById

▸ **OrderById**(): [`OrderById`](order._internal_.md#orderbyid)

#### Returns

[`OrderById`](order._internal_.md#orderbyid)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:832

___

### OrderSchema

▸ **OrderSchema**(): [`OrderSchema`](order._internal_.md#orderschema)

#### Returns

[`OrderSchema`](order._internal_.md#orderschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:858

___

### Prices

▸ **Prices**(): [`Prices`](order._internal_.md#prices)

#### Returns

[`Prices`](order._internal_.md#prices)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:876

___

### Promise

▸ **Promise**(): [`Promise`](order._internal_.md#promise)

#### Returns

[`Promise`](order._internal_.md#promise)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:983

___

### ShipmentPayment

▸ **ShipmentPayment**(): [`ShipmentPayment`](order._internal_.md#shipmentpayment)

#### Returns

[`ShipmentPayment`](order._internal_.md#shipmentpayment)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1033

___

### ShipmentStatus

▸ **ShipmentStatus**(): [`ShipmentStatus`](order._internal_.md#shipmentstatus)

#### Returns

[`ShipmentStatus`](order._internal_.md#shipmentstatus)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1106

___

### ShipmentTotalDetails

▸ **ShipmentTotalDetails**(): [`ShipmentTotalDetails`](order._internal_.md#shipmenttotaldetails)

#### Returns

[`ShipmentTotalDetails`](order._internal_.md#shipmenttotaldetails)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1113

___

### ShipmentUserInfo

▸ **ShipmentUserInfo**(): [`ShipmentUserInfo`](order._internal_.md#shipmentuserinfo)

#### Returns

[`ShipmentUserInfo`](order._internal_.md#shipmentuserinfo)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1125

___

### Shipments

▸ **Shipments**(): [`Shipments`](order._internal_.md#shipments)

#### Returns

[`Shipments`](order._internal_.md#shipments)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1058

___

### TimeStampData

▸ **TimeStampData**(): [`TimeStampData`](order._internal_.md#timestampdata)

#### Returns

[`TimeStampData`](order._internal_.md#timestampdata)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1147

___

### TrackingDetails

▸ **TrackingDetails**(): [`TrackingDetails`](order._internal_.md#trackingdetails)

#### Returns

[`TrackingDetails`](order._internal_.md#trackingdetails)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1165

___

### UserInfo

▸ **UserInfo**(): [`UserInfo`](order._internal_.md#userinfo)

#### Returns

[`UserInfo`](order._internal_.md#userinfo)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1184
