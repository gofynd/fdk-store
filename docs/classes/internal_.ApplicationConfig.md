[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ApplicationConfig

# Class: ApplicationConfig

[<internal>](../modules/internal_.md).ApplicationConfig

Represents the configuration for an application.

## Table of contents

### Constructors

- [constructor](internal_.ApplicationConfig.md#constructor)

### Properties

- [applicationID](internal_.ApplicationConfig.md#applicationid)
- [applicationToken](internal_.ApplicationConfig.md#applicationtoken)
- [cookie](internal_.ApplicationConfig.md#cookie)
- [currencyCode](internal_.ApplicationConfig.md#currencycode)
- [domain](internal_.ApplicationConfig.md#domain)
- [extraHeaders](internal_.ApplicationConfig.md#extraheaders)
- [locationDetails](internal_.ApplicationConfig.md#locationdetails)
- [logLevel](internal_.ApplicationConfig.md#loglevel)
- [opts](internal_.ApplicationConfig.md#opts)

### Methods

- [setCookie](internal_.ApplicationConfig.md#setcookie)
- [setLogLevel](internal_.ApplicationConfig.md#setloglevel)
- [validate](internal_.ApplicationConfig.md#validate)

## Constructors

### constructor

• **new ApplicationConfig**(`_conf`, `_opts?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_conf` | `Object` | The application configuration. |
| `_conf.applicationID` | `string` | The ID of the application. |
| `_conf.applicationToken?` | `string` | The token for the application. |
| `_conf.currencyCode?` | `string` | The currency code. Default is `'INR'` |
| `_conf.domain?` | `string` | The domain for API. \n Write full domain. Default is `'https://api.fynd.com'` |
| `_conf.locationDetails?` | [`LocationObject`](../modules/internal_.md#locationobject) | The location details. |
| `_conf.logLevel?` | ``"TRACE"`` \| ``"DEBUG"`` \| ``"INFO"`` \| ``"WARN"`` \| ``"ERROR"`` | The log level. Available options: TRACE, DEBUG, INFO, WARN, ERROR. Default is `'ERROR'` |
| `_opts?` | `object` | Additional options. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:23

## Properties

### applicationID

• **applicationID**: `string`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:31

___

### applicationToken

• **applicationToken**: `string`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:32

___

### cookie

• **cookie**: `string`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:52

___

### currencyCode

• **currencyCode**: `string`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:38

___

### domain

• **domain**: `string`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:34

___

### extraHeaders

• **extraHeaders**: `any`[]

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:36

___

### locationDetails

• **locationDetails**: [`LocationObject`](../modules/internal_.md#locationobject)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:37

___

### logLevel

• **logLevel**: ``"TRACE"`` \| ``"DEBUG"`` \| ``"INFO"`` \| ``"WARN"`` \| ``"ERROR"``

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:35

___

### opts

• **opts**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:33

## Methods

### setCookie

▸ **setCookie**(`cookie`): `void`

Sets the cookie for the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cookie` | `string` | The cookie to set, This cookie will be included in the headers of every subsequent request. |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:51

___

### setLogLevel

▸ **setLogLevel**(`level`): `void`

Sets the log level for the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | ``"TRACE"`` \| ``"DEBUG"`` \| ``"INFO"`` \| ``"WARN"`` \| ``"ERROR"`` | The log level to set. |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:44

___

### validate

▸ **validate**(): `void`

Validates the application configuration.

**`Throws`**

When the locationDetails validation fails.

**`Throws`**

When the credentials are invalid or missing.

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationConfig.d.ts:59
