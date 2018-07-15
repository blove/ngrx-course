# Resort Actions

Create a new directory **src/app/state/resort**, along with the file **src/app/state/resort/resort.actions.ts**:

```bash
mkdir src/app/state/resort
touch src/app/state/resort/resort.actions.ts
```

Open the **resort.actions.ts** file and create an enum with the following members:

1. SearchResorts
2. SearchResortsFail
3. SearchResortsSuccess

Specify a unique string value for each enum member:

```javascript
export enum ResortActionTypes {
  SearchResorts = '[Resort] Search',
  SearchResortsFail = '[Resort] Search Fail',
  SearchResortsSuccess = '[Resort] Search Success'
}
```

## Action Classes

Create a class for each action that implements the `Action` interface:

```javascript
import { Action } from '@ngrx/store';

export class SearchResorts implements Action {
  readonly type = ResortActionTypes.SearchResorts;

  constructor(public q: string) {}
}

export class SearchResortsFail implements Action {
  readonly type = ResortActionTypes.SearchResortsFail;

  constructor(public error: Error) {}
}

export class SearchResortsSuccess implements Action {
  readonly type = ResortActionTypes.SearchResortsSuccess;

  constructor(public resorts: Resort[]) {}
}
```

* Each action declares a read-only `type` property.
* The `SearchResorts` action `constructor()` function requires the user query, which is the `string` that the user will enter in the application.
* The `SearchResortsFail` action will be invoked when an error has ocurred. The `error` must be specified when creating the action.
* The `SearchResortsSuccess` action will be invoked when the HTTP request completes. An array of `Resort` objects must be specified.

## Type Union

Create the `ResortActions` type:

```javascript
export type ResortActions =
  | SearchResorts
  | SearchResortsFail
  | SearchResortsSuccess;
```