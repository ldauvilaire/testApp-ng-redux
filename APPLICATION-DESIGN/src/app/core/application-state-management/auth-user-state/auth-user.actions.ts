import { Action } from '@ngrx/store';
import { User } from './../../model/user.model';

export const DELETE_USER = '[Auth User] Delete User';
export const SET_USER = '[Auth User] Set User';

export class SetUser implements Action {
    readonly type = SET_USER;
    constructor(public payload: User) {}
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;
}

export type Actions = DeleteUser | SetUser;
