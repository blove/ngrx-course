# Sidenav Select

To recap, we have:

* Declared two actions: `HideSidenav` and `ShowSidenav`.
* Declared a `reducer()` function to mutate the state of our application based on the actions dispatched.
* Declared the `sidenav` feature state.
* Declared the `sidenavState` feature selector and the `sidenavIsOpen` selector functions.

With our actions, reducer and selectors declared we are ready to implement the behavior in our Angular application.

## Shell Component

The Angular application in **src/app** uses a `ShellComponent` along with a `RouteService` class to wrap our application using Angular Material.

The `RouteService` class is located at **src/app/core/services/route.service.ts**:

```javascript
export class RouteService {
  static withShell(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      data: { reuse: true }
    };
  }
}
```

The `withShell()` static method returns a new `Route` object with the `ShellComponent` as the parent component of the provided `routes`.

## Inject `Store`

First, we need to use dependency injection to access the `Store` singleton object.

Open **src/app/core/shell/shell.component.ts** and update the `constructor()` function to accept the `Store`:

```javascript
import { Store } from '@ngrx/store';
import { State } from '@app/state';

export class ShellComponent {
  
  constructor(private store: Store<State>) {}
}
```

## Define `opened` Property

Next, define a new `opened` property:

```javascript
export class ShellComponent {
  opened: Observable<boolean>;
  
  constructor(private store: Store<State>) {}
}
```

The `opened` property is an `Observable` whose notifications are `boolean` values: `true` if the sidenav is opened and `false` if the sidenav is closed.

## Declare `opened`

Now, declare the value of the `opened` property using the `State` object.

```javascript
export class ShellComponent implments OnInit {
  opened: Observable<boolean>;
  
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.opened = this.store.pipe(select(sidenavIsOpen));
  }
}
```

* The `Store` singleton object is both an `Observer` and an `Observable`.
* Since it is an `Observable` we can invoke the `pipe()` method.
* We use the `select()` operator from the @ngrx/store module to select a slice of data within the state object.
* We specify the `sidenavIsOpen` selector we declared previously.

## Review ShellComponent Template

Let's quickly review part of the **shell.component.html** template:

```html
<mat-sidenav #sidenav [mode]="isMobile ? 'over' : 'side'" [opened]="opened | async">
  <!-- code omitted -->
</mat-sidenav>
```

* The `opened` input for the `<mat-sidenav>` component is bound to the `opened` property we declared in the `ShellComponent` class.
* Note the use of the `AsyncPipe` that subscribes (and unsubscribes) to the `opened` observable.