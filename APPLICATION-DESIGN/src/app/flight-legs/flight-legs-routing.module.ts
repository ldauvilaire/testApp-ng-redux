import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightLegDetailSmartComponent } from './components/flight-leg-detail-smart/flight-leg-detail-smart.component';
import { FlightLegListSmartComponent } from './components/flight-leg-list-smart/flight-leg-list-smart.component';
import { FlightLegSmartComponent } from './components/flight-leg-smart/flight-leg-smart.component';

const routes: Routes = [
  { path: '',
    component: FlightLegSmartComponent,
    children: [
      { path: '',    component: FlightLegListSmartComponent },
      { path: ':id', component: FlightLegDetailSmartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightLegsRoutingModule { }
