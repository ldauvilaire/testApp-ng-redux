import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './../model/user.model';
import { Authentication } from './../model/authentication.model';

@Injectable()
export class AuthenticationRestService {

  constructor() { }

  login({ username, password }: Authentication): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return Observable.throw('Invalid username or password');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
