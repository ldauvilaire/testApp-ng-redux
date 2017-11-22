import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { RootRouterPath as path } from './../../root-router-path.constants';
import 'rxjs/add/operator/map';
// state
import * as rootState from './../application-state-management/application-state-management';

@Injectable()
export class AuthGuard implements CanActivate {
  userIsLogged = this.store.select(rootState.selectUserIsLogged);
  constructor(private store: Store<rootState.State>, private router: Router) {
    console.log('AuthGuard built');
  }

  canActivate(): Observable<boolean> {
     return this.userIsLogged.map(
       userIsLogged => {
         if (userIsLogged) {
           console.log('AuthGuard / userIsLogged');
           return true;
         }
         console.log('AuthGuard / no userLogged => redirect');
         this.router.navigate([path.ROOT + path.LOGIN]);
         return false;
       }
     );
  }
}
