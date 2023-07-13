[fdk-store](../README.md) / [Exports](../modules.md) / [logistic](logistic.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [CountryEntityResponse](logistic._internal_.md#countryentityresponse)
- [CountryListResponse](logistic._internal_.md#countrylistresponse)
- [CountryMetaResponse](logistic._internal_.md#countrymetaresponse)
- [GetPincodeCityParam](logistic._internal_.md#getpincodecityparam)
- [GetTatProductParam](logistic._internal_.md#gettatproductparam)
- [LogisticsResponse](logistic._internal_.md#logisticsresponse)
- [PincodeApiResponse](logistic._internal_.md#pincodeapiresponse)
- [PincodeDataResponse](logistic._internal_.md#pincodedataresponse)
- [PincodeErrorSchemaResponse](logistic._internal_.md#pincodeerrorschemaresponse)
- [PincodeLatLongData](logistic._internal_.md#pincodelatlongdata)
- [PincodeMetaResponse](logistic._internal_.md#pincodemetaresponse)
- [PincodeParentsResponse](logistic._internal_.md#pincodeparentsresponse)
- [TATArticlesRequest](logistic._internal_.md#tatarticlesrequest)
- [TATArticlesResponse](logistic._internal_.md#tatarticlesresponse)
- [TATCategoryRequest](logistic._internal_.md#tatcategoryrequest)
- [TATErrorSchemaResponse](logistic._internal_.md#taterrorschemaresponse)
- [TATFormattedResponse](logistic._internal_.md#tatformattedresponse)
- [TATLocationDetailsRequest](logistic._internal_.md#tatlocationdetailsrequest)
- [TATLocationDetailsResponse](logistic._internal_.md#tatlocationdetailsresponse)
- [TATPromiseResponse](logistic._internal_.md#tatpromiseresponse)
- [TATTimestampResponse](logistic._internal_.md#tattimestampresponse)
- [TATViewRequest](logistic._internal_.md#tatviewrequest)
- [TATViewResponse](logistic._internal_.md#tatviewresponse)

### Functions

- [CountryEntityResponse](logistic._internal_.md#countryentityresponse-1)
- [CountryListResponse](logistic._internal_.md#countrylistresponse-1)
- [CountryMetaResponse](logistic._internal_.md#countrymetaresponse-1)
- [LogisticsResponse](logistic._internal_.md#logisticsresponse-1)
- [PincodeApiResponse](logistic._internal_.md#pincodeapiresponse-1)
- [PincodeDataResponse](logistic._internal_.md#pincodedataresponse-1)
- [PincodeErrorSchemaResponse](logistic._internal_.md#pincodeerrorschemaresponse-1)
- [PincodeLatLongData](logistic._internal_.md#pincodelatlongdata-1)
- [PincodeMetaResponse](logistic._internal_.md#pincodemetaresponse-1)
- [PincodeParentsResponse](logistic._internal_.md#pincodeparentsresponse-1)
- [TATArticlesRequest](logistic._internal_.md#tatarticlesrequest-1)
- [TATArticlesResponse](logistic._internal_.md#tatarticlesresponse-1)
- [TATCategoryRequest](logistic._internal_.md#tatcategoryrequest-1)
- [TATErrorSchemaResponse](logistic._internal_.md#taterrorschemaresponse-1)
- [TATFormattedResponse](logistic._internal_.md#tatformattedresponse-1)
- [TATLocationDetailsRequest](logistic._internal_.md#tatlocationdetailsrequest-1)
- [TATLocationDetailsResponse](logistic._internal_.md#tatlocationdetailsresponse-1)
- [TATPromiseResponse](logistic._internal_.md#tatpromiseresponse-1)
- [TATTimestampResponse](logistic._internal_.md#tattimestampresponse-1)
- [TATViewRequest](logistic._internal_.md#tatviewrequest-1)
- [TATViewResponse](logistic._internal_.md#tatviewresponse-1)

## Type Aliases

### CountryEntityResponse

Ƭ **CountryEntityResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display_name?` | `string` |
| `is_active?` | `boolean` |
| `logistics?` | [`LogisticsResponse`](logistic._internal_.md#logisticsresponse) |
| `meta?` | [`CountryMetaResponse`](logistic._internal_.md#countrymetaresponse) |
| `name?` | `string` |
| `parent_id?` | `string` |
| `sub_type?` | `string` |
| `type?` | `string` |
| `uid?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:245

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:246

___

### CountryListResponse

Ƭ **CountryListResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `results?` | [`CountryEntityResponse`](logistic._internal_.md#countryentityresponse)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:258

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:259

___

### CountryMetaResponse

Ƭ **CountryMetaResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `country_code?` | `string` |
| `isd_code?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:263

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:264

___

### GetPincodeCityParam

Ƭ **GetPincodeCityParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pincode` | `string` | - A `pincode` contains a specific address of a location. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationValidator.d.ts:81

___

### GetTatProductParam

Ƭ **GetTatProductParam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`TATViewRequest`](logistic._internal_.md#tatviewrequest) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationValidator.d.ts:90

___

### LogisticsResponse

Ƭ **LogisticsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dp?` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:331

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:332

___

### PincodeApiResponse

Ƭ **PincodeApiResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | [`PincodeDataResponse`](logistic._internal_.md#pincodedataresponse)[] |
| `error` | [`PincodeErrorSchemaResponse`](logistic._internal_.md#pincodeerrorschemaresponse) |
| `success` | `boolean` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:347

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:348

___

### PincodeDataResponse

Ƭ **PincodeDataResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display_name?` | `string` |
| `error` | [`PincodeErrorSchemaResponse`](logistic._internal_.md#pincodeerrorschemaresponse) |
| `lat_long?` | [`PincodeLatLongData`](logistic._internal_.md#pincodelatlongdata) |
| `meta?` | [`PincodeMetaResponse`](logistic._internal_.md#pincodemetaresponse) |
| `meta_code?` | [`CountryMetaResponse`](logistic._internal_.md#countrymetaresponse) |
| `name?` | `string` |
| `parents?` | [`PincodeParentsResponse`](logistic._internal_.md#pincodeparentsresponse)[] |
| `sub_type?` | `string` |
| `uid?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:354

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:355

___

### PincodeErrorSchemaResponse

Ƭ **PincodeErrorSchemaResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `type?` | `string` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:367

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:368

___

### PincodeLatLongData

Ƭ **PincodeLatLongData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coordinates?` | `string`[] |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:374

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:375

___

### PincodeMetaResponse

Ƭ **PincodeMetaResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `internal_zone_id?` | `number` |
| `zone?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:380

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:381

___

### PincodeParentsResponse

Ƭ **PincodeParentsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display_name?` | `string` |
| `name?` | `string` |
| `sub_type?` | `string` |
| `uid?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:386

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:387

___

### TATArticlesRequest

Ƭ **TATArticlesRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `category?` | [`TATCategoryRequest`](logistic._internal_.md#tatcategoryrequest) |
| `manufacturing_time?` | `number` |
| `manufacturing_time_unit?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:425

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:426

___

### TATArticlesResponse

Ƭ **TATArticlesResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_manufacturing_time_seconds?` | `number` |
| `category?` | [`TATCategoryRequest`](logistic._internal_.md#tatcategoryrequest) |
| `error?` | [`TATErrorSchemaResponse`](logistic._internal_.md#taterrorschemaresponse) |
| `is_cod_available?` | `boolean` |
| `manufacturing_time?` | `number` |
| `manufacturing_time_unit?` | `string` |
| `promise?` | [`TATPromiseResponse`](logistic._internal_.md#tatpromiseresponse) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:432

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:433

___

### TATCategoryRequest

Ƭ **TATCategoryRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `number` |
| `level?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:443

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:444

___

### TATErrorSchemaResponse

Ƭ **TATErrorSchemaResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `type?` | `string` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:449

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:450

___

### TATFormattedResponse

Ƭ **TATFormattedResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `string` |
| `min?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:456

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:457

___

### TATLocationDetailsRequest

Ƭ **TATLocationDetailsRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `articles?` | [`TATArticlesRequest`](logistic._internal_.md#tatarticlesrequest)[] |
| `from_pincode?` | `string` |
| `fulfillment_id?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:462

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:463

___

### TATLocationDetailsResponse

Ƭ **TATLocationDetailsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `articles?` | [`TATArticlesResponse`](logistic._internal_.md#tatarticlesresponse)[] |
| `from_pincode?` | `string` |
| `fulfillment_id?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:469

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:470

___

### TATPromiseResponse

Ƭ **TATPromiseResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `formatted?` | [`TATFormattedResponse`](logistic._internal_.md#tatformattedresponse) |
| `timestamp?` | [`TATTimestampResponse`](logistic._internal_.md#tattimestampresponse) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:476

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:477

___

### TATTimestampResponse

Ƭ **TATTimestampResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `number` |
| `min?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:482

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:483

___

### TATViewRequest

Ƭ **TATViewRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | `string` |
| `identifier?` | `string` |
| `journey?` | `string` |
| `location_details?` | [`TATLocationDetailsRequest`](logistic._internal_.md#tatlocationdetailsrequest)[] |
| `source?` | `string` |
| `to_pincode?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:488

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:489

___

### TATViewResponse

Ƭ **TATViewResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | `string` |
| `error?` | [`TATErrorSchemaResponse`](logistic._internal_.md#taterrorschemaresponse) |
| `identifier?` | `string` |
| `is_cod_available?` | `boolean` |
| `journey?` | `string` |
| `location_details?` | [`TATLocationDetailsResponse`](logistic._internal_.md#tatlocationdetailsresponse)[] |
| `payment_mode?` | `string` |
| `request_uuid?` | `string` |
| `source?` | `string` |
| `stormbreaker_uuid?` | `string` |
| `success?` | `boolean` |
| `to_city?` | `string` |
| `to_pincode?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:498

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:499

## Functions

### CountryEntityResponse

▸ **CountryEntityResponse**(): [`CountryEntityResponse`](logistic._internal_.md#countryentityresponse)

#### Returns

[`CountryEntityResponse`](logistic._internal_.md#countryentityresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:245

___

### CountryListResponse

▸ **CountryListResponse**(): [`CountryListResponse`](logistic._internal_.md#countrylistresponse)

#### Returns

[`CountryListResponse`](logistic._internal_.md#countrylistresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:258

___

### CountryMetaResponse

▸ **CountryMetaResponse**(): [`CountryMetaResponse`](logistic._internal_.md#countrymetaresponse)

#### Returns

[`CountryMetaResponse`](logistic._internal_.md#countrymetaresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:263

___

### LogisticsResponse

▸ **LogisticsResponse**(): [`LogisticsResponse`](logistic._internal_.md#logisticsresponse)

#### Returns

[`LogisticsResponse`](logistic._internal_.md#logisticsresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:331

___

### PincodeApiResponse

▸ **PincodeApiResponse**(): [`PincodeApiResponse`](logistic._internal_.md#pincodeapiresponse)

#### Returns

[`PincodeApiResponse`](logistic._internal_.md#pincodeapiresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:347

___

### PincodeDataResponse

▸ **PincodeDataResponse**(): [`PincodeDataResponse`](logistic._internal_.md#pincodedataresponse)

#### Returns

[`PincodeDataResponse`](logistic._internal_.md#pincodedataresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:354

___

### PincodeErrorSchemaResponse

▸ **PincodeErrorSchemaResponse**(): [`PincodeErrorSchemaResponse`](logistic._internal_.md#pincodeerrorschemaresponse)

#### Returns

[`PincodeErrorSchemaResponse`](logistic._internal_.md#pincodeerrorschemaresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:367

___

### PincodeLatLongData

▸ **PincodeLatLongData**(): [`PincodeLatLongData`](logistic._internal_.md#pincodelatlongdata)

#### Returns

[`PincodeLatLongData`](logistic._internal_.md#pincodelatlongdata)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:374

___

### PincodeMetaResponse

▸ **PincodeMetaResponse**(): [`PincodeMetaResponse`](logistic._internal_.md#pincodemetaresponse)

#### Returns

[`PincodeMetaResponse`](logistic._internal_.md#pincodemetaresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:380

___

### PincodeParentsResponse

▸ **PincodeParentsResponse**(): [`PincodeParentsResponse`](logistic._internal_.md#pincodeparentsresponse)

#### Returns

[`PincodeParentsResponse`](logistic._internal_.md#pincodeparentsresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:386

___

### TATArticlesRequest

▸ **TATArticlesRequest**(): [`TATArticlesRequest`](logistic._internal_.md#tatarticlesrequest)

#### Returns

[`TATArticlesRequest`](logistic._internal_.md#tatarticlesrequest)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:425

___

### TATArticlesResponse

▸ **TATArticlesResponse**(): [`TATArticlesResponse`](logistic._internal_.md#tatarticlesresponse)

#### Returns

[`TATArticlesResponse`](logistic._internal_.md#tatarticlesresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:432

___

### TATCategoryRequest

▸ **TATCategoryRequest**(): [`TATCategoryRequest`](logistic._internal_.md#tatcategoryrequest)

#### Returns

[`TATCategoryRequest`](logistic._internal_.md#tatcategoryrequest)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:443

___

### TATErrorSchemaResponse

▸ **TATErrorSchemaResponse**(): [`TATErrorSchemaResponse`](logistic._internal_.md#taterrorschemaresponse)

#### Returns

[`TATErrorSchemaResponse`](logistic._internal_.md#taterrorschemaresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:449

___

### TATFormattedResponse

▸ **TATFormattedResponse**(): [`TATFormattedResponse`](logistic._internal_.md#tatformattedresponse)

#### Returns

[`TATFormattedResponse`](logistic._internal_.md#tatformattedresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:456

___

### TATLocationDetailsRequest

▸ **TATLocationDetailsRequest**(): [`TATLocationDetailsRequest`](logistic._internal_.md#tatlocationdetailsrequest)

#### Returns

[`TATLocationDetailsRequest`](logistic._internal_.md#tatlocationdetailsrequest)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:462

___

### TATLocationDetailsResponse

▸ **TATLocationDetailsResponse**(): [`TATLocationDetailsResponse`](logistic._internal_.md#tatlocationdetailsresponse)

#### Returns

[`TATLocationDetailsResponse`](logistic._internal_.md#tatlocationdetailsresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:469

___

### TATPromiseResponse

▸ **TATPromiseResponse**(): [`TATPromiseResponse`](logistic._internal_.md#tatpromiseresponse)

#### Returns

[`TATPromiseResponse`](logistic._internal_.md#tatpromiseresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:476

___

### TATTimestampResponse

▸ **TATTimestampResponse**(): [`TATTimestampResponse`](logistic._internal_.md#tattimestampresponse)

#### Returns

[`TATTimestampResponse`](logistic._internal_.md#tattimestampresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:482

___

### TATViewRequest

▸ **TATViewRequest**(): [`TATViewRequest`](logistic._internal_.md#tatviewrequest)

#### Returns

[`TATViewRequest`](logistic._internal_.md#tatviewrequest)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:488

___

### TATViewResponse

▸ **TATViewResponse**(): [`TATViewResponse`](logistic._internal_.md#tatviewresponse)

#### Returns

[`TATViewResponse`](logistic._internal_.md#tatviewresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:498
