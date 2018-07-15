import { Injectable } from '@angular/core';
import { ResortService } from '@app/core/services/resort.service';
import { SetMapZoom } from '@app/state/map/map.actions';
import { HideSidenav } from '@app/state/sidenav/sidenav.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { CloseDialogs } from './../dialog/dialog.actions';
import {
  ResortActionTypes,
  SearchResorts,
  SearchResortsFail,
  SearchResortsSuccess,
  SelectResort
} from './resort.actions';

@Injectable()
export class ResortEffects {
  @Effect()
  search: Observable<Action> = this.actions.pipe(
    ofType<SearchResorts>(ResortActionTypes.SearchResorts),
    exhaustMap(action => {
      return this.resortService.search(action.q).pipe(
        map(resorts => new SearchResortsSuccess(resorts)),
        catchError(error => of(new SearchResortsFail(error)))
      );
    })
  );

  @Effect()
  closeDialogOnSelect: Observable<Action> = this.actions.pipe(
    ofType<SelectResort>(ResortActionTypes.SelectResort),
    map(() => new CloseDialogs())
  );

  @Effect()
  hideSidenavOnSelect: Observable<Action> = this.actions.pipe(
    ofType<SelectResort>(ResortActionTypes.SelectResort),
    map(() => new HideSidenav())
  );

  @Effect()
  setMapZoom: Observable<Action> = this.actions.pipe(
    ofType<SelectResort>(ResortActionTypes.SelectResort),
    map(() => new SetMapZoom(12))
  );

  constructor(private actions: Actions, private resortService: ResortService) {}
}
