import { initialState, State } from './auth-user.state';
import * as user from './auth-user.actions';

export function reducer(state = initialState, action: user.Actions): State {
    switch (action.type) {
        case user.SET_USER: {
            return {
            ...state,
            userIsLogged: true,
            loggedUser: action.payload,
            };
        }

        case user.DELETE_USER: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}
