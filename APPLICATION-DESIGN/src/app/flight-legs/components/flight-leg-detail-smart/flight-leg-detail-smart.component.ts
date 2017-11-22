import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlightLeg } from './../../model/flight-leg.model';
import { FlightLegsRestService } from './../../services/flight-legs-rest.service';

@Component({
  selector: 'my-flight-leg-detail-smart',
  templateUrl: './flight-leg-detail-smart.component.html',
  styleUrls: ['./flight-leg-detail-smart.component.scss']
})
export class FlightLegDetailSmartComponent implements OnInit {
  flightLeg: FlightLeg;
  constructor(private route: ActivatedRoute,
    private flightLegsService: FlightLegsRestService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.flightLegsService.getFlightLeg(id).then(flightLeg => this.flightLeg = flightLeg);
  }

}
