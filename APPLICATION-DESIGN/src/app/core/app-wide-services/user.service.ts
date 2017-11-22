import { Injectable, Optional } from '@angular/core';
import { UserServiceConfig } from './user-service-config.model';

let nextId = 1;

@Injectable()
export class UserService {

  id = nextId++;
  private _userName = 'Sherlock Holmes';

  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this._userName = config.userName; }
  }

  get userName() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }

}
