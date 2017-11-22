import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromDisplayOptions from './display-options-state';
import * as fromAuthStatus from './auth-status-state/';
import * as fromAuthUser from './auth-user-state/';
import { User } from './../model/user.model';
/**
 * Build the state Tree adding sub-states
 * There seems to be no easy workaround for importing and declaring explixitely every state of the application here
 */
export interface State {
    displayOptions: fromDisplayOptions.State;
    authStatus;
    authUser;
}
/**
 * Discribe which reducer applies to what...
 * Global ActionReducerMap will dispatch actions to each individual reducer
 * There seems to be no easy workaround for importing and declaring explixitely every reducer of the application here
 */
export const reducers: ActionReducerMap<State> = {
    displayOptions: fromDisplayOptions.reducer,
    authStatus: fromAuthStatus.reducer,
    authUser: fromAuthUser.reducer
};
// console.log all actions
export function stateLogger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer.
 * We can apply here global additionnal treatment to each individual reducer
 * To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [stateLogger]
    : [];

/**
 * Define access to inner states and properties
 * This is the biggest boilerplate part
 * so it's kind of convenient if it's all in the state-management file
 */
// displayOptions states
export const selectDisplayOptionsState = createFeatureSelector<fromDisplayOptions.State>('displayOptions');
// displayOptions properties
export const selectShowSidenav = createSelector(
    selectDisplayOptionsState, (state: fromDisplayOptions.State): boolean => state.showSidenav);
export const selectCurrentLanguage = createSelector(
    selectDisplayOptionsState, (state: fromDisplayOptions.State): boolean => state.showResources);
export const selectLanguages = createSelector(
    selectDisplayOptionsState, (state: fromDisplayOptions.State): string => state.currentLanguage);
export const selectShowResources = createSelector(
    selectDisplayOptionsState, (state: fromDisplayOptions.State): string[] => state.languages);

// authStatus
export const selectAuthStatusState = createFeatureSelector<fromAuthStatus.State>('authStatus');
export const selectAuthenticationError = createSelector(
    selectAuthStatusState, (state: fromAuthStatus.State): string => state.error);
export const selectAuthenticationPending = createSelector(
    selectAuthStatusState, (state: fromAuthStatus.State): boolean => state.pending);
// authUser
export const selectAuthUserState = createFeatureSelector<fromAuthUser.State>('authUser');
export const selectUserIsLogged = createSelector(
    selectAuthUserState, (state: fromAuthUser.State): boolean => state.userIsLogged);
export const selectLoggedUser = createSelector(
    selectAuthUserState, (state: fromAuthUser.State): User => state.loggedUser);

