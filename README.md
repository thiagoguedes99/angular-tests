# Baixar ou atualizar a versão do node e do NPM
> https://nodejs.org/en

# Atualizar angular/cli da máquina
> npm i -g @angular/cli

# Desinstalar angular/cli da máquina
> npm uninstall -g @angular/cli

# Listar angular/cli da máquina
> npm list -g @angular/cli

# Atualizar angular do projeto
> ng update @angular/cli @angular/core

# Remover tudo do jasmine e karma
> npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

# Instalar o jest para angular
> npm install --save-dev jest jest-preset-angular @types/jest

# Criar um arquivo `setup-jest.ts` na raiz da aplicação
> setup-jest.ts

# Adiciona este import no arquivo criado
> import 'jest-preset-angular/setup-jest';

# Criar o arquivo jest.config.js com as configurações para o jest rodar no angular
> ver o arquivo **jest.config.js**

# Adicionar types: ["jest"] no tsconfig.json
> "types": ["jest"]

# Trocar o type: ["jasmmine"] por types: ["jest"] no tsconfig.spec.json
> "types": ["jasmine"]  por  "types": ["jest"]

# Adiconar no package.json os comandos para rodar o jest
> "types": ["jasmine"]  por  "types": ["jest"]




<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

# AngularTests

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
