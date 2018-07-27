import { Action } from '@ngrx/store';

export enum SidenavActionTypes {
  HideSidenav = '[Sidenav] Hide Sidenav',
  ShowSidenav = '[Sidenav] Show Sidenav'
}

export class HideSidenav implements Action {
  readonly type = SidenavActionTypes.HideSidenav;
}

export class ShowSidenav implements Action {
  readonly type = SidenavActionTypes.ShowSidenav;
}

export type SidenavAction = HideSidenav | ShowSidenav;
