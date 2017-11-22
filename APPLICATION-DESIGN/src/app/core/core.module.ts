import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { LayoutComponent } from './components/layout/layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageSmartComponent } from './components/login-page-smart/login-page-smart.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PageSmartComponent } from './components/page-smart/page-smart.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from './../shared/external/material-design.module';
// services
import { ApplicationSandboxService } from './app-wide-services/application-sandbox.service';
import { AuthenticationRestService } from './app-wide-services/authentication-rest.service';
/* import { UrlInterceptor } from './services/url-interceptor.service';*/
import { UserService } from './app-wide-services/user.service';
import { UserServiceConfig } from './app-wide-services/user-service-config.model';

export const COMPONENTS = [
  LayoutComponent,
  LoginFormComponent,
  LoginPageSmartComponent,
  NavItemComponent,
  PageSmartComponent,
  SidenavComponent,
  ToolbarComponent,
  NotFoundComponent
];

@NgModule({
  imports:      [ CommonModule, RouterModule, MaterialDesignModule, ReactiveFormsModule ],
  declarations: COMPONENTS,
  exports:      COMPONENTS,
  providers:    [ UserService, ApplicationSandboxService, AuthenticationRestService ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log('CoreModule built...');
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: UserServiceConfig, useValue: {userName: 'Bibi'} },
        ApplicationSandboxService,
        AuthenticationRestService
      ]
    };
  }
}

/*
providers: [UrlInterceptor]
*/
