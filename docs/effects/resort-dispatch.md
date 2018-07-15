# Resort Dispatch

Open the **src/app/containers/search-dialog/search-dialog.component.ts** file.

## Subscribe to `valueChanges`

Use the `valueChanges` observable on the `FormControl` to dispatch the `SearchResorts` action:

```javascript
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { SearchResorts } from '@app/state/resort/resort.actions';

export class SearchDialogComponent implements OnDestroy, OnInit {
  // code omitted

  ngOnInit() {
    this.resorts = this.store.pipe(
      select(resorts),
      filter(resorts => resorts.length > 0)
    );

    this.searchFormControl.valueChanges
      .pipe(
        filter(q => q.length > 1),
        debounceTime(500)
        takeUntil(this.unsubscribe),
      )
      .subscribe(q => this.store.dispatch(new SearchResorts(q)));
  }
}
```

* The `filter()` operator ensures that the user has entered a query with more than one character.
* The `debounceTime()` operator discards notifications until `500` milliseconds has passed since the last notification. This prevents us from creating a network request for each key stroke when the user is entering new values.
* The `takeUntil` operator completes the observable when the component is destroyed via the `ngOnDestory()` lifecycle method.
* Finally, `subscribe()` to the next notification and `dispatch()` the `SearchResorts` action, specifying the user's query.
