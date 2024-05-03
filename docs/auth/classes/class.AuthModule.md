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

src/store/modules/auth.ts:94

## Methods

### addEmail

> **addEmail**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyMobileOTPSuccess`](../internal_/type-aliases/type-alias.VerifyMobileOTPSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`AddEmailParam`](../internal_/type-aliases/type-alias.AddEmailParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyMobileOTPSuccess`](../internal_/type-aliases/type-alias.VerifyMobileOTPSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:209

***

### addMobileNumber

> **addMobileNumber**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyMobileOTPSuccess`](../internal_/type-aliases/type-alias.VerifyMobileOTPSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`AddMobileNumberParam`](../internal_/type-aliases/type-alias.AddMobileNumberParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyMobileOTPSuccess`](../internal_/type-aliases/type-alias.VerifyMobileOTPSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:204

***

### deleteEmail

> **deleteEmail**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`DeleteEmailParam`](../internal_/type-aliases/type-alias.DeleteEmailParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:199

***

### deleteMobileNumber

> **deleteMobileNumber**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`DeleteMobileNumberParam`](../internal_/type-aliases/type-alias.DeleteMobileNumberParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:194

***

### deleteUser

> **deleteUser**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DeleteUserSuccess`](../internal_/type-aliases/type-alias.DeleteUserSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`DeleteUserParam`](../internal_/type-aliases/type-alias.DeleteUserParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DeleteUserSuccess`](../internal_/type-aliases/type-alias.DeleteUserSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:104

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

src/store/modules/auth.ts:150

***

### fetchUserData

> **fetchUserData**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UserObjectSchema`](../internal_/type-aliases/type-alias.UserObjectSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UserObjectSchema`](../internal_/type-aliases/type-alias.UserObjectSchema.md) \>

#### Defined In

src/store/modules/auth.ts:100

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

src/store/modules/auth.ts:162

***

### getListOfActiveSessions

> **getListOfActiveSessions**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SessionListSuccess`](../internal_/type-aliases/type-alias.SessionListSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SessionListSuccess`](../internal_/type-aliases/type-alias.SessionListSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:189

***

### getLoggedInUser

> **getLoggedInUser**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UserObjectSchema`](../internal_/type-aliases/type-alias.UserObjectSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UserObjectSchema`](../internal_/type-aliases/type-alias.UserObjectSchema.md) \>

#### Defined In

src/store/modules/auth.ts:113

***

### getPlatformConfig

> **getPlatformConfig**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PlatformSchema`](../internal_/type-aliases/type-alias.PlatformSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetPlatformConfigParam`](../internal_/type-aliases/type-alias.GetPlatformConfigParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PlatformSchema`](../internal_/type-aliases/type-alias.PlatformSchema.md) \>

#### Defined In

src/store/modules/auth.ts:96

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

src/store/modules/auth.ts:156

***

### hasPassword

> **hasPassword**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`HasPasswordSuccess`](../internal_/type-aliases/type-alias.HasPasswordSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`HasPasswordSuccess`](../internal_/type-aliases/type-alias.HasPasswordSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:184

***

### loginWithAppleIOS

> **loginWithAppleIOS**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AuthSuccess`](../internal_/type-aliases/type-alias.AuthSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`loginWithAppleIOSParam`](../internal_/type-aliases/type-alias.loginWithAppleIOSParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AuthSuccess`](../internal_/type-aliases/type-alias.AuthSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:179

***

### loginWithEmailAndPassword

> **loginWithEmailAndPassword**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`LoginWithEmailAndPasswordParam`](../internal_/type-aliases/type-alias.LoginWithEmailAndPasswordParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LoginSuccess`](../internal_/type-aliases/type-alias.LoginSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:126

***

### logout

> **logout**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LogoutSuccess`](../internal_/type-aliases/type-alias.LogoutSuccess.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LogoutSuccess`](../internal_/type-aliases/type-alias.LogoutSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:117

***

### registerWithForm

> **registerWithForm**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`RegisterFormSuccess`](../internal_/type-aliases/type-alias.RegisterFormSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SignUpUserParam`](../internal_/type-aliases/type-alias.SignUpUserParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`RegisterFormSuccess`](../internal_/type-aliases/type-alias.RegisterFormSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:121

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

src/store/modules/auth.ts:168

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

src/store/modules/auth.ts:174

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

src/store/modules/auth.ts:144

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

src/store/modules/auth.ts:221

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

src/store/modules/auth.ts:215

***

### sendVerificationLinkToEmail

> **sendVerificationLinkToEmail**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SendEmailVerifyLinkSuccess`](../internal_/type-aliases/type-alias.SendEmailVerifyLinkSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SendEmailVerificationLink`](../internal_/type-aliases/type-alias.SendEmailVerificationLink.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SendEmailVerifyLinkSuccess`](../internal_/type-aliases/type-alias.SendEmailVerifyLinkSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:265

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

src/store/modules/auth.ts:132

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

src/store/modules/auth.ts:259

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

src/store/modules/auth.ts:110

***

### verifyEmail

> **verifyEmail**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyEmailSuccess`](../internal_/type-aliases/type-alias.VerifyEmailSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`VerifyEmailParam`](../internal_/type-aliases/type-alias.VerifyEmailParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyEmailSuccess`](../internal_/type-aliases/type-alias.VerifyEmailSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:232

***

### verifyEmailForgotOTP

> **verifyEmailForgotOTP**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyForgotOtpSuccess`](../internal_/type-aliases/type-alias.VerifyForgotOtpSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`VerifyEmailForgotOTPParam`](../internal_/type-aliases/type-alias.VerifyEmailForgotOTPParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyForgotOtpSuccess`](../internal_/type-aliases/type-alias.VerifyForgotOtpSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:242

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

src/store/modules/auth.ts:253

***

### verifyMobile

> **verifyMobile**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyEmailSuccess`](../internal_/type-aliases/type-alias.VerifyEmailSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`VerifyMobileParam`](../internal_/type-aliases/type-alias.VerifyMobileParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyEmailSuccess`](../internal_/type-aliases/type-alias.VerifyEmailSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:237

***

### verifyMobileForgotOTP

> **verifyMobileForgotOTP**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyForgotOtpSuccess`](../internal_/type-aliases/type-alias.VerifyForgotOtpSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`VerifyMobileForgotOTPParam`](../internal_/type-aliases/type-alias.VerifyMobileForgotOTPParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyForgotOtpSuccess`](../internal_/type-aliases/type-alias.VerifyForgotOtpSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:247

***

### verifyMobileOTP

> **verifyMobileOTP**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpSuccess`](../internal_/type-aliases/type-alias.VerifyOtpSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`verifyOTPParam`](../internal_/type-aliases/type-alias.verifyOTPParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpSuccess`](../internal_/type-aliases/type-alias.VerifyOtpSuccess.md) \>

#### Defined In

src/store/modules/auth.ts:138

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

src/store/modules/auth.ts:227

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
