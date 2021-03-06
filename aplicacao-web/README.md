## Gerando um novo projeto web

```
ng new aplicacao-web --routing=true --strict=true --style=scss
```
<br>
<br>

## Instalando dependĂȘncias

```
ng add @angular/material
npm install bootstrap
```

<br>
<br>

## Componentes

```
ng g m pages --routing

ng g m pages/people   --routing
ng g c pages/people
ng g class pages/people/shared/models/data-person --type=model --skip-tests
ng g s pages/people/shared/services/person

ng g m pages/products   --routing
ng g c pages/products
ng g class pages/products/shared/models/data-product --type=model --skip-tests
ng g s pages/products/shared/services/product

ng g m core/auth --module app --routing
ng g c core/auth/login
ng g c core/auth/register
ng g class core/auth/shared/models/data-user-session --type=model --skip-tests
ng g s core/auth/shared/services/auth

```

<br>
<br>

# AplicacaoWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
