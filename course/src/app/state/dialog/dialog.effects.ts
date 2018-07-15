import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  @Effect({
    dispatch: false
  })
  open: Observable<Action> = this.actions.pipe(
    ofType<OpenDialog>(DialogActionTypes.OpenDialog),
    tap((action: OpenDialog) =>
      this.matDialog.open(action.componentType, action.config)
    )
  );

  constructor(private actions: Actions, private matDialog: MatDialog) {}
}
