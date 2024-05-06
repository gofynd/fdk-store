[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [lead](../../README.md) > [<internal>](../README.md) > CustomForm

# Type alias: CustomForm

> **CustomForm**: `object`

## Type declaration

### `_id`

> **\_id**: `string`

- Unique identifier for the form

***

### `application_id`

> **application\_id**: `string`

- Application ID for form

***

### `created_on`

> `optional` **created\_on**: [`CreatedOn`](type-alias.CreatedOn.md)

***

### `description`

> `optional` **description**: `string`

- Form description that will be shown to the user

***

### `header_image`

> `optional` **header\_image**: `string`

- Form header image that will be shown to the user

***

### `inputs`

> **inputs**: `any`[]

- List of all the form fields

***

### `login_required`

> **login\_required**: `boolean`

- Denotes if login is required to make a
form response submission

***

### `poll_for_assignment`

> `optional` **poll\_for\_assignment**: [`PollForAssignment`](type-alias.PollForAssignment.md)

***

### `priority`

> **priority**: [`Priority`](type-alias.Priority.md)

***

### `should_notify`

> **should\_notify**: `boolean`

- Denotes if new response submission for
the form should be notified to the assignees

***

### `slug`

> **slug**: `string`

- Slug for the form, which is to be used for accessing the form

***

### `submit_button`

> `optional` **submit\_button**: [`SubmitButton`](type-alias.SubmitButton.md)

***

### `success_message`

> `optional` **success\_message**: `string`

- Message that is to be shown on
succesfull form response submission

***

### `title`

> **title**: `string`

- Form title that will be shown to the user

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Lead/LeadApplicationModel.d.ts:486

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Lead/LeadApplicationModel.d.ts:487

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
