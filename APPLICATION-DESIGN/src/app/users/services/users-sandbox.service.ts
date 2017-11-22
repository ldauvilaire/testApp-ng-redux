import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersRestService } from './users-rest.service';

import * as rootState from './../../core/application-state-management/application-state-management';
import * as featureState from './../states/state-management';
import * as ListActions from './../states/user-list-state';
import { SetUsers } from './../states/user-list-state/user-list.actions';
import { PlatformUser } from './../model/platform-user.model';

@Injectable()
export class UsersSandboxService {

  constructor(
    private rootStore: Store<rootState.State>,
    private userStore: Store<rootState.State>,
    private usersRestService: UsersRestService) { }


  initFlightLegs() {
    this.usersRestService.getUsers().then((users: PlatformUser[]) => {
      this.userStore.dispatch(new ListActions.SetUsers(users));
    });
  }

}
