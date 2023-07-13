[fdk-store](../README.md) / [Exports](../modules.md) / [auth](../modules/auth.md) / default

# Class: default

[auth](../modules/auth.md).default

## Table of contents

### Constructors

- [constructor](auth.default.md#constructor)

### Methods

- [deleteUser](auth.default.md#deleteuser)
- [facebookLogin](auth.default.md#facebooklogin)
- [fetchPlatformData](auth.default.md#fetchplatformdata)
- [fetchUserData](auth.default.md#fetchuserdata)
- [forgotPassword](auth.default.md#forgotpassword)
- [googleLogin](auth.default.md#googlelogin)
- [resetPasswordWithEmail](auth.default.md#resetpasswordwithemail)
- [resetPasswordWithMobile](auth.default.md#resetpasswordwithmobile)
- [sendEmailVerificationLink](auth.default.md#sendemailverificationlink)
- [sendOtp](auth.default.md#sendotp)
- [sendOtpEmail](auth.default.md#sendotpemail)
- [sendOtpMobile](auth.default.md#sendotpmobile)
- [signInUserWithOtp](auth.default.md#signinuserwithotp)
- [signInUserWithPassword](auth.default.md#signinuserwithpassword)
- [signOutUser](auth.default.md#signoutuser)
- [signUpUser](auth.default.md#signupuser)
- [updateProfile](auth.default.md#updateprofile)
- [updateUserData](auth.default.md#updateuserdata)
- [verifyEmailOtp](auth.default.md#verifyemailotp)
- [verifyMobileOtp](auth.default.md#verifymobileotp)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/auth.ts:9

## Methods

### deleteUser

▸ **deleteUser**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`DeleteUserSuccess`](../modules/auth._internal_.md#deleteusersuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeleteUserParam`](../modules/auth._internal_.md#deleteuserparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`DeleteUserSuccess`](../modules/auth._internal_.md#deleteusersuccess)\>

#### Defined in

src/store/modules/auth.ts:27

___

### facebookLogin

▸ **facebookLogin**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AuthSuccess`](../modules/auth._internal_.md#authsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`OAuthLoginParam`](../modules/auth._internal_.md#oauthloginparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AuthSuccess`](../modules/auth._internal_.md#authsuccess)\>

#### Defined in

src/store/modules/auth.ts:55

___

### fetchPlatformData

▸ **fetchPlatformData**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`PlatformSchema`](../modules/auth._internal_.md#platformschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.id` | `string` |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`PlatformSchema`](../modules/auth._internal_.md#platformschema)\>

#### Defined in

src/store/modules/auth.ts:15

___

### fetchUserData

▸ **fetchUserData**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`UserObjectSchema`](../modules/auth._internal_.md#userobjectschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`UserObjectSchema`](../modules/auth._internal_.md#userobjectschema)\>

#### Defined in

src/store/modules/auth.ts:23

___

### forgotPassword

▸ **forgotPassword**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`LoginSuccess`](../modules/auth._internal_.md#loginsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.body` | [`ForgotPasswordParam`](../modules/auth._internal_.md#forgotpasswordparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`LoginSuccess`](../modules/auth._internal_.md#loginsuccess)\>

#### Defined in

src/store/modules/auth.ts:63

___

### googleLogin

▸ **googleLogin**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AuthSuccess`](../modules/auth._internal_.md#authsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`OAuthLoginParam`](../modules/auth._internal_.md#oauthloginparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AuthSuccess`](../modules/auth._internal_.md#authsuccess)\>

#### Defined in

src/store/modules/auth.ts:59

___

### resetPasswordWithEmail

▸ **resetPasswordWithEmail**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ResetPasswordSuccess`](../modules/auth._internal_.md#resetpasswordsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResetPasswordWithEmail`](../modules/auth._internal_.md#resetpasswordwithemail) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ResetPasswordSuccess`](../modules/auth._internal_.md#resetpasswordsuccess)\>

#### Defined in

src/store/modules/auth.ts:67

___

### resetPasswordWithMobile

▸ **resetPasswordWithMobile**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ResetPasswordSuccess`](../modules/auth._internal_.md#resetpasswordsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResetPasswordWithMobile`](../modules/auth._internal_.md#resetpasswordwithmobile) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ResetPasswordSuccess`](../modules/auth._internal_.md#resetpasswordsuccess)\>

#### Defined in

src/store/modules/auth.ts:71

___

### sendEmailVerificationLink

▸ **sendEmailVerificationLink**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`SendEmailVerifyLinkSuccess`](../modules/auth._internal_.md#sendemailverifylinksuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SendEmailVerificationLink`](../modules/auth._internal_.md#sendemailverificationlink) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`SendEmailVerifyLinkSuccess`](../modules/auth._internal_.md#sendemailverifylinksuccess)\>

#### Defined in

src/store/modules/auth.ts:95

___

### sendOtp

▸ **sendOtp**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`UserObjectSchema`](../modules/auth._internal_.md#userobjectschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LogInOTPParam`](../modules/auth._internal_.md#loginotpparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`UserObjectSchema`](../modules/auth._internal_.md#userobjectschema)\>

#### Defined in

src/store/modules/auth.ts:51

___

### sendOtpEmail

▸ **sendOtpEmail**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`EmailOtpSuccess`](../modules/auth._internal_.md#emailotpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SendOTPOnEmail`](../modules/auth._internal_.md#sendotponemail) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`EmailOtpSuccess`](../modules/auth._internal_.md#emailotpsuccess)\>

#### Defined in

src/store/modules/auth.ts:79

___

### sendOtpMobile

▸ **sendOtpMobile**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`OtpSuccess`](../modules/auth._internal_.md#otpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SendOTPOnMobile`](../modules/auth._internal_.md#sendotponmobile) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`OtpSuccess`](../modules/auth._internal_.md#otpsuccess)\>

#### Defined in

src/store/modules/auth.ts:75

___

### signInUserWithOtp

▸ **signInUserWithOtp**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/auth._internal_.md#verifyotpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`verifyOTPParam`](../modules/auth._internal_.md#verifyotpparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/auth._internal_.md#verifyotpsuccess)\>

#### Defined in

src/store/modules/auth.ts:47

___

### signInUserWithPassword

▸ **signInUserWithPassword**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`LoginSuccess`](../modules/auth._internal_.md#loginsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SignInUserWithPassword`](../modules/auth._internal_.md#signinuserwithpassword) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`LoginSuccess`](../modules/auth._internal_.md#loginsuccess)\>

#### Defined in

src/store/modules/auth.ts:43

___

### signOutUser

▸ **signOutUser**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`LogoutSuccess`](../modules/auth._internal_.md#logoutsuccess)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`LogoutSuccess`](../modules/auth._internal_.md#logoutsuccess)\>

#### Defined in

src/store/modules/auth.ts:35

___

### signUpUser

▸ **signUpUser**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`RegisterFormSuccess`](../modules/auth._internal_.md#registerformsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SignUpUserParam`](../modules/auth._internal_.md#signupuserparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`RegisterFormSuccess`](../modules/auth._internal_.md#registerformsuccess)\>

#### Defined in

src/store/modules/auth.ts:39

___

### updateProfile

▸ **updateProfile**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ProfileEditSuccess`](../modules/auth._internal_.md#profileeditsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`UpdateProfileType`](../modules/auth._internal_.md#updateprofiletype) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ProfileEditSuccess`](../modules/auth._internal_.md#profileeditsuccess)\>

#### Defined in

src/store/modules/auth.ts:91

___

### updateUserData

▸ **updateUserData**(`params`): [`AuthSlice`](../modules/auth._internal_.md#authslice)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AuthSlice`](../modules/auth._internal_.md#authslice) |

#### Returns

[`AuthSlice`](../modules/auth._internal_.md#authslice)

#### Defined in

src/store/modules/auth.ts:31

___

### verifyEmailOtp

▸ **verifyEmailOtp**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/auth._internal_.md#verifyotpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`VerifyEmailOTP`](../modules/auth._internal_.md#verifyemailotp) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/auth._internal_.md#verifyotpsuccess)\>

#### Defined in

src/store/modules/auth.ts:87

___

### verifyMobileOtp

▸ **verifyMobileOtp**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/auth._internal_.md#verifyotpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`VerifyMobileOTP`](../modules/auth._internal_.md#verifymobileotp) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/auth._internal_.md#verifyotpsuccess)\>

#### Defined in

src/store/modules/auth.ts:83
