# Test Component

Open the file **src/app/containers/dashboard.component.spec.ts** and create unit tests to assert:

* The component should create.
* The ngOnInit method should declare the mapZoom observable property.
* The ngOnInit method should declare the resorts observable property.
* The ngOnInit method should declare the selectedResort observable property.

## Import `StoreModule`

First, we need to update the testing module to import the `StoreModule`:

```javascript
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [DashboardComponent],
    imports: [NguiMapModule, StoreModule.forRoot(reducers), SharedModule]
  }).compileComponents();
}));
```

**Pro Tip**: If you are testing a component that is part of a lazy loaded module and thus a lazy loaded top-level feature state then you will need to use the `combineReducers()` function to add the lazy loaded reducer functions.

Here is an example for importing the `StoreModule` in a lazy loaded feature state:

```javascript
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [DashboardComponent],
    imports: [NguiMapModule, StoreModule.forRoot({
      ...reducers,
      'lazyLoadedFeature': combineReducers(lazyLoadedFeatureReducer) 
    }), SharedModule]
  }).compileComponents();
}));
```

## Get `Store` Instance

With the `StateModule` imported, next let's get the `Store` singleton instance that is provided to the `DashboardComponent` via the injector:

```javascript
describe('DashboardComponent', () => {
  // code omitted

  let store: Store<State>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });
});
```

* Define a block scope local `store` variable.
* Set the `store` variable value using the `TestBed.get()` method. 

## It _should_ create

Go ahead and run the tests to ensure that the `DashboardComponent` test is passing:

```bash
npm test
yarn test
```

You can also run a specific test using the `-t` option for jest via:

```bash
npm test -- -t dashboardcomponent
yarn test --- -t dashboardcomponent
```

## Test `ngOnInit`

First, assert that the `ngOnInit()` method declares the `mapZoom` observable :

```javascript
describe('ngOnInit', () => {
  it('should declare the mapZoom observable property', () => {
    const zoom = 5;
    const select = cold('-a', { a: zoom });
    const spy = jest.spyOn(store, 'pipe').mockReturnValue(select);

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
    expect(component.mapZoom).toBeObservable(select);

    component.mapZoom.subscribe(value => {
      expect(value).toBe(zoom);
    });
  });
});
```

* Declare a new `zoom` level number constant.
* Create a cold test observable using the `cold()` function, specifying the `marbles` string and the `values` object. In this case the observable simply emits a value after 10 frames (or some time has passed). The value that is emitted is represented by the character 'a'. We define the value of 'a' as the new `zoom` level.
* Create a spy on the `pipe()` method of the `store` and return the mocked `select` observable.
* Invoke `ngOnInit()`
* Expect that the spy has been called.
* Expect that the `mapZoom` property is an observable using the `toBeObservable()` method (this comes from the jasmine-marbles module).
* Subscribe to the `mapZoom` observable and expect the next notification value is the `zoom` value.

Next, assert that the `ngOnInit()` method declares the `resorts` property:

```javascript
describe('ngOnInit', () => {
  it('should declare the resorts observable property', () => {
    const resorts = [generateResort()];
    const select = cold('-a', { a: resorts });
    const spy = jest.spyOn(store, 'pipe').mockReturnValue(select);

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
    expect(component.resorts).toBeObservable(select);

    component.resorts.subscribe(value => {
      expect(value).toBe(resorts);
    });
  });
});
```

* Use the `generateResorts()` method in **src/app/models/resort.model.ts** to generate a fake `Resort` object.
* Declare an array of `resort` objects.
* Create a cold test observable using the `cold()` function, specifying the `marbles` string and the `values` object. In this example the next notification value is the `resorts` array.
* Create a spy on the the `pipe()` method and return the test observable.
* Invoke `ngOnInit()`
* Expect that the spy has been called.
* Expect that the `resorts` property is an observable.
* Subscribe to the `resorts` observable and expect the next notification value is the array of `resorts`.

Finally, assert that the `ngOnInit()` method declares the `selectedResort` property:

```javascript
describe('ngOnInit', () => {
  it('should declare the selectedResort observable property', () => {
    const resort = generateResort();
    const select = cold('-a', { a: resort });
    const spy = jest.spyOn(store, 'pipe').mockReturnValue(select);

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
    expect(component.selectedResort).toBeObservable(select);

    component.selectedResort.subscribe(value => {
      expect(value).toBe(resort);
    });
  });
});
```

This should look very familar to our previous tests.