# New Up Store Instance

Open the **src/app/store/index.ts** file.

## `reducers` Map

First, create a new object that maps a property within the state tree to a reducer:

```javascript
const reducers: ReducerMap = {
  sidebar: sidebarReducer
};
```

This defines a new `sidebar` property within our state tree along with the `sidebarReducer` function that we defined previously.

## New Up Store

Then, simply new up the `Store` class providing the reducers map and export the object:

```javascript
export const store = new Store(reducers);
```