[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > UserSchema

# Type alias: UserSchema

> **UserSchema**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- Unique id of the user.

***

### `account_type`

> `optional` **account\_type**: `string`

- Type of user (user, programmatic (created
by system))

***

### `active`

> `optional` **active**: `boolean`

- Is the user active.

***

### `application_id`

> `optional` **application\_id**: `string`

- Application id of the user.

***

### `created_at`

> `optional` **created\_at**: `string`

- Date and time of user creation.

***

### `dob`

> `optional` **dob**: `string`

- Date of birth of the user.

***

### `emails`

> `optional` **emails**: [`Email`](type-alias.Email.md)[]

- List of email addresses of the user.

***

### `external_id`

> `optional` **external\_id**: `string`

- Unique id referencing any user external
documents (jio).

***

### `first_name`

> `optional` **first\_name**: `string`

- First name of the user.

***

### `gender`

> `optional` **gender**: `string`

- Gender of the user.

***

### `last_name`

> `optional` **last\_name**: `string`

- Last name of the user

***

### `meta`

> `optional` **meta**: `any`

- Metadata of the user, used to store details about the user

***

### `phone_numbers`

> `optional` **phone\_numbers**: [`PhoneNumber`](type-alias.PhoneNumber.md)[]

- List of phone numbers of the user.

***

### `profile_pic_url`

> `optional` **profile\_pic\_url**: `string`

- URL of the profile picture of the user.

***

### `rr_id`

> `optional` **rr\_id**: `string`

- Unique id referencing any user external documents.

***

### `updated_at`

> `optional` **updated\_at**: `string`

- Date and time of user update.

***

### `user_id`

> `optional` **user\_id**: `string`

- Unique id of the user.

***

### `username`

> `optional` **username**: `string`

- Unique username of the user.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1823

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1824

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
