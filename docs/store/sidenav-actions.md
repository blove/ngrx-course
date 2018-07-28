# Sidenav Actions

If you recall from the Foundations chapter:

* Actions are at the heart of the redux pattern.
* Actions are dispatched.
* Actions describe a state change.

## Create Action Types

Create a new directory **src/app/state/sidenav**, along with the file **src/app/state/sidenav/sidenav.actions.ts**:

```bash
mkdir src/app/state/sidenav
touch src/app/state/sidenav/sidenav.actions.ts
```

Open the **sidenav.actions.ts** file and create an enum with the following members:

1. HideSidenav
2. ShowSidenav

Specify a unique string value for each enum member:

```javascript
export enum SidenavActionTypes {
  HideSidenav = '[Sidenav] Hide Sidenav',
  ShowSidenav = '[Sidenav] Show Sidenav'
}
```

## Action Classes

Create the action classes:

```javascript
import { Action } from '@ngrx/store';

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