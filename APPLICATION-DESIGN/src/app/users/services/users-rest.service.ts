import { Injectable } from '@angular/core';

import { PlatformUser } from './../model/platform-user.model';
import { PLATFORM_USERS } from './../constants/platform-users.constants';

const FETCH_LATENCY = 500;

@Injectable()
export class UsersRestService {

  getUsers() {
    return new Promise<PlatformUser[]>(resolve => {
      setTimeout(() => { resolve(PLATFORM_USERS); }, FETCH_LATENCY);
    });
  }

  getUser(id: number | string) {
    return this.getUsers()
      .then(users => users.find(user => user.id === +id));
  }

}
