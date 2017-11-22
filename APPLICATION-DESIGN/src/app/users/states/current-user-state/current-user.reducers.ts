import { initialState, State } from './current-user.state';
import { Actions, ActionTypes } from './current-user.actions';

export function reducer(state: State = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.DELETE_CURRENT: {
            return initialState;
        }
        case ActionTypes.SET_CURRENT: {
            return {
                ...state,
                currentUser: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}