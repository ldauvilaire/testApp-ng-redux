/**
 * Defines all actions to handle application state
 */
import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[Display Options] Open Sidenav';
export const CLOSE_SIDENAV = '[Display Options] Close Sidenav';
export const SHOW_RESOURCES = '[Display Options] Show Resources';
export const HIDE_RESOURCES = '[Display Options] Hide Resources';
export const SET_CURRENT_LANGUAGE = '[Display Options] Set Current Language';

export class OpenSidenav implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenav implements Action {
  readonly type = CLOSE_SIDENAV;
}

export class ShowResources implements Action {
    readonly type = SHOW_RESOURCES;
  }

export class HideResources implements Action {
    readonly type = HIDE_RESOURCES;
}

export class SetCurrentLanguage implements Action {
    readonly type = SET_CURRENT_LANGUAGE;
    constructor(public payload: string) {}
}

export type Actions =
    OpenSidenav
  | CloseSidenav
  | ShowResources
  | HideResources
  | SetCurrentLanguage;

