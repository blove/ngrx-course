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
    exhaustMap(action => {
      debugger;
      return this.resortService.search(action.q).pipe(
        map(resorts => new SearchResortsSuccess(resorts)),
        catchError(error => of(new SearchResortsFail(error)))
      );
    })
  );

  constructor(private actions: Actions, private resortService: ResortService) {}
}
