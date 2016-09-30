/* jshint node: true */
'use strict';
var path = require('path');
var optimizeJs = require('broccoli-optimize-js');
var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var uniq = require('lodash.uniq');
var assign = require('lodash.assign');

function wrapConcatInput(app, tree, concatOpts) {
  if (path.extname(concatOpts.outputFile) !== '.js') {
    return tree;
  }

  var sourceMap = app.options.sourcemaps.enabled;
  var eager = app.env === 'production';
  var minify;
  if (app.options.minifyJS.enabled) {
    minify = assign({
      mangle: true,
      compress: true
    }, app.options.minifyJS.options);
  }

  if (!minify && !eager) {
    return tree;
  }

  var include = uniq([].concat(concatOpts.headerFiles || [], concatOpts.inputFiles || [], concatOpts.footerFiles || []));

  var js = funnel(tree, {
    include: include
  });

  return mergeTrees([tree, optimizeJs(js, {
    eager: eager,
    mangle: minify.mangle,
    compress: minify.compress,
    output: minify.output,
    sourceMap: sourceMap
  })], {
    overwrite: true
  });
}

module.exports = {
  name: 'ember-cli-optimize',
  included: function (app) {
    this._super.included.apply(this, arguments);
    if (app.project.findAddonByName('ember-cli-uglify')) {
      this.ui.writeWarnLine('not compatible with ember-cli-uglify');
      return;
    }
    var origConcatFiles = app.concatFiles;
    app.concatFiles = function (tree, options) {
      var args = Array(arguments.length);
      for (var i = 0; i < arguments.length; i++) args[i] = arguments[i];
      var tree = args[0];
      var options = args[1];
      args[0] = wrapConcatInput(app, tree, options);
      return origConcatFiles.apply(this, args);
    };
  },
  afterInstall: function () {
    return this.removePackageFromProject('ember-cli-uglify');
  }
};
