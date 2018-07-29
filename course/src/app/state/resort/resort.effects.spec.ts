import { TestBed } from '@angular/core/testing';
import { ResortService } from '@app/core/services/resort.service';
import { generateResort } from '@app/models/resort.model';
import { CloseDialogs } from '@app/state/dialog/dialog.actions';
import { SetMapZoom } from '@app/state/map/map.actions';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { Observable } from 'rxjs';
import {
  SearchResorts,
  SearchResortsFail,
  SearchResortsSuccess,
  SelectResort
} from './resort.actions';
import { ResortEffects } from './resort.effects';

describe('ResortEffects', () => {
  let actions: Observable<any>;
  let effects: ResortEffects;
  let resortService: ResortService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResortEffects,
        {
          provide: ResortService,
          useValue: {}
        },
        provideMockActions(() => actions)
      ]
    });

    actions = TestBed.get(Actions);
    effects = TestBed.get(ResortEffects);
    resortService = TestBed.get(ResortService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('closeDialogOnSelect', () => {
    it('should dispatch the CloseDialogs action', () => {
      const resort = generateResort();
      const action = new SelectResort(resort);
      const outcome = new CloseDialogs();

      actions = hot('-a', { a: action });
      const expected = cold('-a', { a: outcome });

      expect(effects.closeDialogOnSelect).toBeObservable(expected);
    });
  });

  describe('search', () => {
    it('should dispatch the SearchResortsSuccess action on success', () => {
      const q = 'Testing';
      const resorts = [generateResort()];
      const action = new SearchResorts(q);
      const outcome = new SearchResortsSuccess(resorts);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resorts });
      const expected = cold('--b', { b: outcome });
      resortService.search = jest.fn(() => response);

      expect(effects.search).toBeObservable(expected);
    });

    it('should dispatch the SearchResortsFail action on failure', () => {
      const q = 'Testing';
      const error = new Error('Test Error');
      const action = new SearchResorts(q);
      const outcome = new SearchResortsFail(error);

      actions = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--b', { b: outcome });
      resortService.search = jest.fn(() => response);

      expect(effects.search).toBeObservable(expected);
    });
  });

  describe('setMapZoom', () => {
    it('should set thet map zoom', () => {
      const resort = generateResort();
      const action = new SelectResort(resort);
      const outcome = new SetMapZoom(12);

      actions = hot('-a', { a: action });
      const expected = cold('-a', { a: outcome });

      expect(effects.setMapZoom).toBeObservable(expected);
    });
  });
});
