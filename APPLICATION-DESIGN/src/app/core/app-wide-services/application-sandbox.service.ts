import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as rootState from './../application-state-management/application-state-management';
import * as displayOptions from './../application-state-management/display-options-state/';
import * as authUser from './../application-state-management/auth-user-state/';
import * as authStatus from './../application-state-management/auth-status-state/';

import { AuthenticationRestService } from './authentication-rest.service';

import { User } from './../model/user.model';
import { Authentication } from './../model/authentication.model';
import { RootRouterPath } from './../../root-router-path.constants';

@Injectable()
export class ApplicationSandboxService {

  constructor(
    private store: Store<rootState.State>,
    private authRestService: AuthenticationRestService,
    private router: Router) { }

  handleCloseSideNav() {
    this.store.dispatch(new displayOptions.CloseSidenav());
  }

  handleOpenSideNav() {
    this.store.dispatch(new displayOptions.OpenSidenav());
  }

  handleLogout() {
    this.store.dispatch(new authUser.DeleteUser());
  }
  handleSubmitUserAuthentication(submitted: Authentication) {
    this.store.dispatch(new authStatus.LoginPending());
    this.authRestService.login(submitted).subscribe(
      (user: User) => {
        this.store.dispatch(new authUser.SetUser(user));
        this.store.dispatch(new authStatus.LoginSuccess());
        console.log('application Sandbox should redirect to root but...');
        this.router.navigate([RootRouterPath.ROOT]);
      },
      (error) => {
        this.store.dispatch(new authStatus.LoginFailure(error));
      }
    );
  }
}
