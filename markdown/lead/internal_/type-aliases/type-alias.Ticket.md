[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [lead](../../README.md) > [<internal>](../README.md) > Ticket

# Type alias: Ticket

> **Ticket**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Custom json relevant to the ticket

***

### `_id`

> **\_id**: `string`

- Unique identifier for the ticket

***

### `assigned_to`

> `optional` **assigned\_to**: `any`

- Details of support staff to whom ticket is assigned

***

### `category`

> **category**: [`TicketCategory`](type-alias.TicketCategory.md)

***

### `content`

> `optional` **content**: [`TicketContent`](type-alias.TicketContent.md)

***

### `context`

> `optional` **context**: [`TicketContext`](type-alias.TicketContext.md)

***

### `created_at`

> `optional` **created\_at**: `string`

- Time when the ticket was created

***

### `created_by`

> `optional` **created\_by**: `any`

- User details of ticket creator

***

### `created_on`

> `optional` **created\_on**: [`CreatedOn`](type-alias.CreatedOn.md)

***

### `integration`

> `optional` **integration**: `any`

- Integration type and its details of the ticket

***

### `is_feedback_pending`

> `optional` **is\_feedback\_pending**: `boolean`

- Denotes if feedback submission is
pending for the ticket

***

### `priority`

> **priority**: [`Priority`](type-alias.Priority.md)

***

### `response_id`

> `optional` **response\_id**: `string`

- Details of company and application
realated to the ticket

***

### `source`

> **source**: [`TicketSourceEnum`](type-alias.TicketSourceEnum.md)

***

### `status`

> **status**: [`Status`](type-alias.Status.md)

***

### `sub_category`

> `optional` **sub\_category**: `string`

- Sub-category assigned to the ticket

***

### `tags`

> `optional` **tags**: `string`[]

- Tags relevant to ticket

***

### `updated_at`

> `optional` **updated\_at**: `string`

- Time when the ticket was last updated

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Lead/LeadApplicationModel.d.ts:604

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Lead/LeadApplicationModel.d.ts:605

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
