# Ember-cli-optimize

Faster JS File parse/eval. Similar to [optimize-js](https://github.com/nolanlawson/optimize-js) but configurable. Allowing the developer to choose which module should be lazy, and which should be eager.

Why is this configuration important? There is overhead to eager parsing all modules, but if a module is executed immediately that overhead is non-optional. Alternatively a module can be "pre-parsed" which is much more efficient, unfortunately if that module is "pre-parsed" and then immediately invoked it will then also be fully parsed, essentially duplicating work.

Examples of Lazy and Eager modules:

* lazy modules are ones not typically required by initial boot, but still part of the man bundle. An example would be a component not required during initial render.
* eager modules (to be preparsed) are modules that are always required on app boot. Such as `app/app` or `app/templtes/application`


## Installation

* `ember install ember-cli-optimize`

# Contributing to this addon

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
