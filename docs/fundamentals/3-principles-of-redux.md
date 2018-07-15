# 3 Principles of Redux

NgRx is *inspired* by Redux - but it's not Redux.

Redux has 3 core principles:

1. Single source of truth
2. State is read only
3. Changes are made with pure functions

## Single Source of Truth

* State is stored in the store
* The store is an object tree

```
{
  router: {
    state: {
      url: string,
      queryParams: Object
    },
    navigationId: number
  },
  sidebar: {
    open: boolean
  },
  user: User
}
```

## State is Ready Only

* Immutable
* Dispatch actions describing state change

## Changes are Made with Pure Functions

Pure Functions must:

1. Return value is only dependent on input values
2. No side effects