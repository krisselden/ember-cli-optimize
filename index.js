/* jshint node: true */
'use strict';

var logger = require('heimdalljs-logger')('ember-cli-optimize');

module.exports = {
  name: 'ember-cli-optimize',
  included: function(app) {
    this.app = app;
    var options = app.options.optimize || {};
    if (options.enabled === undefined) {
      options.enabled = app.env === 'production';
    }
    logger.trace('included ' + app.project.name());
    this.options = options;
    if (app.options.sourcemaps && app.options.sourcemaps.enabled) {
      logger.warn('does not work with sourcemaps currently');
    }
  },
  postprocessTree: function(type, tree) {
    var app = this.app;
    var options = this.options;
    if(options.enabled && type === 'all') {
      logger.trace('postprocessTree ' + app.project.name());
      return require('./lib/optimize')(tree, options);
    }
    return tree;
  }
};
