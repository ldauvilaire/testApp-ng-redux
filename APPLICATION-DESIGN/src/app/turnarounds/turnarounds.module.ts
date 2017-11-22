import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnaroundListSmartComponent } from './components/turnaround-list-smart/turnaround-list-smart.component';
import { TurnaroundDetailComponent } from './components/turnaround-detail/turnaround-detail.component';
import { TurnaroundsRestService } from './services/turnarounds-rest.service';
import { TurnaroundsRoutingModule } from './turnarounds-routing.module';

@NgModule({
  imports: [ CommonModule, TurnaroundsRoutingModule ],
  declarations: [TurnaroundListSmartComponent, TurnaroundDetailComponent],
  providers: [ TurnaroundsRestService ]
})
export class TurnaroundsModule { }
