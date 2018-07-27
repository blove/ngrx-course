import { Resort } from './models';
import { Action } from './store';

export enum SidenavActionTypes {
  HideSidenav = '[sidenav] Hide',
  ShowSidenav = '[sidenav] Show'
}

export class HideSidenav implements Action {
  readonly type = SidenavActionTypes.HideSidenav;
}

export class ShowSidenav implements Action {
  readonly type = SidenavActionTypes.ShowSidenav;
}

export type SidenavAction = HideSidenav | ShowSidenav;

export enum ResortActions {
  LoadResorts = '[resorts] Load',
  LoadResortsFail = '[resorts] Load fail',
  LoadResortsSuccess = '[resorts] Load success'
}

export class LoadResorts implements Action {
  readonly type = ResortActions.LoadResorts;
}

export class LoadResortsFail implements Action {
  readonly type = ResortActions.LoadResortsFail;

  constructor(public error: Error) {}
}

export class LoadResortsSuccess implements Action {
  readonly type = ResortActions.LoadResortsSuccess;

  constructor(public resorts: Resort[]) {}
}

export type ResortAction = LoadResorts | LoadResortsSuccess | LoadResortsFail;
