import { ComponentType } from '@angular/cdk/portal';
import { MatDialogConfig } from '@angular/material';
import { Action } from '@ngrx/store';

export enum DialogActionTypes {
  CloseDialogs = '[Dialog] Close Dialogs',
  OpenDialog = '[Dialog] Open Dialog'
}

export class CloseDialogs implements Action {
  readonly type = DialogActionTypes.CloseDialogs;
}

export class OpenDialog implements Action {
  readonly type = DialogActionTypes.OpenDialog;

  constructor(
    public componentType: ComponentType<any>,
    public config?: MatDialogConfig
  ) {}
}

export type DialogAction = CloseDialogs | OpenDialog;
