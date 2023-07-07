[fdk-store](../README.md) / [Modules](../modules.md) / [src/store/modules/content](../modules/src_store_modules_content.md) / default

# Class: default

[src/store/modules/content](../modules/src_store_modules_content.md).default

## Table of contents

### Constructors

- [constructor](src_store_modules_content.default.md#constructor)

### Methods

- [fetchAnnouncement](src_store_modules_content.default.md#fetchannouncement)
- [fetchAppSeo](src_store_modules_content.default.md#fetchappseo)
- [fetchBlogData](src_store_modules_content.default.md#fetchblogdata)
- [fetchBlogs](src_store_modules_content.default.md#fetchblogs)
- [fetchCustomPageData](src_store_modules_content.default.md#fetchcustompagedata)
- [fetchDataLoaders](src_store_modules_content.default.md#fetchdataloaders)
- [fetchFaqByCategory](src_store_modules_content.default.md#fetchfaqbycategory)
- [fetchLandingPage](src_store_modules_content.default.md#fetchlandingpage)
- [fetchLegalData](src_store_modules_content.default.md#fetchlegaldata)
- [fetchNavigation](src_store_modules_content.default.md#fetchnavigation)
- [fetchScreenSaver](src_store_modules_content.default.md#fetchscreensaver)
- [fetchSupportInformation](src_store_modules_content.default.md#fetchsupportinformation)
- [fetchTags](src_store_modules_content.default.md#fetchtags)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `ThunkActionDispatch`<`any`\> |

#### Defined in

src/store/modules/content.ts:6

## Methods

### fetchAnnouncement

▸ **fetchAnnouncement**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:51

___

### fetchAppSeo

▸ **fetchAppSeo**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:15

___

### fetchBlogData

▸ **fetchBlogData**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.slug` | `string` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:19

___

### fetchBlogs

▸ **fetchBlogs**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.pageNo` | `number` |
| `params.pageSize` | `number` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:23

___

### fetchCustomPageData

▸ **fetchCustomPageData**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.rootId` | `string` |
| `params.slug` | `string` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:27

___

### fetchDataLoaders

▸ **fetchDataLoaders**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:59

___

### fetchFaqByCategory

▸ **fetchFaqByCategory**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.slug` | `string` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:31

___

### fetchLandingPage

▸ **fetchLandingPage**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:55

___

### fetchLegalData

▸ **fetchLegalData**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:39

___

### fetchNavigation

▸ **fetchNavigation**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:11

___

### fetchScreenSaver

▸ **fetchScreenSaver**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:43

___

### fetchSupportInformation

▸ **fetchSupportInformation**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:47

___

### fetchTags

▸ **fetchTags**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:35
