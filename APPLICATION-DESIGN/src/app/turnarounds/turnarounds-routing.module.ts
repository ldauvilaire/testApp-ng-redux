import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { TurnaroundListSmartComponent } from './components/turnaround-list-smart/turnaround-list-smart.component';
import { TurnaroundDetailComponent } from './components/turnaround-detail/turnaround-detail.component';

export class TunrnaroundRouterPath {
  public static ROOT_PATH = '/';
  public static LIST_PATH = 'list';
  public static DETAIL_PATH = ':id';
}

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: TunrnaroundRouterPath.LIST_PATH, component: TurnaroundListSmartComponent },
  { path: TunrnaroundRouterPath.DETAIL_PATH, component: TurnaroundDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TurnaroundsRoutingModule { }
