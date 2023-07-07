[fdk-store](../README.md) / [Modules](../modules.md) / [src/store/modules/auth](../modules/src_store_modules_auth.md) / default

# Class: default

[src/store/modules/auth](../modules/src_store_modules_auth.md).default

## Table of contents

### Constructors

- [constructor](src_store_modules_auth.default.md#constructor)

### Methods

- [deleteUser](src_store_modules_auth.default.md#deleteuser)
- [facebookLogin](src_store_modules_auth.default.md#facebooklogin)
- [fetchPlatformData](src_store_modules_auth.default.md#fetchplatformdata)
- [fetchUserData](src_store_modules_auth.default.md#fetchuserdata)
- [forgotPassword](src_store_modules_auth.default.md#forgotpassword)
- [googleLogin](src_store_modules_auth.default.md#googlelogin)
- [resetPasswordWithEmail](src_store_modules_auth.default.md#resetpasswordwithemail)
- [resetPasswordWithMobile](src_store_modules_auth.default.md#resetpasswordwithmobile)
- [sendEmailVerificationLink](src_store_modules_auth.default.md#sendemailverificationlink)
- [sendOtp](src_store_modules_auth.default.md#sendotp)
- [sendOtpEmail](src_store_modules_auth.default.md#sendotpemail)
- [sendOtpMobile](src_store_modules_auth.default.md#sendotpmobile)
- [signInUserWithOtp](src_store_modules_auth.default.md#signinuserwithotp)
- [signInUserWithPassword](src_store_modules_auth.default.md#signinuserwithpassword)
- [signOutUser](src_store_modules_auth.default.md#signoutuser)
- [signUpUser](src_store_modules_auth.default.md#signupuser)
- [updateProfile](src_store_modules_auth.default.md#updateprofile)
- [updateUserData](src_store_modules_auth.default.md#updateuserdata)
- [verifyEmailOtp](src_store_modules_auth.default.md#verifyemailotp)
- [verifyMobileOtp](src_store_modules_auth.default.md#verifymobileotp)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `ThunkActionDispatch`<`any`\> |

#### Defined in

src/store/modules/auth.ts:5

## Methods

### deleteUser

▸ **deleteUser**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:23

___

### facebookLogin

▸ **facebookLogin**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:51

___

### fetchPlatformData

▸ **fetchPlatformData**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/auth.ts:11

___

### fetchUserData

▸ **fetchUserData**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:19

___

### forgotPassword

▸ **forgotPassword**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:59

___

### googleLogin

▸ **googleLogin**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:55

___

### resetPasswordWithEmail

▸ **resetPasswordWithEmail**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:63

___

### resetPasswordWithMobile

▸ **resetPasswordWithMobile**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:67

___

### sendEmailVerificationLink

▸ **sendEmailVerificationLink**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:91

___

### sendOtp

▸ **sendOtp**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:47

___

### sendOtpEmail

▸ **sendOtpEmail**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:75

___

### sendOtpMobile

▸ **sendOtpMobile**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:71

___

### signInUserWithOtp

▸ **signInUserWithOtp**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:43

___

### signInUserWithPassword

▸ **signInUserWithPassword**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:39

___

### signOutUser

▸ **signOutUser**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:31

___

### signUpUser

▸ **signUpUser**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:35

___

### updateProfile

▸ **updateProfile**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:87

___

### updateUserData

▸ **updateUserData**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/auth.ts:27

___

### verifyEmailOtp

▸ **verifyEmailOtp**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:83

___

### verifyMobileOtp

▸ **verifyMobileOtp**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/auth.ts:79
