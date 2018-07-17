import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResortService } from '../services/resort.service';
import { LoadResortsSuccess, ResortActions } from './actions';
import { Action } from './store';

@Injectable()
export class ResortEffects {
  load = (action: Action) => {
    if (action.type !== ResortActions.LoadResorts) {
      return of(null);
    }
    return ResortService.loadAll().pipe(
      map(resorts => new LoadResortsSuccess(resorts))
    );
  };
}
