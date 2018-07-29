# Test Sidenav Reducer

Create a test for the sidenav reducer:

* Assert an unknown action to result in no changes to the state object.
* Assert the `HideSidenav` action to result in the `opened` boolean value set to `false`.
* Assert the `ShowSidenav` action to result in the `opened` boolean value set to `true`.

Create a new file at: **src/app/state/sidenav/sidenav.reducer.spec.ts**

## Unknown Action

First assert an unknown action does not mutate the state of our application:

```javascript
import { initialState, reducer } from './sidenav.reducer';

describe('unknown action', () => {
  it('should return the initial state', () => {
    const action = {type: 'NOOP'} as any;
    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });
});
```

* Create an action object with a `type` string property that is invalid.
* Execute the `reducer()` function specifying the `initialState` and the `action`.
* Expect the `result` to be the `initialState` object.

## `HideSidenav`

Assert the `HideSidenav` action:

```javascript
import { HideSidenav } from './sidenav.actions';
import { initialState, reducer } from './sidenav.reducer';

describe('HideSidenav', () => {
  it('should set the opened property to false', () => {
    const action = new HideSidenav();
    const result = reducer(initialState, action);

    expect(result).toEqual({
      ...initialState,
      opened: false
    });
  });
});
```

* Create the new `HideSidenav` action.
* Execute the `reducer()` function specifying the `initialState` and the `action`.
* Expect the `result` to equal a new object where the `opened` value is `false`.

## `ShowSidenav`

Assert the `ShowSidenav` action:

```javascript
import { HideSidenav, ShowSidenav } from './sidenav.actions';
import { initialState, reducer } from './sidenav.reducer';

describe('ShowSidenav', () => {
  it('should set the opened property to true', () => {
    const action = new ShowSidenav();
    const result = reducer(initialState, action);

    expect(result).toEqual({
      ...initialState,
      opened: true
    });
  });
});
```

* Create the new `ShowSidenav` action.
* Execute the `reducer()` function specifying the `initialState` and the `action`.
* Expect the `result` to equal a new object where the `opened` value is `true`.

## Execute Tests

```bash
npm test
yarn test
```

Or, use watch mode:

```bash
npm run test:watch
yarn test:watch
```

When in watch mode you can:

* Press a to run all tests.
* Press f to run only failed tests.
* Press p to filter by a filename regex pattern.
* Press t to filter by a test name regex pattern.
* Press q to quit watch mode.
* Press Enter to trigger a test run.