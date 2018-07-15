# Dispatch Actions and Subscribe to State

Open the **src/app/app.component.ts** file.

## Import `store`

First, import the `store` instance and create a new private property in the component class to save a reference:

```javascript
import { store } from "./store";

export class AppComponent implements OnInit {
  store: Store;
}
```

Then, implement the `OnInit` interface and `ngOnInit()` lifecycle hook to set the `store` property.
We'll also `subscribe()` to any notifications when the state changes:

```javascript
ngOnInit() {
    this.store = store;
    this.store.subscribe(state => {
      console.log(state);
    });
  }
```

## `dispatch()` Action

Now, let's `dispatch()` some actions.
We'll create two new methods to toggle the visibility of the sidenav in our template:

```javascript
hideSidenav() {
  this.store.dispatch(new HideSidenav());
}

showSidenav() {
  this.store.dispatch(new ShowSidenav());
}
```

## Toggle Sidenav Visibility

Finally, we need to create a `sidenavHidden` property.
We'll default the value to `false` and update the value when the state is updated in our application:

```javascript
export class AppComponent implements OnInit {
  sidenavHidden = initialSidenavState.hidden;
  store: Store;

  ngOnInit() {
    this.store = store;
    this.store.dispatch(new LoadResorts());
    this.store.subscribe(state => {
      this.sidenavHidden = state.sidenav.hidden;
      console.log(state);
    });
  }

  // code omitted
}
```

Note that we created the new `sidenavHidden` property as well as updating the `next` notification function when we `subscribe` to state changes in order to set the value of the `sidenavHidden` property from the value in our state tree.

## Update Template

Open **src/app/app.component.html** to display the sidenav along with buttons to hide and show the sidenav:

```html
<div fxFlexFill fxLayout="row">
  <div class="sidenav" fxFlex="20" [hidden]="sidenavHidden">
    <h1>Sidenav</h1>
  </div>
  <div class="content" fxFlex>
    <button (click)="showSidenav()">Show Sidenav</button>
    <button (click)="hideSidenav()">Hide Sidenav</button>
  </div>
</div>
```

Note, we're using the [Angular flex-layout](https://github.com/angular/flex-layout) module.

## Serve

Go ahead and serve the project:

```bash
npm run start:simple-store
yarn run start:simple-store
```

Inspect the console for state changes as you click the buttons to show and hide the sidenav.