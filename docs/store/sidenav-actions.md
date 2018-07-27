# Sidenav Actions

If you recall from the Foundations chapter:

* Actions are at the heart of the redux pattern.
* Actions are dispatched.
* Actions describe a state change.

## Create Action Types

Create a new directory **src/app/state/actions**, along with the file **src/app/state/actions/sidenav.actions.ts**:

```bash
mkdir src/app/state/actions
touch src/app/state/actions/sidenav.actions.ts
```

Create a `SidenavActionTypes` enum with the following actions:

1. HideSidenav
2. ShowSidenav

These actions will update the UI state of the sidenav:

```javascript
export enum SidenavActionTypes {
  HideSidenav = '[Sidenav] Hide Sidenav',
  ShowSidenav = '[Sidenav] Show Sidenav'
}
```

## Action Classes

We are ready to create the action classes:

```javascript
export class HideSidenav implements Action {
  readonly type = SidenavActionTypes.HideSidenav;
}

export class ShowSidenav implements Action {
  readonly type = SidenavActionTypes.ShowSidenav;
}
```

* Each class represents an action that will be dispatched and change the state of our application.
* Each class implements the `Action` interface that requires the `type` string parameter.

## Type Union

Finally, create a type union of each action class:

```javascript
export type SidenavAction = HideSidenav | ShowSidenav;
```

**Pro Tip**: We'll use this new type in our `reducer()` function to provide type safety for the `action` argument.