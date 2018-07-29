import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CloseDialogs, DialogActionTypes, OpenDialog } from './dialog.actions';

@Injectable()
export class DialogEffects {
  @Effect({
    dispatch: false
  })
  close: Observable<Action> = this.actions.pipe(
    ofType<CloseDialogs>(DialogActionTypes.CloseDialogs),
    tap(() => this.matDialog.closeAll())
  );

  @Effect()
  open: Observable<Action> = this.actions.pipe(
    ofType<OpenDialog>(DialogActionTypes.OpenDialog),
    map((action: OpenDialog) =>
      this.matDialog.open(action.componentType, {
        ...action.config,
        disableClose: true
      })
    ),
    switchMap(matDialogRef => matDialogRef.backdropClick()),
    map(() => new CloseDialogs())
  );

  constructor(private actions: Actions, private matDialog: MatDialog) {}
}
