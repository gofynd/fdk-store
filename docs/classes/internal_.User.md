[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / User

# Class: User

[<internal>](../modules/internal_.md).User

## Table of contents

### Constructors

- [constructor](internal_.User.md#constructor)

### Properties

- [\_conf](internal_.User.md#_conf)
- [\_relativeUrls](internal_.User.md#_relativeurls)
- [\_urls](internal_.User.md#_urls)

### Methods

- [addEmail](internal_.User.md#addemail)
- [addMobileNumber](internal_.User.md#addmobilenumber)
- [deleteEmail](internal_.User.md#deleteemail)
- [deleteMobileNumber](internal_.User.md#deletemobilenumber)
- [deleteUser](internal_.User.md#deleteuser)
- [forgotPassword](internal_.User.md#forgotpassword)
- [getListOfActiveSessions](internal_.User.md#getlistofactivesessions)
- [getLoggedInUser](internal_.User.md#getloggedinuser)
- [getPlatformConfig](internal_.User.md#getplatformconfig)
- [hasPassword](internal_.User.md#haspassword)
- [loginWithAppleIOS](internal_.User.md#loginwithappleios)
- [loginWithEmailAndPassword](internal_.User.md#loginwithemailandpassword)
- [loginWithFacebook](internal_.User.md#loginwithfacebook)
- [loginWithGoogle](internal_.User.md#loginwithgoogle)
- [loginWithGoogleAndroid](internal_.User.md#loginwithgoogleandroid)
- [loginWithGoogleIOS](internal_.User.md#loginwithgoogleios)
- [loginWithOTP](internal_.User.md#loginwithotp)
- [loginWithToken](internal_.User.md#loginwithtoken)
- [logout](internal_.User.md#logout)
- [registerWithForm](internal_.User.md#registerwithform)
- [sendOTPOnEmail](internal_.User.md#sendotponemail)
- [sendOTPOnMobile](internal_.User.md#sendotponmobile)
- [sendResetPasswordEmail](internal_.User.md#sendresetpasswordemail)
- [sendResetPasswordMobile](internal_.User.md#sendresetpasswordmobile)
- [sendResetToken](internal_.User.md#sendresettoken)
- [sendVerificationLinkToEmail](internal_.User.md#sendverificationlinktoemail)
- [sendVerificationLinkToMobile](internal_.User.md#sendverificationlinktomobile)
- [setEmailAsPrimary](internal_.User.md#setemailasprimary)
- [setMobileNumberAsPrimary](internal_.User.md#setmobilenumberasprimary)
- [updatePassword](internal_.User.md#updatepassword)
- [updateProfile](internal_.User.md#updateprofile)
- [updateUrls](internal_.User.md#updateurls)
- [verifyEmail](internal_.User.md#verifyemail)
- [verifyEmailOTP](internal_.User.md#verifyemailotp)
- [verifyMobile](internal_.User.md#verifymobile)
- [verifyMobileOTP](internal_.User.md#verifymobileotp)

## Constructors

### constructor

• **new User**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addEmail` | `string` |
| `addMobileNumber` | `string` |
| `deleteEmail` | `string` |
| `deleteMobileNumber` | `string` |
| `deleteUser` | `string` |
| `forgotPassword` | `string` |
| `getListOfActiveSessions` | `string` |
| `getLoggedInUser` | `string` |
| `getPlatformConfig` | `string` |
| `hasPassword` | `string` |
| `loginWithAppleIOS` | `string` |
| `loginWithEmailAndPassword` | `string` |
| `loginWithFacebook` | `string` |
| `loginWithGoogle` | `string` |
| `loginWithGoogleAndroid` | `string` |
| `loginWithGoogleIOS` | `string` |
| `loginWithOTP` | `string` |
| `loginWithToken` | `string` |
| `logout` | `string` |
| `registerWithForm` | `string` |
| `sendOTPOnEmail` | `string` |
| `sendOTPOnMobile` | `string` |
| `sendResetPasswordEmail` | `string` |
| `sendResetPasswordMobile` | `string` |
| `sendResetToken` | `string` |
| `sendVerificationLinkToEmail` | `string` |
| `sendVerificationLinkToMobile` | `string` |
| `setEmailAsPrimary` | `string` |
| `setMobileNumberAsPrimary` | `string` |
| `updatePassword` | `string` |
| `updateProfile` | `string` |
| `verifyEmail` | `string` |
| `verifyEmailOTP` | `string` |
| `verifyMobile` | `string` |
| `verifyMobileOTP` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:42

## Methods

### addEmail

▸ **addEmail**(`arg?`): `Promise`<[`VerifyEmailOTPSuccess`](../modules/internal_.md#verifyemailotpsuccess)\>

**`Name`**

addEmail
@summary: Add email to profile
@description: Use this API to add a new email address to a profile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`AddEmailParam`](../modules/internal_.md#addemailparam) | Arg object. |

#### Returns

`Promise`<[`VerifyEmailOTPSuccess`](../modules/internal_.md#verifyemailotpsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:51

___

### addMobileNumber

▸ **addMobileNumber**(`arg?`): `Promise`<[`VerifyMobileOTPSuccess`](../modules/internal_.md#verifymobileotpsuccess)\>

**`Name`**

addMobileNumber
@summary: Add mobile number to profile
@description: Use this API to add a new mobile number to a profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`AddMobileNumberParam`](../modules/internal_.md#addmobilenumberparam) | Arg object. |

#### Returns

`Promise`<[`VerifyMobileOTPSuccess`](../modules/internal_.md#verifymobileotpsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:59

___

### deleteEmail

▸ **deleteEmail**(`arg?`): `Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

**`Name`**

deleteEmail
@summary: Delete email from profile
@description: Use this API to delete an email address from a profile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`DeleteEmailParam`](../modules/internal_.md#deleteemailparam) | Arg object. |

#### Returns

`Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:67

___

### deleteMobileNumber

▸ **deleteMobileNumber**(`arg?`): `Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

**`Name`**

deleteMobileNumber
@summary: Delete mobile number from profile
@description: Use this API to delete a mobile number from a profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`DeleteMobileNumberParam`](../modules/internal_.md#deletemobilenumberparam) | Arg object. |

#### Returns

`Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:75

___

### deleteUser

▸ **deleteUser**(`arg?`): `Promise`<[`DeleteUserSuccess`](../modules/internal_.md#deleteusersuccess)\>

**`Name`**

deleteUser
@summary: verify otp and delete user
@description: verify otp and delete user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`DeleteUserParam`](../modules/internal_.md#deleteuserparam) | Arg object. |

#### Returns

`Promise`<[`DeleteUserSuccess`](../modules/internal_.md#deleteusersuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:83

___

### forgotPassword

▸ **forgotPassword**(`arg?`): `Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

**`Name`**

forgotPassword
@summary: Forgot Password
@description: Use this API to reset a password using the code sent on email or SMS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ForgotPasswordParam`](../modules/internal_.md#forgotpasswordparam) | Arg object. |

#### Returns

`Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:91

___

### getListOfActiveSessions

▸ **getListOfActiveSessions**(`arg?`): `Promise`<[`SessionListSuccess`](../modules/internal_.md#sessionlistsuccess)\>

**`Name`**

getListOfActiveSessions
@summary: Get list of sessions
@description: Use this API to retrieve all active sessions of a user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`SessionListSuccess`](../modules/internal_.md#sessionlistsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:99

___

### getLoggedInUser

▸ **getLoggedInUser**(`arg?`): `Promise`<[`UserObjectSchema`](../modules/internal_.md#userobjectschema)\>

**`Name`**

getLoggedInUser
@summary: Get logged in user
@description: Use this API  to get the details of a logged in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`UserObjectSchema`](../modules/internal_.md#userobjectschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:107

___

### getPlatformConfig

▸ **getPlatformConfig**(`arg?`): `Promise`<[`PlatformSchema`](../modules/internal_.md#platformschema)\>

**`Name`**

getPlatformConfig
@summary: Get platform configurations
@description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPlatformConfigParam`](../modules/internal_.md#getplatformconfigparam) | Arg object. |

#### Returns

`Promise`<[`PlatformSchema`](../modules/internal_.md#platformschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:115

___

### hasPassword

▸ **hasPassword**(`arg?`): `Promise`<[`HasPasswordSuccess`](../modules/internal_.md#haspasswordsuccess)\>

**`Name`**

hasPassword
@summary: Check password
@description: Use this API to check if user has created a password for login.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`HasPasswordSuccess`](../modules/internal_.md#haspasswordsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:123

___

### loginWithAppleIOS

▸ **loginWithAppleIOS**(`arg?`): `Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

**`Name`**

loginWithAppleIOS
@summary: Login or Register using Apple on iOS
@description: Use this API to login or register in iOS app using Apple Account credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`LoginWithAppleIOSParam`](../modules/internal_.md#loginwithappleiosparam) | Arg object. |

#### Returns

`Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:131

___

### loginWithEmailAndPassword

▸ **loginWithEmailAndPassword**(`arg?`): `Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

**`Name`**

loginWithEmailAndPassword
@summary: Login or Register with password
@description: Use this API to login or register using an email address and password.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`LoginWithEmailAndPasswordParam`](../modules/internal_.md#loginwithemailandpasswordparam) | Arg object. |

#### Returns

`Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:139

___

### loginWithFacebook

▸ **loginWithFacebook**(`arg?`): `Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

**`Name`**

loginWithFacebook
@summary: Login or Register using Facebook
@description: Use this API to login or register using Facebook credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`LoginWithFacebookParam`](../modules/internal_.md#loginwithfacebookparam) | Arg object. |

#### Returns

`Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:147

___

### loginWithGoogle

▸ **loginWithGoogle**(`arg?`): `Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

**`Name`**

loginWithGoogle
@summary: Login or Register using Google
@description: Use this API to login or register using Google Account credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`LoginWithGoogleParam`](../modules/internal_.md#loginwithgoogleparam) | Arg object. |

#### Returns

`Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:155

___

### loginWithGoogleAndroid

▸ **loginWithGoogleAndroid**(`arg?`): `Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

**`Name`**

loginWithGoogleAndroid
@summary: Login or Register using Google on Android
@description: Use this API to login or register in Android app using Google Account credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`LoginWithGoogleAndroidParam`](../modules/internal_.md#loginwithgoogleandroidparam) | Arg object. |

#### Returns

`Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:163

___

### loginWithGoogleIOS

▸ **loginWithGoogleIOS**(`arg?`): `Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

**`Name`**

loginWithGoogleIOS
@summary: Login or Register using Google on iOS
@description: Use this API to login or register in iOS app using Google Account credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`LoginWithGoogleIOSParam`](../modules/internal_.md#loginwithgoogleiosparam) | Arg object. |

#### Returns

`Promise`<[`AuthSuccess`](../modules/internal_.md#authsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:171

___

### loginWithOTP

▸ **loginWithOTP**(`arg?`): `Promise`<[`SendOtpResponse`](../modules/internal_.md#sendotpresponse)\>

**`Name`**

loginWithOTP
@summary: Login or Register with OTP
@description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`LoginWithOTPParam`](../modules/internal_.md#loginwithotpparam) | Arg object. |

#### Returns

`Promise`<[`SendOtpResponse`](../modules/internal_.md#sendotpresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:179

___

### loginWithToken

▸ **loginWithToken**(`arg?`): `Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

**`Name`**

loginWithToken
@summary: Login or Register with token
@description: Use this API to login or register using a token for authentication.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`LoginWithTokenParam`](../modules/internal_.md#loginwithtokenparam) | Arg object. |

#### Returns

`Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:187

___

### logout

▸ **logout**(`arg?`): `Promise`<[`LogoutSuccess`](../modules/internal_.md#logoutsuccess)\>

**`Name`**

logout
@summary: Logs out currently logged in user
@description: Use this API to check to logout a user from the app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`LogoutSuccess`](../modules/internal_.md#logoutsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:195

___

### registerWithForm

▸ **registerWithForm**(`arg?`): `Promise`<[`RegisterFormSuccess`](../modules/internal_.md#registerformsuccess)\>

**`Name`**

registerWithForm
@summary: Registration using a form
@description: Use this API to perform user registration by sending form data in the request body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`RegisterWithFormParam`](../modules/internal_.md#registerwithformparam) | Arg object. |

#### Returns

`Promise`<[`RegisterFormSuccess`](../modules/internal_.md#registerformsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:203

___

### sendOTPOnEmail

▸ **sendOTPOnEmail**(`arg?`): `Promise`<[`EmailOtpSuccess`](../modules/internal_.md#emailotpsuccess)\>

**`Name`**

sendOTPOnEmail
@summary: Send OTP on email
@description: Use this API to send an OTP to an email ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SendOTPOnEmailParam`](../modules/internal_.md#sendotponemailparam) | Arg object. |

#### Returns

`Promise`<[`EmailOtpSuccess`](../modules/internal_.md#emailotpsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:211

___

### sendOTPOnMobile

▸ **sendOTPOnMobile**(`arg?`): `Promise`<[`OtpSuccess`](../modules/internal_.md#otpsuccess)\>

**`Name`**

sendOTPOnMobile
@summary: Send OTP on mobile
@description: Use this API to send an OTP to a mobile number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SendOTPOnMobileParam`](../modules/internal_.md#sendotponmobileparam) | Arg object. |

#### Returns

`Promise`<[`OtpSuccess`](../modules/internal_.md#otpsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:219

___

### sendResetPasswordEmail

▸ **sendResetPasswordEmail**(`arg?`): `Promise`<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

**`Name`**

sendResetPasswordEmail
@summary: Reset Password
@description: Use this API to reset a password using the link sent on email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SendResetPasswordEmailParam`](../modules/internal_.md#sendresetpasswordemailparam) | Arg object. |

#### Returns

`Promise`<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:227

___

### sendResetPasswordMobile

▸ **sendResetPasswordMobile**(`arg?`): `Promise`<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

**`Name`**

sendResetPasswordMobile
@summary: Reset Password
@description: Use this API to reset a password using the link sent on mobile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SendResetPasswordMobileParam`](../modules/internal_.md#sendresetpasswordmobileparam) | Arg object. |

#### Returns

`Promise`<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:235

___

### sendResetToken

▸ **sendResetToken**(`arg?`): `Promise`<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

**`Name`**

sendResetToken
@summary: Reset Password using token
@description: Use this API to send code to reset password.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SendResetTokenParam`](../modules/internal_.md#sendresettokenparam) | Arg object. |

#### Returns

`Promise`<[`ResetPasswordSuccess`](../modules/internal_.md#resetpasswordsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:243

___

### sendVerificationLinkToEmail

▸ **sendVerificationLinkToEmail**(`arg?`): `Promise`<[`SendEmailVerifyLinkSuccess`](../modules/internal_.md#sendemailverifylinksuccess)\>

**`Name`**

sendVerificationLinkToEmail
@summary: Send verification link to email
@description: Use this API to send verification link to an email address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SendVerificationLinkToEmailParam`](../modules/internal_.md#sendverificationlinktoemailparam) | Arg object. |

#### Returns

`Promise`<[`SendEmailVerifyLinkSuccess`](../modules/internal_.md#sendemailverifylinksuccess)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:253

___

### sendVerificationLinkToMobile

▸ **sendVerificationLinkToMobile**(`arg?`): `Promise`<[`SendMobileVerifyLinkSuccess`](../modules/internal_.md#sendmobileverifylinksuccess)\>

**`Name`**

sendVerificationLinkToMobile
@summary: Send verification link to mobile
@description: Use this API to send a verification link to a mobile number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SendVerificationLinkToMobileParam`](../modules/internal_.md#sendverificationlinktomobileparam) | Arg object. |

#### Returns

`Promise`<[`SendMobileVerifyLinkSuccess`](../modules/internal_.md#sendmobileverifylinksuccess)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:264

___

### setEmailAsPrimary

▸ **setEmailAsPrimary**(`arg?`): `Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

**`Name`**

setEmailAsPrimary
@summary: Set email as primary
@description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SetEmailAsPrimaryParam`](../modules/internal_.md#setemailasprimaryparam) | Arg object. |

#### Returns

`Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:272

___

### setMobileNumberAsPrimary

▸ **setMobileNumberAsPrimary**(`arg?`): `Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

**`Name`**

setMobileNumberAsPrimary
@summary: Set mobile as primary
@description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SetMobileNumberAsPrimaryParam`](../modules/internal_.md#setmobilenumberasprimaryparam) | Arg object. |

#### Returns

`Promise`<[`LoginSuccess`](../modules/internal_.md#loginsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:280

___

### updatePassword

▸ **updatePassword**(`arg?`): `Promise`<[`VerifyEmailSuccess`](../modules/internal_.md#verifyemailsuccess)\>

**`Name`**

updatePassword
@summary: Update user password
@description: Use this API to update the password.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdatePasswordParam`](../modules/internal_.md#updatepasswordparam) | Arg object. |

#### Returns

`Promise`<[`VerifyEmailSuccess`](../modules/internal_.md#verifyemailsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:288

___

### updateProfile

▸ **updateProfile**(`arg?`): `Promise`<[`ProfileEditSuccess`](../modules/internal_.md#profileeditsuccess)\>

**`Name`**

updateProfile
@summary: Edit Profile Details
@description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateProfileParam`](../modules/internal_.md#updateprofileparam) | Arg object. |

#### Returns

`Promise`<[`ProfileEditSuccess`](../modules/internal_.md#profileeditsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:296

___

### updateUrls

▸ **updateUrls**(`urls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `any` |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:43

___

### verifyEmail

▸ **verifyEmail**(`arg?`): `Promise`<[`VerifyEmailSuccess`](../modules/internal_.md#verifyemailsuccess)\>

**`Name`**

verifyEmail
@summary: Verify email
@description: Use this API to send a verification code to verify an email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyEmailParam`](../modules/internal_.md#verifyemailparam) | Arg object. |

#### Returns

`Promise`<[`VerifyEmailSuccess`](../modules/internal_.md#verifyemailsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:304

___

### verifyEmailOTP

▸ **verifyEmailOTP**(`arg?`): `Promise`<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

**`Name`**

verifyEmailOTP
@summary: Verify OTP on email
@description: Use this API to verify the OTP received on an email ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyEmailOTPParam`](../modules/internal_.md#verifyemailotpparam) | Arg object. |

#### Returns

`Promise`<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:312

___

### verifyMobile

▸ **verifyMobile**(`arg?`): `Promise`<[`VerifyEmailSuccess`](../modules/internal_.md#verifyemailsuccess)\>

**`Name`**

verifyMobile
@summary: Verify mobile
@description: Use this API to send a verification code to verify a mobile number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyMobileParam`](../modules/internal_.md#verifymobileparam) | Arg object. |

#### Returns

`Promise`<[`VerifyEmailSuccess`](../modules/internal_.md#verifyemailsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:320

___

### verifyMobileOTP

▸ **verifyMobileOTP**(`arg?`): `Promise`<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

**`Name`**

verifyMobileOTP
@summary: Verify OTP on mobile
@description: Use this API to verify the OTP received on a mobile number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyMobileOTPParam`](../modules/internal_.md#verifymobileotpparam) | Arg object. |

#### Returns

`Promise`<[`VerifyOtpSuccess`](../modules/internal_.md#verifyotpsuccess)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/User/UserApplicationClient.d.ts:328
