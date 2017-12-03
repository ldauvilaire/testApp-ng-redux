import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// shared or core
import { UserService } from './../../../core/app-wide-services/user.service';

// feature
import { PlatformUser } from './../../model/platform-user.model';
import { UsersRestService } from './../../services/users-rest.service';
import { UsersSandboxService } from './../../services/users-sandbox.service';

// states
import * as rootState from './../../../core/application-state-management/application-state-management';
import * as usersState from './../../states/state-management';

@Component({
  selector: 'app-users-smart',
  templateUrl: './users-smart.component.html',
  styleUrls: ['./users-smart.component.scss']
})
export class UsersSmartComponent implements OnInit {

  user: PlatformUser;
  users: PlatformUser[];

  msg = 'Loading users ...';
  userName = '';

  users$: Observable<PlatformUser[]> = this.usersStore.select(usersState.selectUserList);

  constructor(private usersStore: Store<usersState.State>, private flightLegSandbox: UsersSandboxService, appUserService: UserService) {
    this.userName = appUserService.userName;
  }

  ngOnInit() {
    this.users$.subscribe((users: PlatformUser[]) => {
      console.log('users$ changed in store', users);
      if (users.length > 0) {
        this.msg = '';
        this.user = users[0];
      }
    });
    this.flightLegSandbox.initFlightLegs();

  }
  next() {
    let ix = 1 + this.users.indexOf(this.user);
    if (ix >= this.users.length) { ix = 0; }
    this.user = this.users[ix];
  }

  onSubmit() {
    // POST-DEMO TODO: do something like save it
    this.displayMessage('Saved ' + this.user.name);
  }

  newContact() {
    this.displayMessage('New contact');
    this.user = { id: 42, name: '', pwd: '' };
    this.users.push(this.user);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }

}
