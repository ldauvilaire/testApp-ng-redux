import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';
// services
import { ApplicationSandboxService } from './../../app-wide-services/application-sandbox.service';

// states
import * as rootState from './../../application-state-management/application-state-management';

@Component({
  selector: 'app-page-smart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page-smart.component.html',
  styleUrls: ['./page-smart.component.scss']
})
export class PageSmartComponent implements OnInit {

  userIsLogged = false;
  showSidenav$ = this.store.select(rootState.selectShowSidenav);
  currentShowSideNav: boolean;

  constructor(private store: Store<rootState.State>, private applicationSandbox: ApplicationSandboxService) { }

  ngOnInit() {
    // store change detection for showSidenav
    this.showSidenav$.subscribe((showSidenav) => {
      this.currentShowSideNav = showSidenav;
    });
    /*
    this.store.select(rootState.selectShowSidenav).subscribe((showSidenav) => {
      console.log('sideNAv changed', showSidenav);
      this.showSidenav = showSidenav;
    });
    */
    // store change detection for userIsLogged
    this.store.select(rootState.selectUserIsLogged).subscribe((userIsLogged) => {
      this.userIsLogged = userIsLogged;
    });
  }

  closeSidenav(i) {
    console.log('click ' + i);
    if (this.currentShowSideNav) {
      this.applicationSandbox.handleCloseSideNav();
    } else {
      this.openSidenav();
    }
  }

  openSidenav() {
    if (!this.currentShowSideNav) {
      this.applicationSandbox.handleOpenSideNav();
    }
  }

  logout() {
    this.closeSidenav(0);
    this.applicationSandbox.handleLogout();
  }

}
