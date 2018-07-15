# Test Effects

First, let's quickly review the `search` effect in **src/app/state/resort/resort.effects.ts**:

```javascript
export class ResortEffects {
  @Effect()
  search: Observable<Action> = this.actions.pipe(
    ofType<SearchResorts>(ResortActionTypes.SearchResorts),
    exhaustMap(action => {
      return this.resortService.search(action.q).pipe(
        map(resorts => new SearchResortsSuccess(resorts)),
        catchError(error => of(new SearchResortsFail(error)))
      );
    })
  );
}
```

* The `search` effect returns an `Observable` of an `Action`.
* When the `SearchResorts` action is dispatched we invoke the `search()` method on the `ResortService`.
* In the event that the HTTP request returns a 200 OK status we use the `map()` operator to return the `SearchResultsSuccess` action. The `exhaustMap()` operator returns the inner obsevable of the new action.
* In the event that the HTTP request is not a 200 OK we catch the exception using the `catchError()` operator and return a new observable `of()` the `SearchResortsFail` action, specifying the `error` object.

## Setup

Open the **src/app/state/resort/resort.effects.spec.ts** file.

Before we can test an effect we need to do a little setup for our tests using the `beforeEach()` method:

```javascript
describe('ResortEffects', () => {
  let actions: Observable<any>;
  let effects: ResortEffects;
  let resortService: ResortService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResortEffects,
        {
          provide: ResortService,
          useValue: {}
        },
        provideMockActions(() => actions)
      ]
    });

    actions = TestBed.get(Actions);
    effects = TestBed.get(ResortEffects);
    resortService = TestBed.get(ResortService);
  });
});
```

* Define `actions` block scope variable within the `describe` callback function that is an `Observable`. This observable stream will represent the actions dispatched by the store.
* Define `resortService`.
* Provide the `ResortEffects` service dependency.
* Provide the `ResortService` dependency and mock it out as an empty object.
* Use the `provideMockActions` function and specify a factory function that returns the `actions` observable stream.
* Use the `TestBed.get()` method to get the provided objects.

## `closeDialogsOnSelect`

Test the `closeDialogsOnSelect` effect:

```javascript
describe('closeDialogOnSelect', () => {
  it('should dispatch the CloseDialogs action', () => {
    const resort = generateResort();
    const action = new SelectResort(resort);
    const outcome = new CloseDialogs();

    actions = hot('-a', { a: action });
    const expected = cold('-a', { a: outcome });

    expect(effects.closeDialogOnSelect).toBeObservable(expected);
  });
});
```

* Generate a fake `Resort` object using the `generateResort()` function.
* Declare the `action` to that will be mocked: `SelectResort`, specifying the `resort` that is being selected.
* Declare the `outcome` action that will be emitted by the `closeDialogOnSelect` effect.
* Mock the `hot()` actions observable. After 10 frames the observable emits a next notification (represented by the 'a' character) whose value is the `action`.
* The `expected` observable is a `cold()` observable that emits the `outcome` value after 10 frames.
* Expect the `closeDialogOnSelect` effect to be the `expected` observable.

## `search` Happy Path

Test the happy (or success) path:

```javascript
describe('search', () => {
  it('should dispatch the SearchResortsSuccess action on success', () => {
    const q = 'Testing';
    const resorts = [generateResort()];
    const action = new SearchResorts(q);
    const outcome = new SearchResortsSuccess(resorts);

    actions = hot('-a', { a: action });
    const response = cold('-a|', { a: resorts });
    const expected = cold('--b', { b: outcome });
    resortService.search = jest.fn(() => response);

    expect(effects.search).toBeObservable(expected);
  });
});
```

* First we define a fake user query in the `q` constant.
* Using the `generateResort()` function we declare an array of `Resort` objects.
* Declare the `action` that we are testing, in this case the `SearchResorts` action, specifying the necessary constructor arguments.
* Declare the `outcome` next notification action that the `search` observable should emit. In this case the outcome should be the `SearchResortsSuccess` action.
* Mock the `actions` observable stream with a test `hot()` observable. The marble syntax mocks an observable that emits a next notification (represented by the 'a' character) after 10 frames (single dash). The value of the next notification (a) is the `action` we are testing.
* Declare the `response` as a `cold()` observable. The marble syntax instructs the observable to mock 10 frames (a single dash) followed by a next notification (represented by the 'a' character) followed by a completion notification (the pipe character). The value of the next notification (a) is the `resorts` array.
* Declare the `expected` observable stream with a test `cold()` observable. The marble syntac mocks an observable that is 30 frames in duration. 20 frames has passed before the next notification because the `action` observable specified 10 frames (one dash) before emitting the next notification, and the `response` observable also specified 10 frames before emitting the next notification. 10 + 10 = 20. Therefore, we expect that after 20 frames the `outcome` action will be emitted by the `search` effect.
* Expect the `search` effect to be the `expected` observable using the `toBeObservable()` method.

## `search` Failure Path

We also need to test the `search` effect's failure path:

```javascript
describe('search', () => {
it('should dispatch the SearchResortsFail action on failure', () => {
    const q = 'Testing';
    const error = new Error('Test Error');
    const action = new SearchResorts(q);
    const outcome = new SearchResortsFail(error);

    actions = hot('-a', { a: action });
    const response = cold('-#', {}, error);
    const expected = cold('--b', { b: outcome });
    resortService.search = jest.fn(() => response);

    expect(effects.search).toBeObservable(expected);
  });
});
```

* The failure path test is very similar to the happy path test.
* Declare an `error` block scoped constant that is an `Error` object.
* The `outcome` action is the `SearchResortsFail` action whose payload is an `error`.
* The `response` observable emits an error notification (the hash symbol or pound sign) after 10 frames.

## Execute Tests

Execute a test run via:

```bash
npm test
yarn test
```

You can also start the watch mode via:

```bash
npm run test:watch
yarn test:watch
```