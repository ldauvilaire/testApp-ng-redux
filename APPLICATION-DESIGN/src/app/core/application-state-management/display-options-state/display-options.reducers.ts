import { initialState, State } from './display-options.state';
import * as displayOptions from './display-options.actions';

export function reducer(state: State = initialState, action: displayOptions.Actions): State {
    switch (action.type) {
        case displayOptions.OPEN_SIDENAV:
            return Object.assign({}, state, {
                showSidenav: true,
            });
        case displayOptions.CLOSE_SIDENAV:
            return Object.assign({}, state, {
                showSidenav: false,
            });
        case displayOptions.SHOW_RESOURCES:
            return Object.assign({}, state, {
                showResources: true,
            });
        case displayOptions.HIDE_RESOURCES:
            return Object.assign({}, state, {
                showResources: false,
            });
        case displayOptions.SET_CURRENT_LANGUAGE:
            return languageReducer(state, action);
        default:
          return state;
      }
}

function languageReducer(state: State, action: displayOptions.Actions): State {
    switch (action.type) {
        case displayOptions.SET_CURRENT_LANGUAGE:
            // check if selected language is in languages list
            if (state.languages.indexOf(action.payload) > -1) {
                return Object.assign({}, state, {
                    currentLanguage: action.payload,
                });
            }
            return state;
        default:
          return state;
      }
}

