# TV Kitchen: Base

This repository contains base definitions such as interfaces, universal constants, data objects, and errors.

It is critical that great care be taken before adding code to this repository, since everything here represents coupling across the entire TV Kitchen ecosystem.

## Included in this repository

* `constants/dataTypes` - The data types that appliances can consume or produce.
* `errors/*` - Errors that thrown by the interfaces defined in this repo.
* `interfaces/*` - Interfaces used by the TV Kitchen.
* `Payload.js` - A serializable payload used to communicate between appliances.

## NOT included in this repository

Utilities, interface implementations (including abstract implementations), and other seemingly useful common code elements should NOT be included in this repository.

We want to minimize universal coupling. Abstract implementations specific to an architectural component should be placed in an appropriate repository depending on the nature of the element in question.

## About the TV Kitchen

TV Kitchen is a project of [Bad Idea Factory](https://biffud.com).  Learn more at [the TV Kitchen project site](https://tv.kitchen).
