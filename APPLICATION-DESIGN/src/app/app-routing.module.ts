import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/app-wide-guards/auth-guard.service';
import { LoginPageSmartComponent } from './core/components/login-page-smart/login-page-smart.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { RootRouterPath } from './root-router-path.constants';


const routes: Routes = [
  { path: '', redirectTo: RootRouterPath.FIGHTS, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: RootRouterPath.FIGHTS, loadChildren: 'app/flight-legs/flight-legs.module#FlightLegsModule', canActivate: [AuthGuard] },
  { path: RootRouterPath.USERS, loadChildren: 'app/users/users.module#UsersModule', canActivate: [AuthGuard] },
  { path: RootRouterPath.TURNAROUNDS, loadChildren: 'app/turnarounds/turnarounds.module#TurnaroundsModule', canActivate: [AuthGuard] },
  { path: RootRouterPath.LOGIN, component: LoginPageSmartComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule built...');
  }
}
