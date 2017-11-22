import { Action } from '@ngrx/store';
import { User } from './../../model/user.model';

export const LOGIN_PENDING = '[Auth Status] Login Pending';
export const LOGIN_SUCCESS = '[Auth Status] Login Success';
export const LOGIN_FAILURE = '[Auth Status] Login Failure';

export class LoginPending implements Action {
    readonly type = LOGIN_PENDING;
}

export class LoginFailure implements Action {
    readonly type = LOGIN_FAILURE;
    constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
}

export type Actions = LoginPending | LoginFailure | LoginSuccess;
