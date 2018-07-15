# Sidenav Reducer

Open the **src/app/store/reducers.ts** file.

## Initial State

Before we create the reducer pure function, let's first declare the initial state for the sidenav.

```javascript
export const initialSidenavState = {
  opened: false
};
```

## Reducer

Now, let's declare the `sidenavReducer` function:

```javascript
export const sidenavReducer = (
  state: State = initialSidenavState,
  action: SidenavAction
): State => {
  switch (action.type) {
    case SidenavActionTypes.HideSidenav:
      return {
        ...state,
        opened: false
      };
    case SidenavActionTypes.ShowSidenav:
      return {
        ...state,
        opened: true
      };
    default:
      return state;
  }
};
```

* The `sidenavReducer` function accepts two arguments: the current state, which defaults to the initial state that we declared previously, and the action that is being performed.
* Note that the return type is a new `State` object.
* Within our reducer, we `switch` on the `action.type` value.
* For the `SidenavActionTypes.HideSidenav` action we return a new object, first with the spread of the current state object, and then we set the `hidden` property to `true`.
* Similarly, the `SidenavActionTypes.ShowSidenav` action sets the `hidden` property to `false`.