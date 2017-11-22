import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// feature
import { FlightLeg } from './../../model/flight-leg.model';
import { FlightLegsRestService } from './../../services/flight-legs-rest.service';
import { FlightLegsSandboxService } from './../../services/flight-legs-sandbox.service';

// states
import * as rootState from './../../../core/application-state-management/application-state-management';
import * as flightLegsState from './../../states/state-management';


@Component({
  selector: 'my-flight-leg-list-smart',
  templateUrl: './flight-leg-list-smart.component.html',
  styleUrls: ['./flight-leg-list-smart.component.scss']
})
export class FlightLegListSmartComponent implements OnInit {
  flightLegs$: Observable<FlightLeg[]> = this.flightLegStore.select(flightLegsState.selectFlightLegList);
  constructor(private flightLegStore: Store<flightLegsState.State>, private flightLegSandbox: FlightLegsSandboxService) { }

  ngOnInit() {
    this.flightLegs$.subscribe((flightLegs: FlightLeg[]) => {
      console.log('flightLegs$ changed in store', flightLegs);
    });
    this.flightLegSandbox.initFlightLegs();
  }

}
