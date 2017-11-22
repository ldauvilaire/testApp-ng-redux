# APPLICATIONDESIGN

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Getting started
user login is test, no password required
to see state management open the console in browser
this demo is a merge attempt of 2 demo apps:
- https://github.com/ngrx/platform
- angular.io official documentation on NgModules's final version
https://angular.io/generated/zips/ngmodule/ngmodule.zip


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

## DONE LOG

- [x] install angular/animations needed for material and primeNg
- [x] install font awesome for primeNg install issue: need to install globally before install runs
- [x] Feature Based Global Architecture / copy from official module example
- [x] Feature Based Rooting
- [x] Feature Based State management with ngrx / copy from https://github.com/ngrx/platform
- [x] AngularMaterial design -> create module for all imports, expose it with Shared

## TODO

- [ ] redux implementation with sandbox
- [ ] move core into shared
- [ ] use Codelizer
- [ ] use templates macro
- [ ] how to unit test directives
- [ ] write unit tests for each kind of component -> run it
- [ ] write basic e2e -> run it
- [ ] sizzle e2e into steps
- [ ] in services return Observables instead of promises + mock real rest service
- [ ] controll/framework subscriptions (and subscriptions to store) ()
- [ ] feature-scoped guards implementation
- [ ] compare material design and ngPrime
- [ ] reducer composition inside a feature
- [ ] combineReducer inside a feature
- [ ] logging framework
- [ ] exception handling framework
- [ ] use pipes for all DisplayLogic
- [ ] generate TypeDoc
- [ ] Translator service
- [ ] handle plural / singular in properties check https://angular.io/guide/i18n#handle-singular-and-plural
- [ ] handle gender in properties ...
- [ ] Url interception
- [ ] Service-workers https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
- [ ] use LightHouse to audit application https://developers.google.com/web/tools/lighthouse/
- [ ] extensive use of Codelyzer, ESLint
- [ ] externalize .editorConfig
## ISSUES LOG

- [x] why do I have to use app selector, I want something else -> tslint.json: declare selectors pattern
- [x] path autocompletion is not wotking -> autoimport serguey Korenuk

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
