/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-optimize',
  included: function(app) {
    this.options = app.options.optimize || {};
  },
  postprocessTree: function(type, tree) {
    var options = this.options;
    if(options.enabled === true && type === 'all') {
      return require('./lib/optimize')(tree, options);
    }
    return tree;
  }
};
