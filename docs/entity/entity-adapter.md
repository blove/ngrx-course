# Entity Adapter

The @ngrx/entity stores a collection of entities using two new properties:

* `entities`: a dictionary of entities.
* `ids`: an array of entity unique identifiers.

Here is an example of a state object using the @ngrx/entity library:

```javascript
{
  resort: {
    entities: {
      1: {
        id: 1,
        name: 'Breckenridge Ski Resort'
      },
      2: {
        id: 2,
        name: 'Vail'
      }
    },
    ids: [1, 2]
  }
}
```

**Pro Tip**: The advantage to storing entities using this approach is performance.
We can avoid iterating through an array to find a particular object (which could be at the end of the array) by quickly accessing the value using the object key.

## `EntityState`

The `EntityState` interface defines the two properties: `entities` and `ids` in our `State` object.

Open **src/app/state/resort/resort.reducer.ts** and update the `State` interface:

```javascript
export interface State extends EntityState<Resort> {
  error?: Error | null;
  loading: boolean;
  searchResults: Resort[];
  selectedResortId?: string;
}
```

* The `State` interface extends the `EntityState`.
* Remove the `resorts` property as we are no longer going to store the resorts in an array and will take advantage of the @ngrx/entity library.

## Create `adapter`

Next, create the entity `adapter` using the `createEntityAdapter` method:

```javascript
export const adapter: EntityAdapter<Resort> = createEntityAdapter<Resort>();
```

* We'll get the intial state from the adapter.
* We'll use the adapter to perform CRUD operators.
* We'll access the build-in selectors that the adapter provides.

## Update `initialState`

Update the `initialState` to use the adapter's `getInitialState()` methos:

```javascript
export const initialState: State = adapter.getInitialState({
  loading: false,
  resorts: [],
  searchResults: []
});
```
