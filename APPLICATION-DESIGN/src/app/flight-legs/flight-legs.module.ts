import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './states/state-management';
// global modules
import { SharedModule } from '../shared/shared.module';
// feature
import { FlightLegDetailSmartComponent } from './components/flight-leg-detail-smart/flight-leg-detail-smart.component';
import { FlightLegListSmartComponent } from './components/flight-leg-list-smart/flight-leg-list-smart.component';
import { FlightLegSmartComponent } from './components/flight-leg-smart/flight-leg-smart.component';
import { FlightLegsRoutingModule } from './flight-legs-routing.module';
import { FlightLegsRestService } from './services/flight-legs-rest.service';
import { FlightLegsSandboxService } from './services/flight-legs-sandbox.service';

@NgModule({
  imports: [
    SharedModule,
    FlightLegsRoutingModule,
    StoreModule.forFeature('flight-legs', reducers),
  ],
  declarations: [FlightLegListSmartComponent, FlightLegSmartComponent, FlightLegDetailSmartComponent],
  providers: [FlightLegsRestService, FlightLegsSandboxService],
})
export class FlightLegsModule { }
