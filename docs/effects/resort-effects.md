# Resort Effects

With the resort actions, reducer function and selectors declared we are now ready to create the `ResortEffects` class and the side effect for searching resorts using the API.

## `ResortEffects` Class

Create the file **src/app/state/resort/resort.effects.ts** and declare and export the `ResortEffects` class:

```javascript
import { Injectable } from '@angular/core';
import { ResortService } from '@app/core/services/resort.service';
import { Actions } from '@ngrx/effects';

@Injectable()
export class ResortEffects {
  constructor(private actions: Actions, private resortService: ResortService) {}
}
```

* Decorate the `ResortEffects` class with the `@Injectable` decorator.
* Inject the `Actions` observable in the constructor.
* Inject the `ResortService` in the constructor.
* We'll use the `actions` observable to listen for a specific `type` that is dispatched.

## Review `ResortService`

Let's quickly review the `ResortService` class located at **src/app/core/services/resort.service.ts**:

```javascript
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ResortService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  search(q: string): Observable<Resort[]> {
    return this.httpClient.get<Resort[]>(`${this.BASE_URL}/resorts`, {
      params: new HttpParams().set('name_like', `^${q}`)
    });
  }
}
```

* Note the `search()` method requires the user's query, declared as `q`.
* The `search()` method returns an `Observable` of an array of `Resort` objects.

## Declare `search` Effect

Declare a `search` property that invokes the `ResortService.search()` method:

```javascript
import { Injectable } from '@angular/core';
import { ResortService } from '@app/core/services/resort.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  ResortActionTypes,
  SearchResorts,
  SearchResortsFail,
  SearchResortsSuccess
} from './resort.actions';

@Injectable()
export class ResortEffects {
  @Effect()
  search: Observable<Action> = this.actions.pipe(
    ofType<SearchResorts>(ResortActionTypes.SearchResorts),
    exhaustMap(action =>
      this.resortService.search(action.q).pipe(
        map(resorts => new SearchResortsSuccess(resorts)),
        catchError(error => of(new SearchResortsFail(error)))
      )
    )
  );

  constructor(private actions: Actions, private resortService: ResortService) {}
}
```

* Decorate the `search` property with `@Effect`. This instructs the NgRx effects library that this property is a side effect that should be subcribed to.
* The `search` property returns an `Observable` of an `Action`. This allows us to chain actions. The NgRx effects library will automatically dispatch the action (or actions).
* Use the `exhaustMap` operator to map to the inner `Observable` returned from the `search()` method. 
* The `exhaustMap()` operator will discard any notifications from the outer observable until the inner observable completes.
* Invoke the `search()` method on the `resortService` instance providing the user's query.
* Use the `pipe()` method to `map()` the next notification to the `SearchResortsSuccess` action, specifying the `resorts` array.
* If an error occurs we catch it via the `catchError()` operator and return a new observable `of()` the `SearchResortsFail` action.

**Pro Tip**: We use the `of()` creation operator to create an `Observable` that immediately emits a next notification with the value specified.
In this case, the `SearchResortsFail` action.

## Import `EffectsModule`

Open **src/app/state/state.module.ts** and add the `EffectsModule` to the `imports` array for the module:

```javascript
import { ResortEffects } from '@app/state/resort/resort.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    // code omitted
    EffectsModule.forRoot([ResortEffects]),
  ]
})
export class StateModule { }
```