
import { FlightLeg } from './../../model/flight-leg.model';

export interface State {
    selected: FlightLeg | null;
}

export const initialState: State = {
    selected: null
};
