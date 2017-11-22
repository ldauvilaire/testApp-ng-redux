import { Injectable } from '@angular/core';

import { FlightLeg } from './../model/flight-leg.model';
import { FLIGHT_LEGS } from './../constants/flight-legs.constants';

const FETCH_LATENCY = 500;

@Injectable()
export class FlightLegsRestService {

  getFlightLegs() {
    return new Promise<FlightLeg[]>(resolve => {
      setTimeout(() => { resolve(FLIGHT_LEGS); }, FETCH_LATENCY);
    });
  }

  getFlightLeg(id: number | string) {
    return this.getFlightLegs()
      .then(flightLegs => flightLegs.find((flightLeg: FlightLeg) => flightLeg.id === +id));
  }

}
