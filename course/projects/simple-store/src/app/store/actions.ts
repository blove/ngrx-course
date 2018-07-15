import { Action } from "./store";
import { Resort } from "./models";

export enum SidebarActions {
  HideSidebar = "[sidebar] Hide",
  ShowSidebar = "[sidebar] Show"
}

export class HideSidebar implements Action {
  readonly type = SidebarActions.HideSidebar;
}

export class ShowSidebar implements Action {
  readonly type = SidebarActions.ShowSidebar;
}

export type SidebarAction = HideSidebar | ShowSidebar;

export enum ResortActions {
  LoadResorts = "[resorts] Load",
  LoadResortsFail = "[resorts] Load fail",
  LoadResortsSuccess = "[resorts] Load success"
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
