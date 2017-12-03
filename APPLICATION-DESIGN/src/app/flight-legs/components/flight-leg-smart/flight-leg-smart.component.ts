import { Component, OnInit } from '@angular/core';

// shared or core
import { UserService } from './../../../core/app-wide-services/user.service';
// feature
import { FlightLegsRestService } from './../../services/flight-legs-rest.service';

@Component({
  selector: 'app-flight-leg-smart',
  templateUrl: './flight-leg-smart.component.html',
  styleUrls: ['./flight-leg-smart.component.scss'],
  providers: [ FlightLegsRestService ]
})
export class FlightLegSmartComponent implements OnInit {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
  }

}
