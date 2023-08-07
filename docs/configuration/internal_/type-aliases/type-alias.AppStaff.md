[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > AppStaff

# Type alias: AppStaff

> **AppStaff**: `object`

## Type declaration

### \_id

`optional` **\_id**: `string`

- The unique identifier for the sales channel staff member

---

### application

`optional` **application**: `string`

- The unique identifier (24-digit Mongo
  Object ID) of the current sales channel

---

### employee_code

`optional` **employee_code**: `string`

- Employee code of sales channel staff
  member. It has unique value.

---

### first_name

`optional` **first_name**: `string`

- First name the staff member

---

### last_name

`optional` **last_name**: `string`

- Last name the staff member

---

### order_incent

`optional` **order_incent**: `boolean`

- This is a boolean value. `true` to
  retrieve the staff members eligible for getting incentives on orders.

---

### profile_pic_url

`optional` **profile_pic_url**: `string`

- Profile image hosted url of the staff member

---

### stores

`optional` **stores**: `number`[]

---

### title

`optional` **title**: `string`

- Tittle for the staff member like owner, staff.

---

### user

`optional` **user**: `string`

- Mongo ID of the staff. Helps in retrieving the
  details of a particular staff member.

## Source

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1153

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1154

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
