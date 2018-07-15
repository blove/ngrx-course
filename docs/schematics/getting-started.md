# Getting Started

The NgRx library provides a set schematics that extend the functionality of the Angular CLI to enable you to:

* Generate the store scaffolding.
* Generate actions, effects, and reducers.
* 

## Install

Install the necessary NgRx libraries:

```bash
npm install @ngrx/schematics
yarn add @ngrx/schematics
```

## Configure Schematics

Update the Angular CLI project to set the NgRx schematics as the default:

```bash
ng config cli.defaultCollection @ngrx/schematics
```