import { Component, OnInit } from '@angular/core';

// shared or core
import { UserService } from './../../../core/app-wide-services/user.service';

// feature
import { PlatformUser } from './../../model/platform-user.model';
import { UsersRestService } from './../../services/users-rest.service';

@Component({
  selector: 'my-users-smart',
  templateUrl: './users-smart.component.html',
  styleUrls: ['./users-smart.component.scss']
})
export class UsersSmartComponent implements OnInit {

  user: PlatformUser;
  users: PlatformUser[];

  msg = 'Loading users ...';
  userName = '';

  constructor(private userRestService: UsersRestService, userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
      this.userRestService.getUsers().then(users => {
      this.msg = '';
      this.users = users;
      this.user = users[0];
    });
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
    this.user = {id: 42, name: '', pwd: ''};
    this.users.push(this.user);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }

}
