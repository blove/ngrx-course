# Sidebar Reducer

Open the **src/app/store/reducers.ts** file.

## Initial State

Before we create the reducer pure function, let's first define the initial state for the sidebar.

```
export const initialSidebarState = {
  hidden: true
};
```

## Reducer

Now, let's define the `sidebarReducer` function:

```
export const sidebarReducer = (
  state: State = initialSidebarState,
  action: SidebarAction
): State => {
  switch (action.type) {
    case SidebarActions.HideSidebar:
      return {
        ...state,
        hidden: true
      };
    case SidebarActions.ShowSidebar:
      return {
        ...state,
        hidden: false
      };
    default:
      return state;
  }
};
```

* The `sidebarReducer` function accepts two arguments: the current state, which defaults to the initial state that we defined previously, and the action that is being performed.
* Note that the return type is a new `State` object.
* Within our reducer, we `switch` on the `action.type` value.
* For the `SidebarActions.HideSidebar` action we return a new object, first with the spread of the current state object, and then we set the `hidden` property to `true`.
* Similarly, the `SidebarActions.ShowSidebar` action sets the `hidden` property to `false`.