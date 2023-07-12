[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / authModule

# Class: authModule

[<internal>](../modules/internal_.md).authModule

## Table of contents

### Constructors

- [constructor](internal_.authModule.md#constructor)

### Methods

- [deleteUser](internal_.authModule.md#deleteuser)
- [facebookLogin](internal_.authModule.md#facebooklogin)
- [fetchPlatformData](internal_.authModule.md#fetchplatformdata)
- [fetchUserData](internal_.authModule.md#fetchuserdata)
- [forgotPassword](internal_.authModule.md#forgotpassword)
- [googleLogin](internal_.authModule.md#googlelogin)
- [resetPasswordWithEmail](internal_.authModule.md#resetpasswordwithemail)
- [resetPasswordWithMobile](internal_.authModule.md#resetpasswordwithmobile)
- [sendEmailVerificationLink](internal_.authModule.md#sendemailverificationlink)
- [sendOtp](internal_.authModule.md#sendotp)
- [sendOtpEmail](internal_.authModule.md#sendotpemail)
- [sendOtpMobile](internal_.authModule.md#sendotpmobile)
- [signInUserWithOtp](internal_.authModule.md#signinuserwithotp)
- [signInUserWithPassword](internal_.authModule.md#signinuserwithpassword)
- [signOutUser](internal_.authModule.md#signoutuser)
- [signUpUser](internal_.authModule.md#signupuser)
- [updateProfile](internal_.authModule.md#updateprofile)
- [updateUserData](internal_.authModule.md#updateuserdata)
- [verifyEmailOtp](internal_.authModule.md#verifyemailotp)
- [verifyMobileOtp](internal_.authModule.md#verifymobileotp)

## Constructors

### constructor

• **new authModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/auth.ts:9

## Methods

### deleteUser

▸ **deleteUser**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`DeleteUserSuccess`](../modules/internal_.md#deleteusersuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeleteUserParam`](../modules/internal_.md#deleteuserparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`DeleteUserSuccess`](../modules/internal_.md#deleteusersuccess)\>

#### Defined in

src/store/modules/auth.ts:27

___

### facebookLogin

▸ **facebookLogin**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`OAuthLoginParam`](../modules/internal_.md#oauthloginparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

#### Defined in

src/store/modules/auth.ts:55

___

### fetchPlatformData

▸ **fetchPlatformData**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`PlatformSchema`](../modules/internal_.md#platformschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.id` | `string` |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`PlatformSchema`](../modules/internal_.md#platformschema)\>

#### Defined in

src/store/modules/auth.ts:15

___

### fetchUserData

▸ **fetchUserData**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`UserObjectSchema`](../modules/internal_.md#userobjectschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`UserObjectSchema`](../modules/internal_.md#userobjectschema)\>

#### Defined in

src/store/modules/auth.ts:23

___

### forgotPassword

▸ **forgotPassword**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.body` | [`ForgotPasswordParam`](../modules/internal_.md#forgotpasswordparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

#### Defined in

src/store/modules/auth.ts:63

___

### googleLogin

▸ **googleLogin**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`OAuthLoginParam`](../modules/internal_.md#oauthloginparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

#### Defined in

src/store/modules/auth.ts:59

___

### resetPasswordWithEmail

▸ **resetPasswordWithEmail**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResetPasswordWithEmail`](../modules/internal_.md#resetpasswordwithemail) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

#### Defined in

src/store/modules/auth.ts:67

___

### resetPasswordWithMobile

▸ **resetPasswordWithMobile**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResetPasswordWithMobile`](../modules/internal_.md#resetpasswordwithmobile) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

#### Defined in

src/store/modules/auth.ts:71

___

### sendEmailVerificationLink

▸ **sendEmailVerificationLink**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`SendEmailVerifyLinkSuccess`](../modules/internal_.md#sendemailverifylinksuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SendEmailVerificationLink`](../modules/internal_.md#sendemailverificationlink) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`SendEmailVerifyLinkSuccess`](../modules/internal_.md#sendemailverifylinksuccess)\>

#### Defined in

src/store/modules/auth.ts:95

___

### sendOtp

▸ **sendOtp**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`UserObjectSchema`](../modules/internal_.md#userobjectschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LogInOTPParam`](../modules/internal_.md#loginotpparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`UserObjectSchema`](../modules/internal_.md#userobjectschema)\>

#### Defined in

src/store/modules/auth.ts:51

___

### sendOtpEmail

▸ **sendOtpEmail**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`EmailOtpSuccess`](../modules/internal_.md#emailotpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SendOTPOnEmail`](../modules/internal_.md#sendotponemail) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`EmailOtpSuccess`](../modules/internal_.md#emailotpsuccess)\>

#### Defined in

src/store/modules/auth.ts:79

___

### sendOtpMobile

▸ **sendOtpMobile**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`OtpSuccess`](../modules/internal_.md#otpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SendOTPOnMobile`](../modules/internal_.md#sendotponmobile) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`OtpSuccess`](../modules/internal_.md#otpsuccess)\>

#### Defined in

src/store/modules/auth.ts:75

___

### signInUserWithOtp

▸ **signInUserWithOtp**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`verifyOTPParam`](../modules/internal_.md#verifyotpparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

#### Defined in

src/store/modules/auth.ts:47

___

### signInUserWithPassword

▸ **signInUserWithPassword**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SignInUserWithPassword`](../modules/internal_.md#signinuserwithpassword) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

#### Defined in

src/store/modules/auth.ts:43

___

### signOutUser

▸ **signOutUser**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`LogoutSuccess`](../modules/internal_.md#logoutsuccess)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`LogoutSuccess`](../modules/internal_.md#logoutsuccess)\>

#### Defined in

src/store/modules/auth.ts:35

___

### signUpUser

▸ **signUpUser**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`RegisterFormSuccess`](../modules/internal_.md#registerformsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SignUpUserParam`](../modules/internal_.md#signupuserparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`RegisterFormSuccess`](../modules/internal_.md#registerformsuccess)\>

#### Defined in

src/store/modules/auth.ts:39

___

### updateProfile

▸ **updateProfile**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ProfileEditSuccess`](../modules/internal_.md#profileeditsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`UpdateProfileType`](../modules/internal_.md#updateprofiletype) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ProfileEditSuccess`](../modules/internal_.md#profileeditsuccess)\>

#### Defined in

src/store/modules/auth.ts:91

___

### updateUserData

▸ **updateUserData**(`params`): [`AuthSlice`](../modules/internal_.md#authslice)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AuthSlice`](../modules/internal_.md#authslice) |

#### Returns

[`AuthSlice`](../modules/internal_.md#authslice)

#### Defined in

src/store/modules/auth.ts:31

___

### verifyEmailOtp

▸ **verifyEmailOtp**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`VerifyEmailOTP`](../modules/internal_.md#verifyemailotp) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

#### Defined in

src/store/modules/auth.ts:87

___

### verifyMobileOtp

▸ **verifyMobileOtp**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`VerifyMobileOTP`](../modules/internal_.md#verifymobileotp) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

#### Defined in

src/store/modules/auth.ts:83
