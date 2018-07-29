# Exercise 3: Test Effects

Practice writing unit tests for effects.

## `ResortEffects`

Create tests for the following effects in **src/app/state/resort.resort.effects.spec.ts**:

* `hideSidenavOnSelect`
* `setMapZoom`

For each test:

1. Declare the `action` that will be mocked.
2. Declare the `outcome` action.
3. set the `action` hot observable to emit a next notification of the `action` to test.
4. Declare the `expected` cold observable that emits a next notification of the `outcome` action.
5. Expect the effect to be the `expected` observable.

## Challenge: `DialogEffects`

Create tests for the following effects in **src/app/state/dialog/dialog.effects.spec.ts**:

* `close`
* `open`

## Hints

* Use the `generateResort()` function generate a fake `Resort` object.
* Use the `provideMockActions()` function to create a factory function that returns the `actions` observable.
* Use the `hot()` function to create a test hot observable to mock the `actions` observable.
* Use the `cold()` function to create a test cold observable that is the expected observable that is returned from an action.
* Use the `jest.spyOn()` method to create spies. Combine this with the `mockReturnValue()` method for a spy instance to specify the value returned.
* If the effect does not dispatch an action then `subscribe()` to the observable and assert the next notification value.