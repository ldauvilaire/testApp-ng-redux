import { initialState, State } from './current-flight-leg.state';
import { Actions, ActionTypes } from './current-flight-leg.actions';

export function reducer(state: State = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.DELETE_CURRENT: {
            return initialState;
        }
        case ActionTypes.SET_CURRENT: {
            return {
                ...state,
                selected: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
