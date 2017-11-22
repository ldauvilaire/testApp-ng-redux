import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FlightLegsRestService } from './flight-legs-rest.service';

import * as rootState from './../../core/application-state-management/application-state-management';
import * as featureState from './../states/state-management';
import * as ListActions from './../states/flight-leg-list-state';
import { SetFlightLegs } from './../states/flight-leg-list-state/flight-leg-list.actions';
import { FlightLeg } from './../model/flight-leg.model';

@Injectable()
export class FlightLegsSandboxService {

  constructor(
    private rootStore: Store<rootState.State>,
    private flightLegtore: Store<rootState.State>,
    private flightLegRestService: FlightLegsRestService) { }


  initFlightLegs() {
    this.flightLegRestService.getFlightLegs().then((flightLegs: FlightLeg[]) => {
      this.flightLegtore.dispatch(new ListActions.SetFlightLegs(flightLegs));
    });
  }
}
