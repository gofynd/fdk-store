# FDK Store

## Overview

The FDK Store is an NPM package that serves as a wrapper over the FDK Client Javascript SDK, providing users with a convenient interface to interact with the SDK's functionality. This package utilizes Redux Toolkit to manage the application state and automatically updates the store based on actions performed through the SDK.

The FDK Store exports a class that encapsulates the Redux store and exposes methods for interacting with the SDK and retrieving data from the store. It also includes a getters object that provides getter functions for different slices of the store.

## Installation

To install the FDK Store package in your project, use the following command:

```
npm install github:@gofynd/fdk-store
```


## Usage

### Importing the Package

To import the FDK Store package into your project, use the following import statement:

```
import FDKStore from 'fdk-store';
```

### Creating an Instance

To import the FDK Store package into your project, use the following import statement:

```
const fpiOptions = {
    applicationID,
    applicationToken,
    domain,
    storeInitialData,
  };

  const { client: fpi } = new FDKStore(fpiOptions);
```

### Using FPI Client Instance

For theme developers, each route level theme page will be provided with `fpi` client instance. Theme developers can use this client to fetch and sync data with their redux stores.


### Read Redux State

#### Get current State Snapshot

The `fpi` client exposes the standard redux store at `fpi.store`. Developers can use redux method ` fpi.store.getState()` to the current snapshot of the state.

#### Subscribe to a slice of state

FDK Store uses Redux Toolkit to manage slices of state internally. Theme developers can leverage the `useGlobalStore` hook provided by the theme engine through a global package called `fdk-core/utils`. The `useGlobalStore` hook is similar to the standard `useSelector` hook provided by redux toolkit. Developers can use `useGlobalStore` and pass the required getters provided in `fpi.getters` to subscribe to state changes in a React Component.

##### Example 
```
import React from 'react';
import { useGlobalStore } from 'fdk-core/utils';

function Home({ fpi }) {

  /**
   * Get PAGE data from store
   */
  const page = useGlobalStore(fpi.getters.PAGE) || {};

  /**
   * Rendering Logic Here
   */

  return (
    <p>Home Component</p>
  );
  
}

```

## API Guide

Check [docs](markdown/API.md) for full API guide.