# Resort Select

To recap:

* We declared the `SearchResorts` action.
* We declared the `ResortEffects` class with an effect to perform the asynchronous searching for resorts using an API implemented in the `ResortService`.
* We imported the `EffectsModule` in the `CoreModule` and specified the `ResortEffects` class.

## `SearchDialogComponent`

Now, update the `SearchDialogComponent` to select the `searchResults` from the state object.

Open the **src/app/containers/search-dialog/search-dialog.component.ts** file and inject the `Store` singleton instance:

```javascript
import { State } from '@app/state';
import { Store } from '@ngrx/store';

export class SearchDialogComponent {
  constructor(private store: Store<State>) {}
}
```

Declate the `ngOnInit()` lifecycle method and set the `resorts` property using the `searchResults` selector: 

```javascript
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

export class SearchDialogComponent {
  
  // code omitted

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.resorts = this.store.pipe(
      select(searchResults),
      filter(results => results.length > 0)
    );
  }
}
```

**Pro Tip**: We do not `subscribe()` to the `resorts` property becuase we'll take advantage of the `AsyncPipe` in the template.