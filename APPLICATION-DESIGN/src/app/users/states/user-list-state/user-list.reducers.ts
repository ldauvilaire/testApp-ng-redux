import { initialState, State } from './user-list.state';
import { ActionTypes, Actions } from './user-list.actions';
import { PlatformUser } from './../../model/platform-user.model';

export function reducer(state: State = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.ADD_USER: {
            return Object.assign({}, state, {
                flightLegs: addToList(state.users, action.payload)
            });
        }
        case ActionTypes.EMPTY_USERS: {
            return initialState;
        }
        case ActionTypes.REMOVE_USER: {
            return Object.assign({}, state, {
                flightLegs: removeFromList(state.users, action.payload)
            });
        }
        case ActionTypes.SET_USERS: {
            return Object.assign({}, state, {
                flightLegs: action.payload
            });
        }
        case ActionTypes.UPDATE_USER: {
            return Object.assign({}, state, {
                flightLegs: updateInList(state.users, action.payload)
            });
        }
        default: {
            return state;
        }
    }
}

/* Pure functions : they don't modify input, they return a new value calculated from the input */
function addToList(list: PlatformUser[], flightLeg: PlatformUser): PlatformUser[] {
    return [...list, flightLeg];
}
function removeFromList(list: PlatformUser[], id: number): PlatformUser[] {
    return [...list.slice(0, id), ...list.slice(id + 1)];
}
function updateInList(list: PlatformUser[], flightLeg: PlatformUser): PlatformUser[] {
    return [...list.slice(0, flightLeg.id), flightLeg, ...list.slice(flightLeg.id + 1)];
}



