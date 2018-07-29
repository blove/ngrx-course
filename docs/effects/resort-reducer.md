# Resort Reducer

Create a new file at **src/app/state/resort/resort.reducer.ts**.

## `State` Interface

First, declare the `State` interface:

```javascript
export interface State {
  error: Error | null;
  loading: boolean;
  searchResults: Resort[];
}
```

* The `error` property is either an `Error` object or `null`. We can use this to log the error and to indicate an error to the user.
* The `loading` property is `boolean` value indicating if the search results are loading.
* The `searchResults` property is an array of `Resort` objects that are the result of the user's search.

## Initial State

Declare the `initialState` object:

```javascript
export const initialState: State = {
  loading: false,
  searchResults: []
};
```

## Reducer Function

Then, declare the `reducer()` function:

```javascript
export function reducer(state = initialState, action: ResortActions): State {
  switch (action.type) {
    case ResortActionTypes.SearchResorts:
      return {
        ...state,
        loading: true,
        error: null,
        searchResults: []
      };
    case ResortActionTypes.SearchResortsFail:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case ResortActionTypes.SearchResortsSuccess:
      return {
        ...state,
        error: null,
        loading: false,
        searchResults: action.resorts
      };
    default:
      return state;
  }
}
```

## Projector Functions

Finally, create projector functions that will be used in the selectors for the resort feature:

```javascript
export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
export const getSearchResults = (state: State) => state.searchResults;
```

## Declare Top-Level State Property

Open the **src/app/state/index.ts** file and add a new member to the `Features` enum:

```javascript
export enum Features {
  sidenav = 'sidenav',
  resort = 'resort'
}
```

Then, add the new property to the `State` interface:

```javascript
import { State as ResortState } from './resort/resort.reducer';

export interface State {
  \[Features.sidenav]: SidenavState;
  \[Features.resort]: ResortState;
}
```

*Note*: Disregard the leading backslash. This is to work around an issue with Gitbook.

## Declare Reducer

Then, add the reducer function to the `reducers` map:

```javascript
import {
  reducer as resortReducer,
  State as ResortState
} from './resort/resort.reducer';

export const reducers: ActionReducerMap<State> = {
  [Features.sidenav]: sidenavReducer,
  [Features.resort]: resortReducer
};
```
