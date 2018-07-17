# Resort Reducer

Open the **src/app/store/reducers.ts** file.

## Initial State

Define the initial state for the resort state:

```javascript
export const initialResortsState = {
  error: null,
  loading: false,
  resorts: []
};
```

## Reducer

Define a reducer pure function that returns a new state object determined by an appropriate action:

```javascript
export const resortReducer = (
  state: State = initialResortsState,
  action: ResortAction
): State => {
  switch (action.type) {
    case ResortActions.LoadResorts:
      return {
        ...state,
        loading: true
      };
    case ResortActions.LoadResortsFail:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case ResortActions.LoadResortsSuccess:
      return {
        ...state,
        error: null,
        loading: false,
        resorts: action.resorts
      };
    default:
      return state;
  }
};
```

* The `resortReducer` function accepts two arguments: the current state, which defaults to the initial state that we defined previously, and the action that is being performed.
* Note that the return type is a new `State` object.
* Within our reducer, we `switch` on the `action.type` value.
* For the `LoadResorts` action we return a new state with the `loading` property set to `true`. We can use this to toggle a loading indicator.
* For the `LoadResortsFail` action we return a new state with the `loading` property set to `false` along with an `error` object.
* For the `LoadResortsSuccess` action we return a new state with the `loading` property set to `false` along with the `resorts` array.

## Collections

For now, we'll be storing the collection of `resorts` as an array in the state object.
We'll learn about the performance impact this might have and why we will use a `Dictionary` to store a collection of entities when using the @ngrx/entity library.

## Update `reducers`

Open **src/app/store/index.ts** and specify the new `resort` property in the state object along with the `resortReducer`:

```javascript
const reducers: ReducerMap = {
  resort: resortReducer,
  sidebar: sidebarReducer
};
```