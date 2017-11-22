/*Handle ADD_FLIGHT_LEG | EMPTY_FLIGHT_LEGS | REMOVE_FLIGHT_LEG | SET_FLIGHT_LEGS | UPDATE_FLIGHT_LEG actions*/

import { initialState, State } from './flight-leg-list.state';
import { ActionTypes, Actions } from './flight-leg-list.actions';
import { FlightLeg } from './../../model/flight-leg.model';

export function reducer(state: State = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.ADD_FLIGHT_LEG: {
            return Object.assign({}, state, {
                flightLegs: addToList(state.flightLegs, action.payload)
            });
        }
        case ActionTypes.EMPTY_FLIGHT_LEGS: {
            return initialState;
        }
        case ActionTypes.REMOVE_FLIGHT_LEG: {
            return Object.assign({}, state, {
                flightLegs: removeFromList(state.flightLegs, action.payload)
            });
        }
        case ActionTypes.SET_FLIGHT_LEGS: {
            return Object.assign({}, state, {
                flightLegs: action.payload
            });
        }
        case ActionTypes.UPDATE_FLIGHT_LEG: {
            return Object.assign({}, state, {
                flightLegs: updateInList(state.flightLegs, action.payload)
            });
        }
        default: {
            return state;
        }
    }
}

/* Pure functions : they don't modify input, they return a new value calculated from the input */
function addToList(list: FlightLeg[], flightLeg: FlightLeg): FlightLeg[] {
    return [...list, flightLeg];
}
function removeFromList(list: FlightLeg[], id: number): FlightLeg[] {
    return [...list.slice(0, id), ...list.slice(id + 1)];
}
function updateInList(list: FlightLeg[], flightLeg: FlightLeg): FlightLeg[] {
    return [...list.slice(0, flightLeg.id), flightLeg, ...list.slice(flightLeg.id + 1)];
}



