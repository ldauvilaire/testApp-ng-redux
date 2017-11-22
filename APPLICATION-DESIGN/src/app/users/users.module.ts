import { NgModule } from '@angular/core';

// global modules
import { SharedModule } from '../shared/shared.module';

// feature
import { UsersRoutingModule } from './users-routing.module';
import { UsersRestService } from './services/users-rest.service';
import { UsersSmartComponent } from './components/users-smart/users-smart.component';

@NgModule({
  imports: [ SharedModule, UsersRoutingModule ],
  declarations: [ UsersSmartComponent ],
  providers: [ UsersRestService ]
})
export class UsersModule { }
