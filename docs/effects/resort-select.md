# Resort Select

To recap:

* We declared the `SearchResorts` action.
* We declared the `ResortEffects` class with an effect to perform the asynchronous searching for resorts using an API implemented in the `ResortService`.
* We imported the `EffectsModule` in the `CoreModule` and specified the `ResortEffects` class.

Now, let's update the `SearchDialogComponent` to select the `resorts` from the state object.

Open the **src/app/containers/search-dialog/search-dialog.component.ts** file.

## Inject `Store`

Inject the `Store` singleton instance:

```javascript
import { State } from '@app/state';
import { Store } from '@ngrx/store';

export class SearchDialogComponent {
  constructor(private store: Store<State>) {}
}
```

## Define `resorts`

Define the `resorts` property:

```javascript
import { Observable } from 'rxjs';
import { Resort } from '@app/models/resort.model';

export class SearchDialogComponent {
  resorts: Observable<Resort[]>;

  constructor(private store: Store<State>) {}
}
```

The `resorts` property is an `Observable` of an array of `Resort` objects.

## Declare `resorts`

In the `ngOnInit()` lifecycle method set the `resorts` property using the `resorts` selector: 

```javascript
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

export class SearchDialogComponent {
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.resorts = this.store.pipe(
      select(resorts),
      filter(resorts => resorts.length > 0)
    );
  }
}
```

**Pro Tip**: We do not `subscribe()` to the `resorts` property becuase we'll take advantage of the `AsyncPipe` in the template.