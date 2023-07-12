[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ToolkitStore

# Interface: ToolkitStore<S, A, M\>

[<internal>](../modules/internal_.md).ToolkitStore

A store is an object that holds the application's state tree.
There should only be a single store in a Redux app, as the composition
happens on the reducer level.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | `any` | The type of state held by this store. |
| `A` | extends [`Action`](internal_.Action.md) = [`AnyAction`](internal_.AnyAction.md) | the type of actions which may be dispatched by this store. |
| `M` | extends [`Middlewares`](../modules/internal_.md#middlewares)<`S`\> = [`Middlewares`](../modules/internal_.md#middlewares)<`S`\> | - |

## Hierarchy

- [`Store`](internal_.Store.md)<`S`, `A`\>

  ↳ **`ToolkitStore`**

## Table of contents

### Properties

- [dispatch](internal_.ToolkitStore.md#dispatch)

### Methods

- [[observable]](internal_.ToolkitStore.md#[observable])
- [getState](internal_.ToolkitStore.md#getstate)
- [replaceReducer](internal_.ToolkitStore.md#replacereducer)
- [subscribe](internal_.ToolkitStore.md#subscribe)

## Properties

### dispatch

• **dispatch**: [`ExtractDispatchExtensions`](../modules/internal_.md#extractdispatchextensions)<`M`\> & [`Dispatch`](internal_.Dispatch.md)<`A`\>

Dispatches an action. It is the only way to trigger a state change.

The `reducer` function, used to create the store, will be called with the
current state tree and the given `action`. Its return value will be
considered the **next** state of the tree, and the change listeners will
be notified.

The base implementation only supports plain object actions. If you want
to dispatch a Promise, an Observable, a thunk, or something else, you
need to wrap your store creating function into the corresponding
middleware. For example, see the documentation for the `redux-thunk`
package. Even the middleware will eventually dispatch plain object
actions using this method.

**`Param`**

A plain object representing “what changed”. It is a good
  idea to keep actions serializable so you can record and replay user
  sessions, or use the time travelling `redux-devtools`. An action must
  have a `type` property which may not be `undefined`. It is a good idea
  to use string constants for action types.

#### Overrides

[Store](internal_.Store.md).[dispatch](internal_.Store.md#dispatch)

#### Defined in

node_modules/@reduxjs/toolkit/dist/configureStore.d.ts:64

## Methods

### [observable]

▸ **[observable]**(): [`Observable`](../modules/internal_.md#observable)<`S`\>

Interoperability point for observable/reactive libraries.

#### Returns

[`Observable`](../modules/internal_.md#observable)<`S`\>

A minimal observable of state changes.
For more information, see the observable proposal:
https://github.com/tc39/proposal-observable

#### Inherited from

[Store](internal_.Store.md).[[observable]](internal_.Store.md#[observable])

#### Defined in

node_modules/redux/index.d.ts:344

___

### getState

▸ **getState**(): `S`

Reads the state tree managed by the store.

#### Returns

`S`

The current state tree of your application.

#### Inherited from

[Store](internal_.Store.md).[getState](internal_.Store.md#getstate)

#### Defined in

node_modules/redux/index.d.ts:299

___

### replaceReducer

▸ **replaceReducer**(`nextReducer`): `void`

Replaces the reducer currently used by the store to calculate the state.

You might need this if your app implements code splitting and you want to
load some of the reducers dynamically. You might also need this if you
implement a hot reloading mechanism for Redux.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextReducer` | [`Reducer`](../modules/internal_.md#reducer)<`S`, `A`\> | The reducer for the store to use instead. |

#### Returns

`void`

#### Inherited from

[Store](internal_.Store.md).[replaceReducer](internal_.Store.md#replacereducer)

#### Defined in

node_modules/redux/index.d.ts:336

___

### subscribe

▸ **subscribe**(`listener`): [`Unsubscribe`](internal_.Unsubscribe.md)

Adds a change listener. It will be called any time an action is
dispatched, and some part of the state tree may potentially have changed.
You may then call `getState()` to read the current state tree inside the
callback.

You may call `dispatch()` from a change listener, with the following
caveats:

1. The subscriptions are snapshotted just before every `dispatch()` call.
If you subscribe or unsubscribe while the listeners are being invoked,
this will not have any effect on the `dispatch()` that is currently in
progress. However, the next `dispatch()` call, whether nested or not,
will use a more recent snapshot of the subscription list.

2. The listener should not expect to see all states changes, as the state
might have been updated multiple times during a nested `dispatch()` before
the listener is called. It is, however, guaranteed that all subscribers
registered before the `dispatch()` started will be called with the latest
state by the time it exits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | () => `void` | A callback to be invoked on every dispatch. |

#### Returns

[`Unsubscribe`](internal_.Unsubscribe.md)

A function to remove this change listener.

#### Inherited from

[Store](internal_.Store.md).[subscribe](internal_.Store.md#subscribe)

#### Defined in

node_modules/redux/index.d.ts:325
