# APPLICATIONDESIGN

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Getting started
user login is test, no password required
to see state management open the console in browser


## UseFull Links
Conventions:
https://angular.io/guide/styleguide
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

References:
https://angular.io/
http://redux.js.org/
https://material.angular.io/
https://xgrommx.github.io/rx-book/index.html
https://www.learnrxjs.io

Courses:
https://egghead.io/courses/getting-started-with-redux
https://github.com/ngrx/platform
https://developer.telerik.com/topics/web-development/planning-an-angular-application/
https://developers.google.com/web/progressive-web-apps/
https://github.com/ngrx/platform/tree/master/docs/store

Tools:
https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2
https://www.npmjs.com/package/codelyzer

## ModuleBased With Redux application design specs

- [x] Module Based webApp architecture
- [x] ModuleBased router / routes implementation
- [ ] redux implementation with sandbox

- [ ] controll expositions and application-transverse services

- [ ] guards implementation
- [ ] angular2 material design

- [ ] primeNg (openSource)

    - [ ] module for all imports
    - [ ] table containing dummy components

- [ ] explore every rule of angular codeStyle
- [ ] expolre every rule of typeScript code guidelines

- [ ] reducer composition
- [ ] combineReducer
- [ ] logging strategy
- [ ] exception handling
- [ ] pipes for logicDisplay
- [ ] dummy vs smart / component explicit implementation
- [ ] consistent shared and core directories
- [ ] end2end ??? ...
- [ ] unit tests
- [ ] generate TypeDoc
- [ ] handle plural / singular in properties check https://angular.io/guide/i18n#handle-singular-and-plural
- [ ] handle gender in properties ...
- [ ] Translator service
- [ ] QuickAccessRouter service
- [ ] Service-workers https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
- [ ] use LightHouse to audit application https://developers.google.com/web/tools/lighthouse/
- [ ] extensive use of Codelyzer, ESLint and readme for it
- [ ] shortcuts readme
- [ ] externalized .editorConfig
- [ ] ... what else

## TODO

Top priority

- [ ] redux implementation with sandbox

Others

- [ ] check if there's a way to declare module root and appRoot in imports
- [ ] move core into shared
- [ ] use Codelizer
- [ ] use templates macro
- [ ] how to unit test directives
- [ ] write unit tests -> run it
- [ ] write e2e -> run it
- [ ] in services return Observables instead of promises + mock real rest service

## DONE LOG

- [x] install angular/animations needed for material and primeNg
- [x] install font awesome for primeNg install issue: need to install globally before install runs
- [x] favicon airfrance
- [x] Module Based webApp architecture
- [x] ModuleBased router / routes implementation
- [x] AngularMaterial design -> create module for all imports, expose it with Shared
- [x] why do I have to use app selector, I want something else -> tslint.json: declare selectors pattern
- [x] path autocompletion is not wotking -> autoimport serguey Korenuk
- [x] use scss

## use of cli

Component	ng g component my-new-component
Directive	ng g directive my-new-directive
Pipe	    ng g pipe my-new-pipe
Service	    ng g service my-new-service
Class	    ng g class my-new-class
Guard	    ng g guard my-new-guard
Interface	ng g interface my-new-interface
Enum	    ng g enum my-new-enum
Module	    ng g module my-module //CAUTION, it creates a folder

## use of visualCode

Ctrl + p                find File/Class/Component
Ctrl + Shift + F        find in Workspace
Ctrl+Shift+E            open Explorer
Ctrl+K+W                close all opened files
