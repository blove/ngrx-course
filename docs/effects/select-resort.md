# Select a Resort

Add the functionality to dispatch an action when a resort is selected.

## Declare Action

Open the **src/app/state/resort/resort.action.ts** file and update the `ResortActionTypes` enum to include a new `SelectResort` member:

```javascript
export enum ResortActionTypes {

  // code omitted

  SelectResort = '[Resort] Select'
}
```

Declare a new `SelectResort` action:

```javascript
export class SelectResort implements Action {
  readonly type = ResortActionTypes.SelectResort;

  constructor(public id: string) {}
}
```

Add the `SelectResort` class to the `ResortActions` type:

```javascript
export type ResortActions =
  | SearchResorts
  | SearchResortsFail
  | SearchResortsSuccess
  | SelectResort;
```

## Update Reducer

Open **src/app/state/resort/resort.reducer.ts** file and add a `selectedResortId` property to the resort `State`:

```javascript
export interface State {
  error?: Error | null;
  loading: boolean;
  resorts: Resort[];
  selectedResortId?: string;
}
```

Update the `reducer()` function to set the `selectedResortId` value when the `SelectResort` action is dispatched:

```javascript
export function reducer(state = initialState, action: ResortActions): State {
  switch (action.type) {
    
    // code omitted

    case ResortActionTypes.SelectResort:
      return {
        ...state,
        selectedResortId: action.id
      };
    default:
      return state;
  }
}
```

Finally, create a projector function to return the value of the `selectedResortId`:

```javascript
export const getSelectedResortId = (state: State) => state.selectedResortId;
```

## Dispatch Action

Open the **src/app/containers/search-dialog/search-dialog.component.ts** file and update the `resortSelected()` method to dispatch the `SelectResort` action:

```javascript
export class SearchDialogComponent implements OnDestroy, OnInit {
  
  // code omitted

  resortSelected(event: MatAutocompleteSelectedEvent) {
    const resort: Resort = event.option.value;
    this.store.dispatch(new SelectResort(resort.id));
  }
}
```

## Serve the Application

Serve the application:

```bash
npm start
yarn start
```

Search for a ski resort, such as "Breck":

![Resort Search](./images/resort-search.gif)

When you select a resort verify that the action is dispatched using the Redux Devtools:

![Redux Devtools Select Resort](./images/redux-devtools-select-resort.png)