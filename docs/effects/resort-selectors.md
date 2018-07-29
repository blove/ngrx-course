# Resort Selectors

Create selectors to:

* Access the `resort` feature state.
* Access the `error` object.
* Access the `loading` boolean value.
* Access the `searchResults` array.

## Declare Feature Selector

First, create a feature selector to access the `resort` top-level property in the state object:

```javascript
export const resortState = createFeatureSelector<ResortState>(Features.resort);
```

## Declare Selectors

Then, using the `resortState` selector, create the selectors:

```javascript
import {
  getError,
  getLoading,
  getResorts,
  reducer as resortReducer,
  State as ResortState
} from './resort/resort.reducer';

export const resortError = createSelector(resortState, getError);
export const resortIsLoading = createSelector(resortState, getLoading);
export const searchResults = createSelector(resortState, getSearchResults);
```