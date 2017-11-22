import { Component, OnInit } from '@angular/core';

import { Turnaround } from './../../model/turnaround.model';
import { TurnaroundsRestService } from './../../services/turnarounds-rest.service';
import { UserProfile } from './../../../shared/model/user-profile.model';

@Component({
  selector: 'my-turnaround-list-smart',
  templateUrl: './turnaround-list-smart.component.html',
  styleUrls: ['./turnaround-list-smart.component.scss']
})
export class TurnaroundListSmartComponent implements OnInit {
  turnarounds: Promise<Turnaround[]>;
  userProfile: UserProfile;
  constructor(private turnaroundRestService: TurnaroundsRestService) { }

  ngOnInit() {
    this.turnarounds = this.turnaroundRestService.getTurnarounds();
  }

}
