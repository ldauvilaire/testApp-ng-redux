import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromRoot from './../../core/application-state-management/application-state-management';
import * as fromCurrent from './current-flight-leg-state/';
import * as fromList from './flight-leg-list-state/';
import { FlightLeg } from './../model/flight-leg.model';

export type ListActions = fromList.Actions;

export interface State {
    currentFlightLeg: fromCurrent.State;
    flightLegList: fromList.State;
}

export const reducers: ActionReducerMap<State> = {
    currentFlightLeg: fromCurrent.reducer,
    flightLegList: fromList.reducer
};
// feature State access

export const selectFlightLegState = createFeatureSelector<State>('flight-legs');
// Current FlightLeg access
export const selectCurrentFlightLegState = createSelector(selectFlightLegState, (state: State) => state.currentFlightLeg);
// Current FlightLeg properties
export const selectCurrentFlightLeg = createSelector(
    selectCurrentFlightLegState, (state: fromCurrent.State): FlightLeg => state.selected);
// FlightLeg List states
export const selectFlightLegListState = createSelector(selectFlightLegState, (state: State) => state.flightLegList);
// Current FlightLeg properties
export const selectFlightLegList = createSelector(
    selectFlightLegListState, (state: fromList.State): FlightLeg[] => state.flightLegs);
