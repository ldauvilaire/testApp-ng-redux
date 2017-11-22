import { Action } from '@ngrx/store';
import { FlightLeg } from './../../model/flight-leg.model';

export class ActionTypes {
    public static DELETE_CURRENT = '[Current FlightLeg] Delete Current';
    public static SET_CURRENT = '[Current FlightLeg] Set Current';
}
export class DeleteCurrent implements Action {
    readonly type = ActionTypes.DELETE_CURRENT;
    constructor(public payload?: any) { }
}

export class SetCurrent implements Action {
    readonly type = ActionTypes.SET_CURRENT;
    constructor(public payload: FlightLeg) { }
}

export type Actions = DeleteCurrent | SetCurrent;
