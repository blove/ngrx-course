# Collection Methods

The entity adapter provides the following methods for updating the collection in state:

* `addOne`: Add an entity to the collection.
* `addMany`: Add many entities to the collection.
* `addAll`: Replace all entities in the collection with the provided entitites.
* `removeOne`: Remove an entity from the collection.
* `removeMany`: Remove many entities from the collection.
* `removeAll`: Clear the entire collection.
* `updateOne`: Update an entity in the collection.
* `updateMany`: Update many entities in the collection.
* `upsertOne`: Add or Update an entity in the collection.
* `upsertMany`: Add or Update many entities in the collection.

## Update `reducer()`

Open **src/app/state/resort/resort.reducer.ts** and update the reducer case for the `SelectResort` action:

```javascript
export function reducer(state = initialState, action: ResortActions): State {
  switch (action.type) {

    // code omitted

    case ResortActionTypes.SelectResort:
      return adapter.addOne(action.resort, {
        ...state,
        selectedResortId: action.resort.id
      });
    default:
      return state;
  }
}
```

* We're using the `addOne`() method to add an entity to the collection.
* The first argument is the new entity.
* The second argument is the state object. We use the spread operator to make a shallow clone and update the `selctedResortId` value.

You can also remove the `getResorts()` projector function as this is no longer needed.