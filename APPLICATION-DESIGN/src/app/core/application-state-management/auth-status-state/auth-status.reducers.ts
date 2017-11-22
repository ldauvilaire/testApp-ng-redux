import { initialState, State } from './auth-status.state';
import * as authentication from './auth-status.actions';

/* Actions = Login | LoginFailure | LoginSuccess; */
export function reducer(state: State = initialState, action: authentication.Actions): State {
    switch (action.type) {
        case authentication.LOGIN_PENDING: {
            return {
                ...state,
                error: null,
                pending: true,
            };
        }

        case authentication.LOGIN_SUCCESS: {
            return {
                ...state,
                error: null,
                pending: false,
            };
        }

        case authentication.LOGIN_FAILURE: {
            return {
                ...state,
                error: action.payload,
                pending: false,
            };
        }

        default: {
            return state;
        }
    }
}
