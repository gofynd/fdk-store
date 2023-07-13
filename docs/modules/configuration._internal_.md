[fdk-store](../README.md) / [Exports](../modules.md) / [configuration](configuration.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [Android](configuration._internal_.md#android)
- [AppCurrencyResponse](configuration._internal_.md#appcurrencyresponse)
- [AppFeature](configuration._internal_.md#appfeature)
- [AppFeatureResponse](configuration._internal_.md#appfeatureresponse)
- [AppStaff](configuration._internal_.md#appstaff)
- [AppStaffResponse](configuration._internal_.md#appstaffresponse)
- [AppTokenResponse](configuration._internal_.md#apptokenresponse)
- [Application](configuration._internal_.md#application)
- [ApplicationAuth](configuration._internal_.md#applicationauth)
- [ApplicationCors](configuration._internal_.md#applicationcors)
- [ApplicationInformation](configuration._internal_.md#applicationinformation)
- [ApplicationMeta](configuration._internal_.md#applicationmeta)
- [ApplicationRedirections](configuration._internal_.md#applicationredirections)
- [ApplicationWebsite](configuration._internal_.md#applicationwebsite)
- [BlogLink](configuration._internal_.md#bloglink)
- [BusinessHighlights](configuration._internal_.md#businesshighlights)
- [CartFeature](configuration._internal_.md#cartfeature)
- [CommonFeature](configuration._internal_.md#commonfeature)
- [CommunicationOptinDialogFeature](configuration._internal_.md#communicationoptindialogfeature)
- [CompareProductsFeature](configuration._internal_.md#compareproductsfeature)
- [Credentials](configuration._internal_.md#credentials)
- [Credit](configuration._internal_.md#credit)
- [Currency](configuration._internal_.md#currency)
- [CurrencyFeature](configuration._internal_.md#currencyfeature)
- [Debit](configuration._internal_.md#debit)
- [DefaultCurrency](configuration._internal_.md#defaultcurrency)
- [DeploymentStoreSelectionFeature](configuration._internal_.md#deploymentstoreselectionfeature)
- [Domain](configuration._internal_.md#domain)
- [FacebookLink](configuration._internal_.md#facebooklink)
- [FeedbackFeature](configuration._internal_.md#feedbackfeature)
- [Firebase](configuration._internal_.md#firebase)
- [Freshchat](configuration._internal_.md#freshchat)
- [FreshchatCredentials](configuration._internal_.md#freshchatcredentials)
- [FyndRewards](configuration._internal_.md#fyndrewards)
- [FyndRewardsCredentials](configuration._internal_.md#fyndrewardscredentials)
- [GetAppStaffsParam](configuration._internal_.md#getappstaffsparam)
- [GetOrderingStoresParam](configuration._internal_.md#getorderingstoresparam)
- [GetStoreDetailByIdParam](configuration._internal_.md#getstoredetailbyidparam)
- [GoogleMap](configuration._internal_.md#googlemap)
- [GoogleMapCredentials](configuration._internal_.md#googlemapcredentials)
- [GooglePlusLink](configuration._internal_.md#googlepluslink)
- [Gtm](configuration._internal_.md#gtm)
- [GtmCredentials](configuration._internal_.md#gtmcredentials)
- [HomePageFeature](configuration._internal_.md#homepagefeature)
- [InformationAddress](configuration._internal_.md#informationaddress)
- [InformationPhone](configuration._internal_.md#informationphone)
- [InformationSupport](configuration._internal_.md#informationsupport)
- [InstagramLink](configuration._internal_.md#instagramlink)
- [Ios](configuration._internal_.md#ios)
- [LandingPageFeature](configuration._internal_.md#landingpagefeature)
- [LaunchPage](configuration._internal_.md#launchpage)
- [LinkedInLink](configuration._internal_.md#linkedinlink)
- [Links](configuration._internal_.md#links)
- [ListingPriceFeature](configuration._internal_.md#listingpricefeature)
- [Moengage](configuration._internal_.md#moengage)
- [MoengageCredentials](configuration._internal_.md#moengagecredentials)
- [OptedStoreAddress](configuration._internal_.md#optedstoreaddress)
- [OrderFeature](configuration._internal_.md#orderfeature)
- [OrderingStore](configuration._internal_.md#orderingstore)
- [OrderingStores](configuration._internal_.md#orderingstores)
- [Page](configuration._internal_.md#page)
- [PcrFeature](configuration._internal_.md#pcrfeature)
- [PinterestLink](configuration._internal_.md#pinterestlink)
- [ProductDetailFeature](configuration._internal_.md#productdetailfeature)
- [QrFeature](configuration._internal_.md#qrfeature)
- [RegistrationPageFeature](configuration._internal_.md#registrationpagefeature)
- [RevenueEngineFeature](configuration._internal_.md#revenueenginefeature)
- [RewardPointsConfig](configuration._internal_.md#rewardpointsconfig)
- [Safetynet](configuration._internal_.md#safetynet)
- [SafetynetCredentials](configuration._internal_.md#safetynetcredentials)
- [SecureUrl](configuration._internal_.md#secureurl)
- [Segment](configuration._internal_.md#segment)
- [SegmentCredentials](configuration._internal_.md#segmentcredentials)
- [SocialLinks](configuration._internal_.md#sociallinks)
- [StoreLatLong](configuration._internal_.md#storelatlong)
- [Tokens](configuration._internal_.md#tokens)
- [TwitterLink](configuration._internal_.md#twitterlink)
- [VimeoLink](configuration._internal_.md#vimeolink)
- [YoutubeLink](configuration._internal_.md#youtubelink)

### Functions

- [Android](configuration._internal_.md#android-1)
- [AppCurrencyResponse](configuration._internal_.md#appcurrencyresponse-1)
- [AppFeature](configuration._internal_.md#appfeature-1)
- [AppFeatureResponse](configuration._internal_.md#appfeatureresponse-1)
- [AppStaff](configuration._internal_.md#appstaff-1)
- [AppStaffResponse](configuration._internal_.md#appstaffresponse-1)
- [AppTokenResponse](configuration._internal_.md#apptokenresponse-1)
- [Application](configuration._internal_.md#application-1)
- [ApplicationAuth](configuration._internal_.md#applicationauth-1)
- [ApplicationCors](configuration._internal_.md#applicationcors-1)
- [ApplicationInformation](configuration._internal_.md#applicationinformation-1)
- [ApplicationMeta](configuration._internal_.md#applicationmeta-1)
- [ApplicationRedirections](configuration._internal_.md#applicationredirections-1)
- [ApplicationWebsite](configuration._internal_.md#applicationwebsite-1)
- [BlogLink](configuration._internal_.md#bloglink-1)
- [BusinessHighlights](configuration._internal_.md#businesshighlights-1)
- [CartFeature](configuration._internal_.md#cartfeature-1)
- [CommonFeature](configuration._internal_.md#commonfeature-1)
- [CommunicationOptinDialogFeature](configuration._internal_.md#communicationoptindialogfeature-1)
- [CompareProductsFeature](configuration._internal_.md#compareproductsfeature-1)
- [Credentials](configuration._internal_.md#credentials-1)
- [Credit](configuration._internal_.md#credit-1)
- [Currency](configuration._internal_.md#currency-1)
- [CurrencyFeature](configuration._internal_.md#currencyfeature-1)
- [Debit](configuration._internal_.md#debit-1)
- [DefaultCurrency](configuration._internal_.md#defaultcurrency-1)
- [DeploymentStoreSelectionFeature](configuration._internal_.md#deploymentstoreselectionfeature-1)
- [Domain](configuration._internal_.md#domain-1)
- [FacebookLink](configuration._internal_.md#facebooklink-1)
- [FeedbackFeature](configuration._internal_.md#feedbackfeature-1)
- [Firebase](configuration._internal_.md#firebase-1)
- [Freshchat](configuration._internal_.md#freshchat-1)
- [FreshchatCredentials](configuration._internal_.md#freshchatcredentials-1)
- [FyndRewards](configuration._internal_.md#fyndrewards-1)
- [FyndRewardsCredentials](configuration._internal_.md#fyndrewardscredentials-1)
- [GoogleMap](configuration._internal_.md#googlemap-1)
- [GoogleMapCredentials](configuration._internal_.md#googlemapcredentials-1)
- [GooglePlusLink](configuration._internal_.md#googlepluslink-1)
- [Gtm](configuration._internal_.md#gtm-1)
- [GtmCredentials](configuration._internal_.md#gtmcredentials-1)
- [HomePageFeature](configuration._internal_.md#homepagefeature-1)
- [InformationAddress](configuration._internal_.md#informationaddress-1)
- [InformationPhone](configuration._internal_.md#informationphone-1)
- [InformationSupport](configuration._internal_.md#informationsupport-1)
- [InstagramLink](configuration._internal_.md#instagramlink-1)
- [Ios](configuration._internal_.md#ios-1)
- [LandingPageFeature](configuration._internal_.md#landingpagefeature-1)
- [LaunchPage](configuration._internal_.md#launchpage-1)
- [LinkedInLink](configuration._internal_.md#linkedinlink-1)
- [Links](configuration._internal_.md#links-1)
- [ListingPriceFeature](configuration._internal_.md#listingpricefeature-1)
- [Moengage](configuration._internal_.md#moengage-1)
- [MoengageCredentials](configuration._internal_.md#moengagecredentials-1)
- [OptedStoreAddress](configuration._internal_.md#optedstoreaddress-1)
- [OrderFeature](configuration._internal_.md#orderfeature-1)
- [OrderingStore](configuration._internal_.md#orderingstore-1)
- [OrderingStores](configuration._internal_.md#orderingstores-1)
- [Page](configuration._internal_.md#page-1)
- [PcrFeature](configuration._internal_.md#pcrfeature-1)
- [PinterestLink](configuration._internal_.md#pinterestlink-1)
- [ProductDetailFeature](configuration._internal_.md#productdetailfeature-1)
- [QrFeature](configuration._internal_.md#qrfeature-1)
- [RegistrationPageFeature](configuration._internal_.md#registrationpagefeature-1)
- [RevenueEngineFeature](configuration._internal_.md#revenueenginefeature-1)
- [RewardPointsConfig](configuration._internal_.md#rewardpointsconfig-1)
- [Safetynet](configuration._internal_.md#safetynet-1)
- [SafetynetCredentials](configuration._internal_.md#safetynetcredentials-1)
- [SecureUrl](configuration._internal_.md#secureurl-1)
- [Segment](configuration._internal_.md#segment-1)
- [SegmentCredentials](configuration._internal_.md#segmentcredentials-1)
- [SocialLinks](configuration._internal_.md#sociallinks-1)
- [StoreLatLong](configuration._internal_.md#storelatlong-1)
- [Tokens](configuration._internal_.md#tokens-1)
- [TwitterLink](configuration._internal_.md#twitterlink-1)
- [VimeoLink](configuration._internal_.md#vimeolink-1)
- [YoutubeLink](configuration._internal_.md#youtubelink-1)

## Type Aliases

### Android

Ƭ **Android**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `api_key?` | `string` | - Firebase secret credential API key for Android |
| `application_id?` | `string` | - Alphanumeric ID allotted to a sales channel application created within a business account |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:823

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:824

___

### AppCurrencyResponse

Ƭ **AppCurrencyResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `application?` | `string` | - Alphanumeric ID allotted to an application (sales channel website) created within a business account |
| `default_currency?` | [`DefaultCurrency`](configuration._internal_.md#defaultcurrency) | - |
| `supported_currency?` | [`Currency`](configuration._internal_.md#currency)[] | - |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:836

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:837

___

### AppFeature

Ƭ **AppFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__v?` | `number` | - Version key for tracking revisions. Default value is zero |
| `_id?` | `string` | - The unique identifier (24-digit Mongo Object ID) for the sales channel features |
| `app?` | `string` | - Application ID of the sales channel |
| `cart?` | [`CartFeature`](configuration._internal_.md#cartfeature) | - |
| `common?` | [`CommonFeature`](configuration._internal_.md#commonfeature) | - |
| `created_at?` | `string` | - ISO 8601 timestamp showing the date when the features were configured |
| `home_page?` | [`HomePageFeature`](configuration._internal_.md#homepagefeature) | - |
| `landing_page?` | [`LandingPageFeature`](configuration._internal_.md#landingpagefeature) | - |
| `order?` | [`OrderFeature`](configuration._internal_.md#orderfeature) | - |
| `pcr?` | [`PcrFeature`](configuration._internal_.md#pcrfeature) | - |
| `product_detail?` | [`ProductDetailFeature`](configuration._internal_.md#productdetailfeature) | - |
| `qr?` | [`QrFeature`](configuration._internal_.md#qrfeature) | - |
| `registration_page?` | [`RegistrationPageFeature`](configuration._internal_.md#registrationpagefeature) | - |
| `updated_at?` | `string` | - ISO 8601 timestamp of last known modifications to the sales channel feature configuration |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:847

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:848

___

### AppFeatureResponse

Ƭ **AppFeatureResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `feature?` | [`AppFeature`](configuration._internal_.md#appfeature) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:888

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:889

___

### AppStaff

Ƭ **AppStaff**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id?` | `string` | - The unique identifier for the sales channel staff member |
| `application?` | `string` | - The unique identifier (24-digit Mongo Object ID) of the current sales channel |
| `employee_code?` | `string` | - Employee code of sales channel staff member. It has unique value. |
| `first_name?` | `string` | - First name the staff member |
| `last_name?` | `string` | - Last name the staff member |
| `order_incent?` | `boolean` | - This is a boolean value. `true` to retrieve the staff members eligible for getting incentives on orders. |
| `profile_pic_url?` | `string` | - Profile image hosted url of the staff member |
| `stores?` | `number`[] | - |
| `title?` | `string` | - Tittle for the staff member like owner, staff. |
| `user?` | `string` | - Mongo ID of the staff. Helps in retrieving the details of a particular staff member. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1153

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1154

___

### AppStaffResponse

Ƭ **AppStaffResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `staff_users?` | [`AppStaff`](configuration._internal_.md#appstaff)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1204

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1205

___

### AppTokenResponse

Ƭ **AppTokenResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__v?` | `number` | - Version key for tracking revisions. Default value is zero. |
| `_id?` | `string` | - The unique identifier (24-digit Mongo Object ID) of the token |
| `application?` | `string` | - Alphanumeric ID allotted to the current application created within the current business account |
| `created_at?` | `string` | - ISO 8601 timestamp of token creation |
| `tokens?` | [`Tokens`](configuration._internal_.md#tokens) | - |
| `updated_at?` | `string` | - ISO 8601 timestamp of token updation |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1209

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1210

___

### Application

Ƭ **Application**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__v?` | `number` | - Version key for tracking revisions. Default value is zero. |
| `_id?` | `string` | - The unique identifier (24-digit Mongo Object ID) of the sales channel |
| `app_type?` | `string` | - It shows application is live or in development mode. |
| `auth?` | [`ApplicationAuth`](configuration._internal_.md#applicationauth) | - |
| `banner?` | [`SecureUrl`](configuration._internal_.md#secureurl) | - |
| `cache_ttl?` | `number` | - An integer value that specifies the number of seconds until the key expires |
| `channel_type?` | `string` | - It indicates different channel types like store, website-and-mobile-apps. Default value is store |
| `company_id?` | `number` | - Numeric ID allotted to a business account where the sales channel exists |
| `cors?` | [`ApplicationCors`](configuration._internal_.md#applicationcors) | - |
| `created_at?` | `string` | - ISO 8601 timestamp of sales channel creation |
| `description?` | `string` | - It contains detailed information about the sales channel. |
| `domain?` | [`Domain`](configuration._internal_.md#domain) | - |
| `domains?` | [`Domain`](configuration._internal_.md#domain)[] | - |
| `favicon?` | [`SecureUrl`](configuration._internal_.md#secureurl) | - |
| `is_active?` | `boolean` | - Indicates sales channel is active or not active |
| `is_internal?` | `boolean` | - Indicates whether a sales channel is internal or not |
| `logo?` | [`SecureUrl`](configuration._internal_.md#secureurl) | - |
| `meta?` | [`ApplicationMeta`](configuration._internal_.md#applicationmeta)[] | - |
| `mobile_logo?` | [`SecureUrl`](configuration._internal_.md#secureurl) | - |
| `name?` | `string` | - Name of the sales channel, e.g. Zenz Fashion |
| `owner?` | `string` | - The unique identifier (24-digit Mongo Object ID) of owner who owns the application |
| `redirections?` | [`ApplicationRedirections`](configuration._internal_.md#applicationredirections)[] | - |
| `slug?` | `string` | - |
| `token?` | `string` | - Random generated fix length string for sales channel. It is required and auto-generated. |
| `updated_at?` | `string` | - ISO 8601 timestamp of sales channel updation |
| `website?` | [`ApplicationWebsite`](configuration._internal_.md#applicationwebsite) | - |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:893

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:894

___

### ApplicationAuth

Ƭ **ApplicationAuth**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled?` | `boolean` | - Shows sales channel auth is enabled or not enabled. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:980

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:981

___

### ApplicationCors

Ƭ **ApplicationCors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domains?` | `string`[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:988

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:989

___

### ApplicationInformation

Ƭ **ApplicationInformation**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__v?` | `number` | - Version key for tracking revisions. Default value is zero. |
| `_id?` | `string` | - Unique identifier (24-digit Mongo Object ID) of the application information |
| `address?` | [`InformationAddress`](configuration._internal_.md#informationaddress) | - |
| `application?` | `string` | - Alphanumeric ID allotted to a sales channel application created within a business account |
| `business_highlights?` | [`BusinessHighlights`](configuration._internal_.md#businesshighlights) | - |
| `copyright_text?` | `string` | - Copyright statement usually seen at the site's footer |
| `created_at?` | `string` | - ISO 8601 timestamp of creation of the application information |
| `links?` | [`Links`](configuration._internal_.md#links) | - |
| `social_links?` | [`SocialLinks`](configuration._internal_.md#sociallinks) | - |
| `support?` | [`InformationSupport`](configuration._internal_.md#informationsupport) | - |
| `updated_at?` | `string` | - ISO 8601 timestamp of updation of the application information |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1062

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1063

___

### ApplicationMeta

Ƭ **ApplicationMeta**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | - Indicates to name of application meta |
| `value?` | `string` | - Value related to application meta name |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1100

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1101

___

### ApplicationRedirections

Ƭ **ApplicationRedirections**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `redirect_from?` | `string` | - Old domain url of the sales channel |
| `redirect_to?` | `string` | - New domain URL of the sales channel. Users will be automatically redirected from old domain to new domain. |
| `type?` | `string` | - It shows domain redirection type. Permanent redirection is for long time period redirection, and temporary redirection for a short time period. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1112

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1113

___

### ApplicationWebsite

Ƭ **ApplicationWebsite**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `basepath?` | `string` | - Base path for the current sales channel website |
| `enabled?` | `boolean` | - Shows whether sales channel website URL is enabled or not |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1140

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1141

___

### BlogLink

Ƭ **BlogLink**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon?` | `string` | - Hosted URL of icon image shown on the website |
| `link?` | `string` | - Web URL of brand's blog page |
| `title?` | `string` | - Name of the brand's blog page |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1249

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1250

___

### BusinessHighlights

Ƭ **BusinessHighlights**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id?` | `string` | - Unique identifier (24-digit Mongo Object ID) of the related business |
| `icon?` | `string` | - Hosted URL of icon image representing the business highlight |
| `sub_title?` | `string` | - Detailed information about the highlight |
| `title?` | `string` | - Title of the business highlight, e.g. Superfast Delivery |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1265

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1266

___

### CartFeature

Ƭ **CartFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `google_map?` | `boolean` | - Allow adding of Google Maps. Default value is true. |
| `gst_input?` | `boolean` | - Shows whether customer is allowed to enter GST on the cart page for claiming input credits |
| `placing_for_customer?` | `boolean` | - Shows whether the staff is placing order on behalf of customer. Default value is true. |
| `revenue_engine_coupon?` | `boolean` | - Allow coupon apply and credits, together. Default value is false. |
| `staff_selection?` | `boolean` | - Shows whether staff selection is enabled on cart page |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1287

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1288

___

### CommonFeature

Ƭ **CommonFeature**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `communication_optin_dialog?` | [`CommunicationOptinDialogFeature`](configuration._internal_.md#communicationoptindialogfeature) |
| `compare_products?` | [`CompareProductsFeature`](configuration._internal_.md#compareproductsfeature) |
| `currency?` | [`CurrencyFeature`](configuration._internal_.md#currencyfeature) |
| `deployment_store_selection?` | [`DeploymentStoreSelectionFeature`](configuration._internal_.md#deploymentstoreselectionfeature) |
| `feedback?` | [`FeedbackFeature`](configuration._internal_.md#feedbackfeature) |
| `listing_price?` | [`ListingPriceFeature`](configuration._internal_.md#listingpricefeature) |
| `revenue_engine?` | [`RevenueEngineFeature`](configuration._internal_.md#revenueenginefeature) |
| `reward_points?` | [`RewardPointsConfig`](configuration._internal_.md#rewardpointsconfig) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1315

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1316

___

### CommunicationOptinDialogFeature

Ƭ **CommunicationOptinDialogFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `visibility?` | `boolean` | - Shows whether WhatsApp communication is enabled |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1327

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1328

___

### CompareProductsFeature

Ƭ **CompareProductsFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled?` | `boolean` | - Shows whether product comparison feature is enabled on PDP |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1395

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1396

___

### Credentials

Ƭ **Credentials**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `android?` | [`Android`](configuration._internal_.md#android) | - |
| `api_key?` | `string` | - An API key is a unique string that's used to route requests to your Firebase project when interacting with Firebase. |
| `application_id?` | `string` | - Alphanumeric ID allotted to the current application created within the current business account |
| `gcm_sender_id?` | `string` | - Google Cloud Manager's Sender ID for Firebase. It is a unique numerical value which is created when you configure your project in the Google Developers Console/Google Cloud Console. |
| `ios?` | [`Ios`](configuration._internal_.md#ios) | - |
| `project_id?` | `string` | - Project ID for Firebase integration. Project ID is a unique identifier for a project and is used only within the console. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1404

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1405

___

### Credit

Ƭ **Credit**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled?` | `boolean` | - Shows whether reward points should be credited |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1431

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1432

___

### Currency

Ƭ **Currency**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id?` | `string` | - The unique identifier (24-digit Mongo Object ID) of the current sales channel supported currency |
| `code?` | `string` | - 3-character currency code, e.g. INR, USD, EUR. |
| `created_at?` | `string` | - ISO 8601 timestamp of sales channel support currency creation |
| `decimal_digits?` | `number` | - Acceptable decimal limits for a given currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid value of a currency. |
| `is_active?` | `boolean` | - Shows currency is enabled or not in current sales channel |
| `name?` | `string` | - Name of the currency, e.g Indian Rupee |
| `symbol?` | `string` | - Unique symbol for identifying the currency, e.g. ₹ |
| `updated_at?` | `string` | - ISO 8601 timestamp of sales channel support currency updation |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1444

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1445

___

### CurrencyFeature

Ƭ **CurrencyFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `default_currency?` | `string` | - 3-letter code of the default currency used in the application. Default vaule is 'INR'. |
| `type?` | `string` | - If 'explicit', currency formatting shows currency code with price. For explicit or all currency selection. |
| `value?` | `string`[] | - 3-letter currency code |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1486

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1487

___

### Debit

Ƭ **Debit**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `auto_apply?` | `boolean` | - Allow automatic debit of reward points |
| `enabled?` | `boolean` | - Shows whether reward points are available for debit |
| `strategy_channel?` | `string` | - Strategy channel for debiting reward points |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1504

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1505

___

### DefaultCurrency

Ƭ **DefaultCurrency**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `string` | - 3-character code of the default currency, e.g. INR, EUR, USD |
| `ref?` | `string` | - The unique identifier (24-digit Mongo Object ID) of the default currency |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1520

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1521

___

### DeploymentStoreSelectionFeature

Ƭ **DeploymentStoreSelectionFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled?` | `boolean` | - Shows whether selection of store (for deploying the application) is permitted |
| `type?` | `string` | - Permitted values are 'hard' and 'soft'. For hard type delivery, store selection is compulsory. For soft type, delivery store selection is optional. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1534

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1535

___

### Domain

Ƭ **Domain**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id?` | `string` | - The unique identifier (24-digit Mongo Object ID) of the sales channel domain |
| `is_predefined?` | `boolean` | - Domain is hosting domain or not. |
| `is_primary?` | `boolean` | - Domain is primary or not. Primary domain is the default/main domain. |
| `is_shortlink?` | `boolean` | - Shortlink is present or not for the domain |
| `name?` | `string` | - |
| `verified?` | `boolean` | - Domain is verified or not. TXT and A records should propagate correctly. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1556

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1557

___

### FacebookLink

Ƭ **FacebookLink**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon?` | `string` | - Hosted URL of social icon image shown on the website |
| `link?` | `string` | - Web URL of brand's Facebook page |
| `title?` | `string` | - Name of the social media platform, e.g. Facebook |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1584

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1585

___

### FeedbackFeature

Ƭ **FeedbackFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled?` | `boolean` | - Shows whether customer feedback is enabled on PDP. Default value is false. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1600

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1601

___

### Firebase

Ƭ **Firebase**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`Credentials`](configuration._internal_.md#credentials) | - |
| `enabled?` | `boolean` | - Shows whether Firebase integration is enabled or disabled for the sales channel |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1609

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1610

___

### Freshchat

Ƭ **Freshchat**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`FreshchatCredentials`](configuration._internal_.md#freshchatcredentials) | - |
| `enabled?` | `boolean` | - Shows whether Freshchat integration is enabled or disabled for the sales channel |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1619

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1620

___

### FreshchatCredentials

Ƭ **FreshchatCredentials**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `app_id?` | `string` | - The unique app_id of your Freshchat account for integrating Freshchat with your sales channel |
| `app_key?` | `string` | - The unique app_key of your Freshchat account for integrating Freshchat with your sales channel |
| `web_token?` | `string` | - Web token used for accessing the Freshchat APIs |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1629

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1630

___

### FyndRewards

Ƭ **FyndRewards**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credentials?` | [`FyndRewardsCredentials`](configuration._internal_.md#fyndrewardscredentials) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1647

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1648

___

### FyndRewardsCredentials

Ƭ **FyndRewardsCredentials**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `public_key?` | `string` | - Public key for integrating with Fynd rewards. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1652

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1653

___

### GetAppStaffsParam

Ƭ **GetAppStaffsParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderIncent?` | `boolean` | - This is a boolean value. Select `true` to retrieve the staff members eligible for getting incentives on orders. |
| `orderingStore?` | `number` | - ID of the ordering store. Helps in retrieving staff members working at a particular ordering store. |
| `user?` | `string` | - Mongo ID of the staff. Helps in retrieving the details of a particular staff member. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationValidator.d.ts:113

___

### GetOrderingStoresParam

Ƭ **GetOrderingStoresParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageNo?` | `number` | - The page number to navigate through the given set of results. Default value is 1. |
| `pageSize?` | `number` | - The number of items to retrieve in each page. Default value is 10. |
| `q?` | `string` | - Store code or name of the ordering store. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationValidator.d.ts:139

___

### GetStoreDetailByIdParam

Ƭ **GetStoreDetailByIdParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `storeId` | `number` | - Store uid |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationValidator.d.ts:155

___

### GoogleMap

Ƭ **GoogleMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credentials?` | [`GoogleMapCredentials`](configuration._internal_.md#googlemapcredentials) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1660

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1661

___

### GoogleMapCredentials

Ƭ **GoogleMapCredentials**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `api_key?` | `string` | - Secret API key for Google Maps. A unique identifier that authenticates requests made to Google Maps API. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1665

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1666

___

### GooglePlusLink

Ƭ **GooglePlusLink**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon?` | `string` | - Hosted URL of social icon image shown on the website |
| `link?` | `string` | - Web URL of brand's Google+ account |
| `title?` | `string` | - Name of the social media platform, e.g. Google+ |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1674

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1675

___

### Gtm

Ƭ **Gtm**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`GtmCredentials`](configuration._internal_.md#gtmcredentials) | - |
| `enabled?` | `boolean` | - Shows whether GTM integration is enabled or disabled for the sales channel |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1690

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1691

___

### GtmCredentials

Ƭ **GtmCredentials**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `api_key?` | `string` | - Secret credential API key for GTM |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1700

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1701

___

### HomePageFeature

Ƭ **HomePageFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `order_processing?` | `boolean` | - Shows whether order processing is enabled or not enabled |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1708

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1709

___

### InformationAddress

Ƭ **InformationAddress**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address_line?` | `string`[] | - Contact address of the sales channel |
| `city?` | `string` | - Name of the city, e.g. Mumbai |
| `country?` | `string` | - Name of the country, e.g. India |
| `loc?` | `string` | - Co-ordinates of the location |
| `phone?` | [`InformationPhone`](configuration._internal_.md#informationphone)[] | - |
| `pincode?` | `number` | - 6-digit PIN Code of the city, e.g. 400001 |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1717

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1718

___

### InformationPhone

Ƭ **InformationPhone**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `string` | - Country code for contact number, e.g. +91 (for India) |
| `number?` | `string` | - 10-digit mobile number |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1742

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1743

___

### InformationSupport

Ƭ **InformationSupport**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `email?` | `string`[] | - |
| `phone?` | `string`[] | - |
| `timing?` | `string` | - Working hours of support team, e.g. 9 AM to 9 PM |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1754

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1755

___

### InstagramLink

Ƭ **InstagramLink**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon?` | `string` | - Hosted URL of social icon image shown on the website |
| `link?` | `string` | - Web URL of brand's Instagram page |
| `title?` | `string` | - Name of the social media platform, e.g. Instagram |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1764

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1765

___

### Ios

Ƭ **Ios**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `api_key?` | `string` | - Firebase secret credential API key for IOS |
| `application_id?` | `string` | - Alphanumeric ID allotted to a sales channel application created within a business account |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1842

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1843

___

### LandingPageFeature

Ƭ **LandingPageFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `continue_as_guest?` | `boolean` | - Shows whether a guest can checkout from cart without logging in |
| `launch_page?` | [`LaunchPage`](configuration._internal_.md#launchpage) | - |
| `login_btn_text?` | `string` | - Shows the text displayed over the login button |
| `show_domain_textbox?` | `boolean` | - Shows whether a textbox for entering domain is available |
| `show_register_btn?` | `boolean` | - Shows whether register button is available in the login/landing page |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1855

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1856

___

### LaunchPage

Ƭ **LaunchPage**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `page_type?` | `string` | - Type of the launch page |
| `params?` | `any` | - Launch page params. It can be nullable. |
| `query?` | `any` | - Query related to launch page. It can be nullable. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1884

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1885

___

### LinkedInLink

Ƭ **LinkedInLink**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon?` | `string` | - Hosted URL of social icon image shown on the website |
| `link?` | `string` | - Web URL of brand's LinkedIn channel |
| `title?` | `string` | - Name of the social media platform, e.g. LinkedIn |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1900

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1901

___

### Links

Ƭ **Links**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `link?` | `string` | - Web URL for redirecting to a related page |
| `title?` | `string` | - Name of the related page or link |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1916

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1917

___

### ListingPriceFeature

Ƭ **ListingPriceFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `sort?` | `string` | - Sorting of listing price with min or max value. Default value is min. |
| `value?` | `string` | - Shows which price to display on PLP if one product has multiple prices (for each size), valid values are 'min', 'max', 'range'. Default value is range. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1928

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1929

___

### Moengage

Ƭ **Moengage**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`MoengageCredentials`](configuration._internal_.md#moengagecredentials) | - |
| `enabled?` | `boolean` | - Shows whether MoEngage integation is enabled or disabled for the sales channel |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1943

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1944

___

### MoengageCredentials

Ƭ **MoengageCredentials**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `app_id?` | `string` | - APP ID provided by MoEngage to identify a specific app. The app_id for your MoEngage account is available on the MoEngage Dashboard. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1953

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1954

___

### OptedStoreAddress

Ƭ **OptedStoreAddress**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address1?` | `string` | - Address of the opted store |
| `address2?` | `string` | - Address of the opted store |
| `city?` | `string` | - City of the opted store, e.g. Mumbai |
| `country?` | `string` | - Country of the opted store, e.g. India |
| `lat_long?` | [`StoreLatLong`](configuration._internal_.md#storelatlong) | - |
| `pincode?` | `number` | - 6-digit PIN code of the opted store location |
| `state?` | `string` | - State of the opted store, e.g. Maharashtra |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1971

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1972

___

### OrderFeature

Ƭ **OrderFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `buy_again?` | `boolean` | - Allow buy again option for order. Default value is false. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2000

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2001

___

### OrderingStore

Ƭ **OrderingStore**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id?` | `string` | - The unique identifier (24-digit Mongo Object ID) of the ordering store |
| `address?` | [`OptedStoreAddress`](configuration._internal_.md#optedstoreaddress) | - |
| `code?` | `string` | - Code of the ordering store (usually same as Store Code) |
| `display_name?` | `string` | - Display name of the ordering store |
| `name?` | `string` | - Store name of the ordering store |
| `pincode?` | `number` | - 6-digit PIN Code of the ordering store, e.g. 400001 |
| `store_code?` | `string` | - Store code of the ordering store, e.g. MUM-102 |
| `store_type?` | `string` | - Store type of the ordering store, e.g. high_street, mall, warehouse |
| `uid?` | `number` | - Ordering store UID |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2009

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2010

___

### OrderingStores

Ƭ **OrderingStores**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__v?` | `number` | - Version key for tracking ordering stores. Default value is zero. |
| `_id?` | `string` | - The unique identifier (24-digit Mongo Object ID) of the ordering store |
| `all_stores?` | `boolean` | - Allow all stores of the ordering stores |
| `app?` | `string` | - Alphanumeric ID allotted to an application (sales channel website) created within a business account |
| `deployed_stores?` | `number`[] | - |
| `enabled?` | `boolean` | - Allow ordering stores for current sales channel |
| `items?` | [`OrderingStore`](configuration._internal_.md#orderingstore)[] | - |
| `page?` | [`Page`](configuration._internal_.md#page) | - |
| `type?` | `string` | - For hard type delivery, store selection is compulsory. For soft type, delivery store selection is optional. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2048

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2049

___

### Page

Ƭ **Page**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `current?` | `number` |
| `has_next?` | `boolean` |
| `has_previous?` | `boolean` |
| `item_total?` | `number` |
| `next_id?` | `string` |
| `size?` | `number` |
| `type` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2131

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2132

___

### PcrFeature

Ƭ **PcrFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `staff_selection?` | `boolean` | - Allow staff selection. Default value is false. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2142

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2143

___

### PinterestLink

Ƭ **PinterestLink**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon?` | `string` | - Hosted URL of social icon image shown on the website |
| `link?` | `string` | - Web URL of brand's Pinterest page |
| `title?` | `string` | - Name of the social media platform, e.g. Pinterest |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2150

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2151

___

### ProductDetailFeature

Ƭ **ProductDetailFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `request_product?` | `boolean` | - Indicates whether customers can request for a product. Default value is false. |
| `seller_selection?` | `boolean` | - Shows whether the customers can choose the seller on PDP |
| `similar?` | `string`[] | - Configuration to show similar products, other products from same seller, other products in same category, other products in same price range, etc. |
| `update_product_meta?` | `boolean` | - Allow user to update product meta. Default value is true. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2166

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2167

___

### QrFeature

Ƭ **QrFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `application?` | `boolean` | - Shows whether sharing of mobile app via QR code is allowed. Default value is false. |
| `collections?` | `boolean` | - Shows whether sharing collection via QR code is allowed. Default value is false. |
| `products?` | `boolean` | - Shows whether sharing product via QR code is allowed. Default value is false. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2191

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2192

___

### RegistrationPageFeature

Ƭ **RegistrationPageFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ask_store_address?` | `boolean` | - Shows whether a form to collect the address of the store, should be displayed upon visiting the website |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2210

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2211

___

### RevenueEngineFeature

Ƭ **RevenueEngineFeature**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled?` | `boolean` | - Enable revenue engine. Default value is false. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2219

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2220

___

### RewardPointsConfig

Ƭ **RewardPointsConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credit?` | [`Credit`](configuration._internal_.md#credit) |
| `debit?` | [`Debit`](configuration._internal_.md#debit) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2227

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2228

___

### Safetynet

Ƭ **Safetynet**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`SafetynetCredentials`](configuration._internal_.md#safetynetcredentials) | - |
| `enabled?` | `boolean` | - Shows whether Safetynet integration is enabled or disabled for the sales channel |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2233

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2234

___

### SafetynetCredentials

Ƭ **SafetynetCredentials**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `api_key?` | `string` | - Secret credential API key for Safetynet. This API key is used for calling the methods of Safetynet APIs. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2243

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2244

___

### SecureUrl

Ƭ **SecureUrl**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `secure_url?` | `string` | - Hosted URL of the image |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2252

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2253

___

### Segment

Ƭ **Segment**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`SegmentCredentials`](configuration._internal_.md#segmentcredentials) | - |
| `enabled?` | `boolean` | - Shows whether Segment integration is enabled or disabled for the sales channel |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2260

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2261

___

### SegmentCredentials

Ƭ **SegmentCredentials**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `write_key?` | `string` | - The unique identifier for a source that tells Segment from which source data is coming from, to which workspace the data belongs, and which destinations should receive the data. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2270

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2271

___

### SocialLinks

Ƭ **SocialLinks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blog_link?` | [`BlogLink`](configuration._internal_.md#bloglink) |
| `facebook?` | [`FacebookLink`](configuration._internal_.md#facebooklink) |
| `google_plus?` | [`GooglePlusLink`](configuration._internal_.md#googlepluslink) |
| `instagram?` | [`InstagramLink`](configuration._internal_.md#instagramlink) |
| `linked_in?` | [`LinkedInLink`](configuration._internal_.md#linkedinlink) |
| `pinterest?` | [`PinterestLink`](configuration._internal_.md#pinterestlink) |
| `twitter?` | [`TwitterLink`](configuration._internal_.md#twitterlink) |
| `vimeo?` | [`VimeoLink`](configuration._internal_.md#vimeolink) |
| `youtube?` | [`YoutubeLink`](configuration._internal_.md#youtubelink) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2280

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2281

___

### StoreLatLong

Ƭ **StoreLatLong**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `coordinates?` | `number`[] | - |
| `type?` | `string` | - Coordinates type of the opted store |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2305

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2306

___

### Tokens

Ƭ **Tokens**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `firebase?` | [`Firebase`](configuration._internal_.md#firebase) |
| `freshchat?` | [`Freshchat`](configuration._internal_.md#freshchat) |
| `fynd_rewards?` | [`FyndRewards`](configuration._internal_.md#fyndrewards) |
| `google_map?` | [`GoogleMap`](configuration._internal_.md#googlemap) |
| `gtm?` | [`Gtm`](configuration._internal_.md#gtm) |
| `moengage?` | [`Moengage`](configuration._internal_.md#moengage) |
| `safetynet?` | [`Safetynet`](configuration._internal_.md#safetynet) |
| `segment?` | [`Segment`](configuration._internal_.md#segment) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2344

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2345

___

### TwitterLink

Ƭ **TwitterLink**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon?` | `string` | - Hosted URL of social icon image shown on the website |
| `link?` | `string` | - Web URL of brand's Twitter account |
| `title?` | `string` | - Name of the social media platform, e.g. Twitter |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2356

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2357

___

### VimeoLink

Ƭ **VimeoLink**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon?` | `string` | - Hosted URL of social icon image shown on the website |
| `link?` | `string` | - Web URL of brand's Vimeo channel |
| `title?` | `string` | - Name of the video hosting platform, e.g. Vimeo |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2431

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2432

___

### YoutubeLink

Ƭ **YoutubeLink**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon?` | `string` | - Hosted URL of social icon image shown on the website |
| `link?` | `string` | - Web URL of brand's YouTube channel |
| `title?` | `string` | - Name of the social media platform, e.g. YouTube |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2447

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2448

## Functions

### Android

▸ **Android**(): [`Android`](configuration._internal_.md#android)

#### Returns

[`Android`](configuration._internal_.md#android)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:823

___

### AppCurrencyResponse

▸ **AppCurrencyResponse**(): [`AppCurrencyResponse`](configuration._internal_.md#appcurrencyresponse)

#### Returns

[`AppCurrencyResponse`](configuration._internal_.md#appcurrencyresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:836

___

### AppFeature

▸ **AppFeature**(): [`AppFeature`](configuration._internal_.md#appfeature)

#### Returns

[`AppFeature`](configuration._internal_.md#appfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:847

___

### AppFeatureResponse

▸ **AppFeatureResponse**(): [`AppFeatureResponse`](configuration._internal_.md#appfeatureresponse)

#### Returns

[`AppFeatureResponse`](configuration._internal_.md#appfeatureresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:888

___

### AppStaff

▸ **AppStaff**(): [`AppStaff`](configuration._internal_.md#appstaff)

#### Returns

[`AppStaff`](configuration._internal_.md#appstaff)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1153

___

### AppStaffResponse

▸ **AppStaffResponse**(): [`AppStaffResponse`](configuration._internal_.md#appstaffresponse)

#### Returns

[`AppStaffResponse`](configuration._internal_.md#appstaffresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1204

___

### AppTokenResponse

▸ **AppTokenResponse**(): [`AppTokenResponse`](configuration._internal_.md#apptokenresponse)

#### Returns

[`AppTokenResponse`](configuration._internal_.md#apptokenresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1209

___

### Application

▸ **Application**(): [`Application`](configuration._internal_.md#application)

#### Returns

[`Application`](configuration._internal_.md#application)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:893

___

### ApplicationAuth

▸ **ApplicationAuth**(): [`ApplicationAuth`](configuration._internal_.md#applicationauth)

#### Returns

[`ApplicationAuth`](configuration._internal_.md#applicationauth)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:980

___

### ApplicationCors

▸ **ApplicationCors**(): [`ApplicationCors`](configuration._internal_.md#applicationcors)

#### Returns

[`ApplicationCors`](configuration._internal_.md#applicationcors)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:988

___

### ApplicationInformation

▸ **ApplicationInformation**(): [`ApplicationInformation`](configuration._internal_.md#applicationinformation)

#### Returns

[`ApplicationInformation`](configuration._internal_.md#applicationinformation)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1062

___

### ApplicationMeta

▸ **ApplicationMeta**(): [`ApplicationMeta`](configuration._internal_.md#applicationmeta)

#### Returns

[`ApplicationMeta`](configuration._internal_.md#applicationmeta)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1100

___

### ApplicationRedirections

▸ **ApplicationRedirections**(): [`ApplicationRedirections`](configuration._internal_.md#applicationredirections)

#### Returns

[`ApplicationRedirections`](configuration._internal_.md#applicationredirections)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1112

___

### ApplicationWebsite

▸ **ApplicationWebsite**(): [`ApplicationWebsite`](configuration._internal_.md#applicationwebsite)

#### Returns

[`ApplicationWebsite`](configuration._internal_.md#applicationwebsite)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1140

___

### BlogLink

▸ **BlogLink**(): [`BlogLink`](configuration._internal_.md#bloglink)

#### Returns

[`BlogLink`](configuration._internal_.md#bloglink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1249

___

### BusinessHighlights

▸ **BusinessHighlights**(): [`BusinessHighlights`](configuration._internal_.md#businesshighlights)

#### Returns

[`BusinessHighlights`](configuration._internal_.md#businesshighlights)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1265

___

### CartFeature

▸ **CartFeature**(): [`CartFeature`](configuration._internal_.md#cartfeature)

#### Returns

[`CartFeature`](configuration._internal_.md#cartfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1287

___

### CommonFeature

▸ **CommonFeature**(): [`CommonFeature`](configuration._internal_.md#commonfeature)

#### Returns

[`CommonFeature`](configuration._internal_.md#commonfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1315

___

### CommunicationOptinDialogFeature

▸ **CommunicationOptinDialogFeature**(): [`CommunicationOptinDialogFeature`](configuration._internal_.md#communicationoptindialogfeature)

#### Returns

[`CommunicationOptinDialogFeature`](configuration._internal_.md#communicationoptindialogfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1327

___

### CompareProductsFeature

▸ **CompareProductsFeature**(): [`CompareProductsFeature`](configuration._internal_.md#compareproductsfeature)

#### Returns

[`CompareProductsFeature`](configuration._internal_.md#compareproductsfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1395

___

### Credentials

▸ **Credentials**(): [`Credentials`](configuration._internal_.md#credentials)

#### Returns

[`Credentials`](configuration._internal_.md#credentials)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1404

___

### Credit

▸ **Credit**(): [`Credit`](configuration._internal_.md#credit)

#### Returns

[`Credit`](configuration._internal_.md#credit)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1431

___

### Currency

▸ **Currency**(): [`Currency`](configuration._internal_.md#currency)

#### Returns

[`Currency`](configuration._internal_.md#currency)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1444

___

### CurrencyFeature

▸ **CurrencyFeature**(): [`CurrencyFeature`](configuration._internal_.md#currencyfeature)

#### Returns

[`CurrencyFeature`](configuration._internal_.md#currencyfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1486

___

### Debit

▸ **Debit**(): [`Debit`](configuration._internal_.md#debit)

#### Returns

[`Debit`](configuration._internal_.md#debit)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1504

___

### DefaultCurrency

▸ **DefaultCurrency**(): [`DefaultCurrency`](configuration._internal_.md#defaultcurrency)

#### Returns

[`DefaultCurrency`](configuration._internal_.md#defaultcurrency)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1520

___

### DeploymentStoreSelectionFeature

▸ **DeploymentStoreSelectionFeature**(): [`DeploymentStoreSelectionFeature`](configuration._internal_.md#deploymentstoreselectionfeature)

#### Returns

[`DeploymentStoreSelectionFeature`](configuration._internal_.md#deploymentstoreselectionfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1534

___

### Domain

▸ **Domain**(): [`Domain`](configuration._internal_.md#domain)

#### Returns

[`Domain`](configuration._internal_.md#domain)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1556

___

### FacebookLink

▸ **FacebookLink**(): [`FacebookLink`](configuration._internal_.md#facebooklink)

#### Returns

[`FacebookLink`](configuration._internal_.md#facebooklink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1584

___

### FeedbackFeature

▸ **FeedbackFeature**(): [`FeedbackFeature`](configuration._internal_.md#feedbackfeature)

#### Returns

[`FeedbackFeature`](configuration._internal_.md#feedbackfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1600

___

### Firebase

▸ **Firebase**(): [`Firebase`](configuration._internal_.md#firebase)

#### Returns

[`Firebase`](configuration._internal_.md#firebase)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1609

___

### Freshchat

▸ **Freshchat**(): [`Freshchat`](configuration._internal_.md#freshchat)

#### Returns

[`Freshchat`](configuration._internal_.md#freshchat)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1619

___

### FreshchatCredentials

▸ **FreshchatCredentials**(): [`FreshchatCredentials`](configuration._internal_.md#freshchatcredentials)

#### Returns

[`FreshchatCredentials`](configuration._internal_.md#freshchatcredentials)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1629

___

### FyndRewards

▸ **FyndRewards**(): [`FyndRewards`](configuration._internal_.md#fyndrewards)

#### Returns

[`FyndRewards`](configuration._internal_.md#fyndrewards)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1647

___

### FyndRewardsCredentials

▸ **FyndRewardsCredentials**(): [`FyndRewardsCredentials`](configuration._internal_.md#fyndrewardscredentials)

#### Returns

[`FyndRewardsCredentials`](configuration._internal_.md#fyndrewardscredentials)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1652

___

### GoogleMap

▸ **GoogleMap**(): [`GoogleMap`](configuration._internal_.md#googlemap)

#### Returns

[`GoogleMap`](configuration._internal_.md#googlemap)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1660

___

### GoogleMapCredentials

▸ **GoogleMapCredentials**(): [`GoogleMapCredentials`](configuration._internal_.md#googlemapcredentials)

#### Returns

[`GoogleMapCredentials`](configuration._internal_.md#googlemapcredentials)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1665

___

### GooglePlusLink

▸ **GooglePlusLink**(): [`GooglePlusLink`](configuration._internal_.md#googlepluslink)

#### Returns

[`GooglePlusLink`](configuration._internal_.md#googlepluslink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1674

___

### Gtm

▸ **Gtm**(): [`Gtm`](configuration._internal_.md#gtm)

#### Returns

[`Gtm`](configuration._internal_.md#gtm)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1690

___

### GtmCredentials

▸ **GtmCredentials**(): [`GtmCredentials`](configuration._internal_.md#gtmcredentials)

#### Returns

[`GtmCredentials`](configuration._internal_.md#gtmcredentials)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1700

___

### HomePageFeature

▸ **HomePageFeature**(): [`HomePageFeature`](configuration._internal_.md#homepagefeature)

#### Returns

[`HomePageFeature`](configuration._internal_.md#homepagefeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1708

___

### InformationAddress

▸ **InformationAddress**(): [`InformationAddress`](configuration._internal_.md#informationaddress)

#### Returns

[`InformationAddress`](configuration._internal_.md#informationaddress)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1717

___

### InformationPhone

▸ **InformationPhone**(): [`InformationPhone`](configuration._internal_.md#informationphone)

#### Returns

[`InformationPhone`](configuration._internal_.md#informationphone)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1742

___

### InformationSupport

▸ **InformationSupport**(): [`InformationSupport`](configuration._internal_.md#informationsupport)

#### Returns

[`InformationSupport`](configuration._internal_.md#informationsupport)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1754

___

### InstagramLink

▸ **InstagramLink**(): [`InstagramLink`](configuration._internal_.md#instagramlink)

#### Returns

[`InstagramLink`](configuration._internal_.md#instagramlink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1764

___

### Ios

▸ **Ios**(): [`Ios`](configuration._internal_.md#ios)

#### Returns

[`Ios`](configuration._internal_.md#ios)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1842

___

### LandingPageFeature

▸ **LandingPageFeature**(): [`LandingPageFeature`](configuration._internal_.md#landingpagefeature)

#### Returns

[`LandingPageFeature`](configuration._internal_.md#landingpagefeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1855

___

### LaunchPage

▸ **LaunchPage**(): [`LaunchPage`](configuration._internal_.md#launchpage)

#### Returns

[`LaunchPage`](configuration._internal_.md#launchpage)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1884

___

### LinkedInLink

▸ **LinkedInLink**(): [`LinkedInLink`](configuration._internal_.md#linkedinlink)

#### Returns

[`LinkedInLink`](configuration._internal_.md#linkedinlink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1900

___

### Links

▸ **Links**(): [`Links`](configuration._internal_.md#links)

#### Returns

[`Links`](configuration._internal_.md#links)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1916

___

### ListingPriceFeature

▸ **ListingPriceFeature**(): [`ListingPriceFeature`](configuration._internal_.md#listingpricefeature)

#### Returns

[`ListingPriceFeature`](configuration._internal_.md#listingpricefeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1928

___

### Moengage

▸ **Moengage**(): [`Moengage`](configuration._internal_.md#moengage)

#### Returns

[`Moengage`](configuration._internal_.md#moengage)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1943

___

### MoengageCredentials

▸ **MoengageCredentials**(): [`MoengageCredentials`](configuration._internal_.md#moengagecredentials)

#### Returns

[`MoengageCredentials`](configuration._internal_.md#moengagecredentials)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1953

___

### OptedStoreAddress

▸ **OptedStoreAddress**(): [`OptedStoreAddress`](configuration._internal_.md#optedstoreaddress)

#### Returns

[`OptedStoreAddress`](configuration._internal_.md#optedstoreaddress)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1971

___

### OrderFeature

▸ **OrderFeature**(): [`OrderFeature`](configuration._internal_.md#orderfeature)

#### Returns

[`OrderFeature`](configuration._internal_.md#orderfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2000

___

### OrderingStore

▸ **OrderingStore**(): [`OrderingStore`](configuration._internal_.md#orderingstore)

#### Returns

[`OrderingStore`](configuration._internal_.md#orderingstore)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2009

___

### OrderingStores

▸ **OrderingStores**(): [`OrderingStores`](configuration._internal_.md#orderingstores)

#### Returns

[`OrderingStores`](configuration._internal_.md#orderingstores)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2048

___

### Page

▸ **Page**(): [`Page`](configuration._internal_.md#page)

#### Returns

[`Page`](configuration._internal_.md#page)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2131

___

### PcrFeature

▸ **PcrFeature**(): [`PcrFeature`](configuration._internal_.md#pcrfeature)

#### Returns

[`PcrFeature`](configuration._internal_.md#pcrfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2142

___

### PinterestLink

▸ **PinterestLink**(): [`PinterestLink`](configuration._internal_.md#pinterestlink)

#### Returns

[`PinterestLink`](configuration._internal_.md#pinterestlink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2150

___

### ProductDetailFeature

▸ **ProductDetailFeature**(): [`ProductDetailFeature`](configuration._internal_.md#productdetailfeature)

#### Returns

[`ProductDetailFeature`](configuration._internal_.md#productdetailfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2166

___

### QrFeature

▸ **QrFeature**(): [`QrFeature`](configuration._internal_.md#qrfeature)

#### Returns

[`QrFeature`](configuration._internal_.md#qrfeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2191

___

### RegistrationPageFeature

▸ **RegistrationPageFeature**(): [`RegistrationPageFeature`](configuration._internal_.md#registrationpagefeature)

#### Returns

[`RegistrationPageFeature`](configuration._internal_.md#registrationpagefeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2210

___

### RevenueEngineFeature

▸ **RevenueEngineFeature**(): [`RevenueEngineFeature`](configuration._internal_.md#revenueenginefeature)

#### Returns

[`RevenueEngineFeature`](configuration._internal_.md#revenueenginefeature)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2219

___

### RewardPointsConfig

▸ **RewardPointsConfig**(): [`RewardPointsConfig`](configuration._internal_.md#rewardpointsconfig)

#### Returns

[`RewardPointsConfig`](configuration._internal_.md#rewardpointsconfig)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2227

___

### Safetynet

▸ **Safetynet**(): [`Safetynet`](configuration._internal_.md#safetynet)

#### Returns

[`Safetynet`](configuration._internal_.md#safetynet)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2233

___

### SafetynetCredentials

▸ **SafetynetCredentials**(): [`SafetynetCredentials`](configuration._internal_.md#safetynetcredentials)

#### Returns

[`SafetynetCredentials`](configuration._internal_.md#safetynetcredentials)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2243

___

### SecureUrl

▸ **SecureUrl**(): [`SecureUrl`](configuration._internal_.md#secureurl)

#### Returns

[`SecureUrl`](configuration._internal_.md#secureurl)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2252

___

### Segment

▸ **Segment**(): [`Segment`](configuration._internal_.md#segment)

#### Returns

[`Segment`](configuration._internal_.md#segment)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2260

___

### SegmentCredentials

▸ **SegmentCredentials**(): [`SegmentCredentials`](configuration._internal_.md#segmentcredentials)

#### Returns

[`SegmentCredentials`](configuration._internal_.md#segmentcredentials)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2270

___

### SocialLinks

▸ **SocialLinks**(): [`SocialLinks`](configuration._internal_.md#sociallinks)

#### Returns

[`SocialLinks`](configuration._internal_.md#sociallinks)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2280

___

### StoreLatLong

▸ **StoreLatLong**(): [`StoreLatLong`](configuration._internal_.md#storelatlong)

#### Returns

[`StoreLatLong`](configuration._internal_.md#storelatlong)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2305

___

### Tokens

▸ **Tokens**(): [`Tokens`](configuration._internal_.md#tokens)

#### Returns

[`Tokens`](configuration._internal_.md#tokens)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2344

___

### TwitterLink

▸ **TwitterLink**(): [`TwitterLink`](configuration._internal_.md#twitterlink)

#### Returns

[`TwitterLink`](configuration._internal_.md#twitterlink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2356

___

### VimeoLink

▸ **VimeoLink**(): [`VimeoLink`](configuration._internal_.md#vimeolink)

#### Returns

[`VimeoLink`](configuration._internal_.md#vimeolink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2431

___

### YoutubeLink

▸ **YoutubeLink**(): [`YoutubeLink`](configuration._internal_.md#youtubelink)

#### Returns

[`YoutubeLink`](configuration._internal_.md#youtubelink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2447
