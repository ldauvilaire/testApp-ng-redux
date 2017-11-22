import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

/* App Root */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

/* App Component */
import { AppComponent } from './shared/app/app.component';
import { PageSmartComponent } from './core/components/page-smart/page-smart.component';
import { LoginPageSmartComponent } from './core/components/login-page-smart/login-page-smart.component';

/* services */
import { AuthGuard } from './core/app-wide-guards/auth-guard.service';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* global store */
import { reducers, metaReducers } from './core/application-state-management/application-state-management';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),
    CoreModule.forRoot(),
    AppRoutingModule
    // every services exposed in the module.forRoot will be app-wide singletons, others will be lazy-loaded and will have multiple instances
  ],
  declarations: [
    AppComponent
  ],
  providers: [AuthGuard],
  bootstrap: [PageSmartComponent]
})
export class AppModule { }

/*
// ApplicationConstants
export const API_ROOT_URL = new InjectionToken<string>('apiRootUrl');

handlingUrl with Interceptor
import { InjectionToken, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from './../environments/environment';
import { PageSmartComponent } from './core/view/components/page-smart/page-smart.component';
import { AppComponent } from './app.component';
import { LoginPageSmartComponent } from './core/components/login-page-smart/login-page-smart.component';

providers: [
    {provide: API_ROOT_URL, useValue: environment.apiRootUrl},
    {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true, deps: [API_ROOT_URL]}
  ],
*/
