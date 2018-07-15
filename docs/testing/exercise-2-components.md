# Exercise 2: Test Components

Complete the unit tests:

* **src/app/containers/search-dialog/search-dialog.component.spec.ts**
* **src/app/core/shell/shell.component.spec.ts**

## Steps

For both test:

1. Import the `StoreModule`.
2. Use the `StoreModule.forRoot()` to wire up the store in the testing module `imports` array with the root `reducers` map.
3. Define a block scoped local `store` variable at the top of the first `describe()` block.
4. Get the `Store` object using the `TestBed.get()` method.

Create tests for the `SearchDialogComponent` that:

1. Assert the `ngOnInit()` method declares the `resorts` observable.
2. Assert the `ngOnInit()` method dispatches the `SearchResults` action when the search form control value changes.
3. Assert the `resortSelected` method dispatches the `SelectResort` action when invoked.

Create tests for the `ShellComponent` tht:

1. Assert the `ngOnInit()` method declares sthe opened observable property.
2. Assert the `closeSidenav` method dispatches the `HideSidenav` action.
3. Assert the `openDialog` method dispatch the `OpenDialog` action when the `<a class="search">` element is clicked.
4. Assert the `openSidenav` method dispatches the `ShowSidenav` action.
5. Assert the `toggleSidenav` method dispatches the `ShowSidenav` the first time the `<button>` is clicked, and then subsequently, the `toggleSidenav` method dispatches the `HideSidenav` the second time the `<button>` is clicked.

## Hints

* Use the `jest.spyOn()` method to create spies.
* Use the `DebugElement.query()` method to query for elements within the component's host element.
* Use the `By.css()` method to find elements along with the `DebugElement.query()` method.
* Use the `DebugElementtriggerEventHandler()` method to trigger a `MouseClick` event.

## Try it Out

Execute the jest test runner via:

```bash
npm test
yarn test
```