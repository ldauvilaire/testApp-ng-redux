import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersSmartComponent } from './components/users-smart/users-smart.component';


@NgModule({
  imports: [ RouterModule.forChild([
    { path: 'users', component: UsersSmartComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule { }
