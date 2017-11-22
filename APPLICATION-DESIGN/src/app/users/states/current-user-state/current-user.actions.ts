import { Action } from '@ngrx/store';
import { PlatformUser } from './../../model/platform-user.model';

export class ActionTypes {
    public static DELETE_CURRENT = '[Current User] Delete Current';
    public static SET_CURRENT = '[Current User] Set Current';
}
export class DeleteCurrent implements Action {
    readonly type = ActionTypes.DELETE_CURRENT;
    constructor(public payload?: any) { }
}

export class SetCurrent implements Action {
    readonly type = ActionTypes.SET_CURRENT;
    constructor(public payload: PlatformUser) { }
}

export type Actions = DeleteCurrent | SetCurrent;
