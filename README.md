[![Build Status](https://travis-ci.com/tvkitchen/base.svg?branch=master)](https://travis-ci.com/tvkitchen/base)

# TV Kitchen: Base

This monorepo contains four base packages that are imported by various portions of the TV Kitchen:

* `@tvkitchen/base-errors` contains common error types.
* `@tvkitchen/base-interfaces` contains interfaces that define the shape of modular architectural components.
* `@tvkitchen/base-classes` contains the Payload class, which is used to communicate between appliances.
* `@tvkitchen/base-constants` contains constant strings that define interfaces across the project (e.g. types of data being passed around).

## Driving Philosophy

Utilities, interface implementations (including abstract implementations), and other seemingly useful common code elements should NOT be included in this repository or these packages.

We want to minimize universal coupling. Abstract implementations specific to an architectural component should be placed in an appropriate repository depending on the nature of the element in question.

## Setting Up

```sh
yarn install
```

This will install project dependencies, link local sibling dependencies (we're using [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)), and build/transpile each package.

## About the TV Kitchen

TV Kitchen is a project of [Bad Idea Factory](https://biffud.com).  Learn more at [the TV Kitchen project site](https://tv.kitchen).
