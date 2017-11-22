import { Action } from '@ngrx/store';
import { FlightLeg } from './../../model/flight-leg.model';

export class ActionTypes {
    public static ADD_FLIGHT_LEG = '[FlightLeg List] Add FlightLegs';
    public static EMPTY_FLIGHT_LEGS = '[FlightLeg List] Empty FlightLegs';
    public static REMOVE_FLIGHT_LEG = '[FlightLeg List] Remove FlightLegs';
    public static SET_FLIGHT_LEGS = '[FlightLeg List] Set FlightLegs';
    public static UPDATE_FLIGHT_LEG = '[FlightLeg List] Updtae FlightLegs';
}
export class AddFlightLeg implements Action {
    readonly type = ActionTypes.ADD_FLIGHT_LEG;
    constructor(public payload: FlightLeg) { }
}
export class EmptyFlightLegs implements Action {
    readonly type = ActionTypes.EMPTY_FLIGHT_LEGS;
    constructor(public payload?: any) { }
}
export class RemoveFlightLeg implements Action {
    readonly type = ActionTypes.REMOVE_FLIGHT_LEG;
    constructor(public payload: number) { }
}
export class SetFlightLegs implements Action {
    readonly type = ActionTypes.SET_FLIGHT_LEGS;
    constructor(public payload: FlightLeg[]) { }
}
export class UpdateFlightLeg implements Action {
    readonly type = ActionTypes.UPDATE_FLIGHT_LEG;
    constructor(public payload: FlightLeg) { }
}

export type Actions = AddFlightLeg | EmptyFlightLegs | RemoveFlightLeg | SetFlightLegs | UpdateFlightLeg;
