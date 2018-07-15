# Exercise 1: Reducers

Create test files at:

* **src/app/state/dialog/dialog.reducer.spec.ts**
* **src/app/state/map/map.reducer.spec.ts**
* **src/app/state/resort/resort.reducer.spec.ts**

## Steps

1. Assert an unknown action against each reducer.
2. Assert each action that returns a new state object in the reducer function.
3. Assert each expected state value change for each action.

## Hints

* Use the `jest.fn()` function to mock out the `componentType` when testing the `ShowDialog` action.
* Use the `generateResort()` function available in **src/app/models/resort.model.ts** to generate a fake resort.