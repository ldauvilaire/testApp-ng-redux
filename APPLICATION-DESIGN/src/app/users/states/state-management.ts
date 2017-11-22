import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromRoot from './../../core/application-state-management/application-state-management';
import * as fromCurrent from './current-user-state/';
import * as fromList from './user-list-state/';
import { PlatformUser } from './../model/platform-user.model';

export type ListActions = fromList.Actions;

export interface State {
    currentUser: fromCurrent.State;
    userList: fromList.State;
}

export const reducers: ActionReducerMap<State> = {
    currentUser: fromCurrent.reducer,
    userList: fromList.reducer
};
// feature State access

export const selectUsersState = createFeatureSelector<State>('users');
// Current FlightLeg access
export const selectCurrentUserState = createSelector(selectUsersState, (state: State) => state.currentUser);
// Current FlightLeg properties
export const selectCurrentUser = createSelector(
    selectCurrentUserState, (state: fromCurrent.State): PlatformUser => state.currentUser);
// FlightLeg List states
export const selectUserListState = createSelector(selectUsersState, (state: State) => state.userList);
// Current FlightLeg properties
export const selectUserList = createSelector(
    selectUserListState, (state: fromList.State): PlatformUser[] => state.users);
