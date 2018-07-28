# Sidenav Actions

Let's create some actions that will toggle the visibility of a sidenav.

Open the **src/app/store/actions.ts** file.

## `SidenavActionTypes` enum

To get started, create an enum with each action's type string:

```javascript
export enum SidenavActionTypes {
  HideSidenav = '[Sidenav] Hide Sidenav',
  ShowSidenav = '[Sidenav] Show Sidenav'
}
```

## Classes

Next, create two classes:

1. HideSidenav
2. ShowSidenav

```javascript
export class HideSidenav implements Action {
  readonly type = SidenavActionTypes.HideSidenav;
}

export class ShowSidenav implements Action {
  readonly type = SidenavActionTypes.ShowSidenav;
}
```

* Each class implements the `Action` interface that we defined.
* Each class as a `type` property that is associated with the string literal from the `SidenavActionTypes` enum.

## Type Union

Finally, export a new type that is the union of the two classes:

```javascript
export type SidenavAction = HideSidenav | ShowSidenav;
```

This will enable us to specify the `action` type when defining the reducer function for the sidenav state.