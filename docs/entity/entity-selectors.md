# Entity Selectors

The @ngrx/entity library also provides selectors to access data stored in a collection:

* `selectIds`: access the `ids` array.
* `selectEntities`: access the `entities` dictionary.
* `selectAll`: access the ordered array of entities in the collection.
* `selectTotal`: access the total (count) of entities in the collection.

## Update Resort Selectors

Open **src/app/state/index.ts** and export the selectors using the adapter's `getSelectors()` method:

```javascript
import { adapter as resortAdapter } from './resort/resort.reducer';

export const {
  selectIds: resortIds,
  selectEntities: resortEntities,
  selectAll: resorts,
  selectTotal: totalResorts
} = resortAdapter.getSelectors(resortState);
```

* Delete the existing `resorts` selector and remove the `getResorts()` projector import.
* Use object desctructuring to alias the generic selectors returned from the `getSelectors()` method.
* Be sure to specify the feature state selector when invoking `getSelectors()`.