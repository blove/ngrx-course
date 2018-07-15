# Sidebar Actions

Let's create some actions that will toggle the visibility of a sidebar.

Open the **src/app/store/actions.ts** file.

## `SidebarActions` enum

To get started, create an enum with each action's type string:

```
export enum SidebarActions {
  HideSidebar = "[sidebar] Hide",
  ShowSidebar = "[sidebar] Show"
}
```

## Classes

Next, create two classes:

1. HideSidebar
2. ShowSidebar

```
export class HideSidebar implements Action {
  readonly type = SidebarActions.HideSidebar;
}

export class ShowSidebar implements Action {
  readonly type = SidebarActions.ShowSidebar;
}
```

* Each class implements the `Action` interface that we defined.
* Each class as a `type` property that is associated with the string literal from the `SidebarActions` enum.

## Type Union

Finally, export a new type that is the union of the two classes:

```
export type SidebarAction = HideSidebar | ShowSidebar;
```

This will enable us to specify the `action` type when defining the reducer function for the sidebar state.