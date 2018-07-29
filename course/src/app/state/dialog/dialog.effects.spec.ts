import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { CloseDialogs, OpenDialog } from '@app/state/dialog/dialog.actions';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { Observable, Subject } from 'rxjs';
import { DialogEffects } from './dialog.effects';

describe('DialogEffects', () => {
  let actions: Observable<any>;
  let effects: DialogEffects;
  let matDialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DialogEffects,
        {
          provide: MatDialog,
          useValue: {
            closeAll: jest.fn(),
            open: jest.fn()
          }
        },
        provideMockActions(() => actions)
      ]
    });

    actions = TestBed.get(Actions);
    effects = TestBed.get(DialogEffects);
    matDialog = TestBed.get(MatDialog);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('close', () => {
    it('should invoke the closeAll method on MatDialog', () => {
      const action = new CloseDialogs();
      const spy = jest.spyOn(matDialog, 'closeAll');

      actions = hot('-a', { a: action });

      effects.close.subscribe(() => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('open', () => {
    it('should', () => {
      const action = new OpenDialog(null);
      const outcome = new CloseDialogs();
      const backdropClick = new Subject<MouseEvent>();
      const spy = jest.spyOn(matDialog, 'open').mockReturnValue({
        backdropClick
      });

      actions = hot('-a', { a: action });
      const expected = cold('-a', { a: outcome });

      effects.open.subscribe(() => {
        expect(spy).toHaveBeenCalled();
        backdropClick.next(null);
        expect(effects.open).toBeObservable(expected);
      });
    });
  });
});
