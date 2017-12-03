import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// state
import * as rootState from './../../application-state-management/application-state-management';

import { Authentication } from './../../model/authentication.model';
import { ApplicationSandboxService } from './../../app-wide-services/application-sandbox.service';

@Component({
  selector: 'app-login-page-smart',
  templateUrl: './login-page-smart.component.html',
  styleUrls: ['./login-page-smart.component.scss']
})
export class LoginPageSmartComponent implements OnInit {
  pending = false;
  error: string;

  constructor(private store: Store<rootState.State>, private applicationSandbox: ApplicationSandboxService) { }

  ngOnInit() {
    // store change detection for pending
    this.store.select(rootState.selectAuthenticationPending).subscribe((authenticationPending) => {
        this.pending = authenticationPending;
    });
    // store change detection for error
    this.store.select(rootState.selectAuthenticationError).subscribe((error) => {
        this.error = error;
    });
  }

  onSubmit($event: Authentication) {
    this.applicationSandbox.handleSubmitUserAuthentication($event);

  }
}
