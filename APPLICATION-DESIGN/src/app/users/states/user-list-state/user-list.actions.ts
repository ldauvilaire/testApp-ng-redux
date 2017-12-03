import { Action } from '@ngrx/store';
import { PlatformUser } from './../../model/platform-user.model';

export class ActionTypes {
    public static ADD_USER = '[User List] Add User';
    public static EMPTY_USERS = '[User List] Empty Users';
    public static REMOVE_USER = '[User List] Remove User';
    public static SET_USERS = '[User List] Set Users';
    public static UPDATE_USER = '[User List] Update User';
}
export class AddUser implements Action {
    readonly type = ActionTypes.ADD_USER;
    constructor(public payload: PlatformUser) { }
}
export class EmptyUsers implements Action {
    readonly type = ActionTypes.EMPTY_USERS;
    constructor(public payload?: any) { }
}
export class RemoveUser implements Action {
    readonly type = ActionTypes.REMOVE_USER;
    constructor(public payload: number) { }
}
export class SetUsers implements Action {
    readonly type = ActionTypes.SET_USERS;
    constructor(public payload: PlatformUser[]) { }
}
export class UpdateUser implements Action {
    readonly type = ActionTypes.UPDATE_USER;
    constructor(public payload: PlatformUser) { }
}

export type Actions = AddUser | EmptyUsers | RemoveUser | SetUsers | UpdateUser;
