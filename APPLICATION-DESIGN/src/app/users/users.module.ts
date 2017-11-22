import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './states/state-management';

// global modules
import { SharedModule } from '../shared/shared.module';

// feature
import { UsersRoutingModule } from './users-routing.module';
import { UsersRestService } from './services/users-rest.service';
import { UsersSandboxService } from './services/users-sandbox.service';
import { UsersSmartComponent } from './components/users-smart/users-smart.component';

@NgModule({
  imports: [SharedModule, UsersRoutingModule, StoreModule.forFeature('users', reducers)],
  declarations: [UsersSmartComponent],
  providers: [UsersRestService, UsersSandboxService]
})
export class UsersModule { }
