[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [auth](../README.md) > AuthModule

# Class: AuthModule

## Constructors

### new AuthModule

> **new AuthModule**(`dispatch`): [`AuthModule`](class.AuthModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`AuthModule`](class.AuthModule.md)

#### Defined In

src/store/modules/auth.ts:63

## Methods

### deleteUser

> **deleteUser**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DeleteUserSuccess`](../internal_/type-aliases/type-alias.DeleteUserSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`DeleteUserParam`](../internal_/type-aliases/type-alias.DeleteUserParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DeleteUserSuccess`](../internal_/type-aliases/type-alias.DeleteUserSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:73

***

### facebookLogin

> **facebookLogin**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AuthSuccess`](../internal_/type-aliases/type-alias.AuthSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`OAuthLoginParam`](../internal_/type-aliases/type-alias.OAuthLoginParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AuthSuccess`](../internal_/type-aliases/type-alias.AuthSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:111

***

### fetchPlatformData

> **fetchPlatformData**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PlatformSchema`](../internal_/type-aliases/type-alias.PlatformSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetPlatformConfigParam`](../internal_/type-aliases/type-alias.GetPlatformConfigParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PlatformSchema`](../internal_/type-aliases/type-alias.PlatformSchema.md) \>

#### Defined In

src/store/modules/auth.ts:65

***

### fetchUserData

> **fetchUserData**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UserObjectSchema`](../internal_/type-aliases/type-alias.UserObjectSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UserObjectSchema`](../internal_/type-aliases/type-alias.UserObjectSchema.md) \>

#### Defined In

src/store/modules/auth.ts:69

***

### forgotPassword

> **forgotPassword**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `object` |
| `params.body` | [`ForgotPasswordParam`](../internal_/type-aliases/type-alias.ForgotPasswordParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:123

***

### googleLogin

> **googleLogin**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AuthSuccess`](../internal_/type-aliases/type-alias.AuthSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`OAuthLoginParam`](../internal_/type-aliases/type-alias.OAuthLoginParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AuthSuccess`](../internal_/type-aliases/type-alias.AuthSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:117

***

### resetPasswordWithEmail

> **resetPasswordWithEmail**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ResetPasswordSuccess`](../internal_/type-aliases/type-alias.ResetPasswordSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`ResetPasswordWithEmail`](../internal_/type-aliases/type-alias.ResetPasswordWithEmail.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ResetPasswordSuccess`](../internal_/type-aliases/type-alias.ResetPasswordSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:129

***

### resetPasswordWithMobile

> **resetPasswordWithMobile**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ResetPasswordSuccess`](../internal_/type-aliases/type-alias.ResetPasswordSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`ResetPasswordWithMobile`](../internal_/type-aliases/type-alias.ResetPasswordWithMobile.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ResetPasswordSuccess`](../internal_/type-aliases/type-alias.ResetPasswordSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:135

***

### sendEmailVerificationLink

> **sendEmailVerificationLink**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SendEmailVerifyLinkSuccess`](../internal_/type-aliases/type-alias.SendEmailVerifyLinkSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SendEmailVerificationLink`](../internal_/type-aliases/type-alias.SendEmailVerificationLink.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SendEmailVerifyLinkSuccess`](../internal_/type-aliases/type-alias.SendEmailVerifyLinkSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:171

***

### sendOtp

> **sendOtp**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UserObjectSchema`](../internal_/type-aliases/type-alias.UserObjectSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`LogInOTPParam`](../internal_/type-aliases/type-alias.LogInOTPParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UserObjectSchema`](../internal_/type-aliases/type-alias.UserObjectSchema.md) \>

#### Defined In

src/store/modules/auth.ts:105

***

### sendOtpEmail

> **sendOtpEmail**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`EmailOtpSuccess`](../internal_/type-aliases/type-alias.EmailOtpSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SendOTPOnEmail`](../internal_/type-aliases/type-alias.SendOTPOnEmail.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`EmailOtpSuccess`](../internal_/type-aliases/type-alias.EmailOtpSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:147

***

### sendOtpMobile

> **sendOtpMobile**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OtpSuccess`](../internal_/type-aliases/type-alias.OtpSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SendOTPOnMobile`](../internal_/type-aliases/type-alias.SendOTPOnMobile.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OtpSuccess`](../internal_/type-aliases/type-alias.OtpSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:141

***

### signInUserWithOtp

> **signInUserWithOtp**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpSuccess`](../internal_/type-aliases/type-alias.VerifyOtpSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`verifyOTPParam`](../internal_/type-aliases/type-alias.verifyOTPParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpSuccess`](../internal_/type-aliases/type-alias.VerifyOtpSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:99

***

### signInUserWithPassword

> **signInUserWithPassword**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SignInUserWithPassword`](../internal_/type-aliases/type-alias.SignInUserWithPassword.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:93

***

### signOutUser

> **signOutUser**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LogoutSuccess`](../internal_/type-aliases/type-alias.LogoutSuccess.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LogoutSuccess`](../internal_/type-aliases/type-alias.LogoutSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:83

***

### signUpUser

> **signUpUser**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`RegisterFormSuccess`](../internal_/type-aliases/type-alias.RegisterFormSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SignUpUserParam`](../internal_/type-aliases/type-alias.SignUpUserParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`RegisterFormSuccess`](../internal_/type-aliases/type-alias.RegisterFormSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:87

***

### updateProfile

> **updateProfile**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProfileEditSuccess`](../internal_/type-aliases/type-alias.ProfileEditSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UpdateProfileType`](../internal_/type-aliases/type-alias.UpdateProfileType.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProfileEditSuccess`](../internal_/type-aliases/type-alias.ProfileEditSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:165

***

### updateUserData

> **updateUserData**(`params`): [`AuthSlice`](../internal_/type-aliases/type-alias.AuthSlice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`AuthSlice`](../internal_/type-aliases/type-alias.AuthSlice.md) |

#### Returns

[`AuthSlice`](../internal_/type-aliases/type-alias.AuthSlice.md)

#### Defined In

src/store/modules/auth.ts:79

***

### verifyEmailOtp

> **verifyEmailOtp**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpSuccess`](../internal_/type-aliases/type-alias.VerifyOtpSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`VerifyEmailOTP`](../internal_/type-aliases/type-alias.VerifyEmailOTP.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpSuccess`](../internal_/type-aliases/type-alias.VerifyOtpSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:159

***

### verifyMobileOtp

> **verifyMobileOtp**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpSuccess`](../internal_/type-aliases/type-alias.VerifyOtpSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`VerifyMobileOTP`](../internal_/type-aliases/type-alias.VerifyMobileOTP.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpSuccess`](../internal_/type-aliases/type-alias.VerifyOtpSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:153

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
