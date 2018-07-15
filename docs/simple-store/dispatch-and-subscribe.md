# Dispatch Actions and Subscribe to State

Open the **src/app/app.component.ts** file.

## Import `store`

First, import the `store` instance and create a new private property in the component class to save a reference:

```
import { store } from "./store";

export class AppComponent implements OnInit {
  store: Store;
}
```

Then, implement the `OnInit` interface and `ngOnInit()` lifecycle hook to set the `store` property.
We'll also `subscribe()` to any notifications when the state changes:

```
ngOnInit() {
    this.store = store;
    this.store.subscribe(state => {
      console.log(state);
    });
  }
```

## `dispatch()` Action

Now, let's `dispatch()` some actions.
We'll create two new methods to toggle the visibility of the sidebar in our template:

```
hideSidebar() {
  this.store.dispatch(new HideSidebar());
}

showSidebar() {
  this.store.dispatch(new ShowSidebar());
}
```

## Toggle Sidebar Visibility

Finally, we need to create a `sidebarHidden` property.
We'll default the value to `false` and update the value when the state is updated in our application:

```
export class AppComponent implements OnInit {
  sidebarHidden = initialSidebarState.hidden;
  store: Store;

  ngOnInit() {
    this.store = store;
    this.store.dispatch(new LoadResorts());
    this.store.subscribe(state => {
      this.sidebarHidden = state.sidebar.hidden;
      console.log(state);
    });
  }

  // code omitted
}
```

Note that we created the new `sidebarHidden` property as well as updating the `next` notification function when we `subscribe` to state changes in order to set the value of the `sidebarHidden` property from the value in our state tree.

## Serve

Go ahead and serve the project:

```
npm run start:simple-store
yarn run start:simple-store
```

Inspect the console for state changes as you click the buttons to show and hide the sidebar.