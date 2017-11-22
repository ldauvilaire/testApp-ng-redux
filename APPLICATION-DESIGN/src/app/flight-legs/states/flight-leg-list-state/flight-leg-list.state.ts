import { FlightLeg } from './../../model/flight-leg.model';

export interface State {
    flightLegs: FlightLeg[];
}

export const initialState: State = {
    flightLegs: []
};
