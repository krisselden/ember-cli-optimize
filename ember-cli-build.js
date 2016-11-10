/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    minifyJS: {
      options: {
        mangle: true,
        compress: {
          // disable these have performance issues
          negate_iife: false,
          sequences: false
        },
        output: {
          // no difference in size and performance
          // and much easier to debug
          semicolons: false
        }
      }
    },
    optimize: {
      enabled: true,
      eager: {
        'dummy/app':true,
        'ember/load-initializers':true,
        'ember-ajax/ajax-request':true,
        'ember-ajax/errors':true,
        'ember-ajax/index':true,
        'ember-ajax/mixins/ajax-request':true,
        'ember-ajax/mixins/ajax-support':true,
        'ember-ajax/raw':true,
        'ember-ajax/request':true,
        'ember-ajax/services/ajax':true,
        'ember-ajax/utils/ajax':true,
        'ember-ajax/utils/is-fastboot':true,
        'ember-ajax/utils/parse-response-headers':true,
        'ember-ajax/utils/url-helpers':true,
        'ember-cli-app-version/components/app-version':true,
        'ember-cli-app-version/initializer-factory':true,
        'ember-cli-app-version/templates/app-version':true,
        'ember-data/-private/adapters':true,
        'ember-data/-private/adapters/build-url-mixin':true,
        'ember-data/-private/core':true,
        'ember-data/-private/debug':true,
        'ember-data/-private/ext/date':true,
        'ember-data/-private/features':true,
        'ember-data/-private/global':true,
        'ember-data/-private/initializers/data-adapter':true,
        'ember-data/-private/initializers/store-injections':true,
        'ember-data/-private/initializers/store':true,
        'ember-data/-private/initializers/transforms':true,
        'ember-data/-private/instance-initializers/initialize-store-service':true,
        'ember-data/-private/serializers':true,
        'ember-data/-private/system/clone-null':true,
        'ember-data/-private/system/coerce-id':true,
        'ember-data/-private/system/container-proxy':true,
        'ember-data/-private/system/debug':true,
        'ember-data/-private/system/debug/debug-adapter':true,
        'ember-data/-private/system/debug/debug-info':true,
        'ember-data/-private/system/empty-object':true,
        'ember-data/-private/system/is-array-like':true,
        'ember-data/-private/system/many-array':true,
        'ember-data/-private/system/model':true,
        'ember-data/-private/system/model/attr':true,
        'ember-data/-private/system/model/errors':true,
        'ember-data/-private/system/model/internal-model':true,
        'ember-data/-private/system/model/model':true,
        'ember-data/-private/system/model/states':true,
        'ember-data/-private/system/normalize-link':true,
        'ember-data/-private/system/normalize-model-name':true,
        'ember-data/-private/system/ordered-set':true,
        'ember-data/-private/system/promise-proxies':true,
        'ember-data/-private/system/record-array-manager':true,
        'ember-data/-private/system/record-arrays':true,
        'ember-data/-private/system/record-arrays/adapter-populated-record-array':true,
        'ember-data/-private/system/record-arrays/filtered-record-array':true,
        'ember-data/-private/system/record-arrays/record-array':true,
        'ember-data/-private/system/references':true,
        'ember-data/-private/system/references/belongs-to':true,
        'ember-data/-private/system/references/has-many':true,
        'ember-data/-private/system/references/record':true,
        'ember-data/-private/system/references/reference':true,
        'ember-data/-private/system/relationship-meta':true,
        'ember-data/-private/system/relationships/belongs-to':true,
        'ember-data/-private/system/relationships/ext':true,
        'ember-data/-private/system/relationships/has-many':true,
        'ember-data/-private/system/relationships/state/belongs-to':true,
        'ember-data/-private/system/relationships/state/create':true,
        'ember-data/-private/system/relationships/state/has-many':true,
        'ember-data/-private/system/relationships/state/relationship':true,
        'ember-data/-private/system/snapshot-record-array':true,
        'ember-data/-private/system/snapshot':true,
        'ember-data/-private/system/store':true,
        'ember-data/-private/system/store/common':true,
        'ember-data/-private/system/store/container-instance-cache':true,
        'ember-data/-private/system/store/finders':true,
        'ember-data/-private/system/store/serializer-response':true,
        'ember-data/-private/system/store/serializers':true,
        'ember-data/-private/transforms':true,
        'ember-data/-private/transforms/boolean':true,
        'ember-data/-private/transforms/date':true,
        'ember-data/-private/transforms/number':true,
        'ember-data/-private/transforms/string':true,
        'ember-data/-private/utils':true,
        'ember-data/-private/utils/parse-response-headers':true,
        'ember-data/adapter':true,
        'ember-data/adapters/errors':true,
        'ember-data/adapters/json-api':true,
        'ember-data/adapters/rest':true,
        'ember-data/attr':true,
        'ember-data/index':true,
        'ember-data/model':true,
        'ember-data/relationships':true,
        'ember-data/serializer':true,
        'ember-data/serializers/embedded-records-mixin':true,
        'ember-data/serializers/json-api':true,
        'ember-data/serializers/json':true,
        'ember-data/serializers/rest':true,
        'ember-data/setup-container':true,
        'ember-data/store':true,
        'ember-data/transform':true,
        'ember-data/version':true,
        'ember-inflector/index':true,
        'ember-inflector/lib/ext/string':true,
        'ember-inflector/lib/helpers/pluralize':true,
        'ember-inflector/lib/helpers/singularize':true,
        'ember-inflector/lib/system':true,
        'ember-inflector/lib/system/inflections':true,
        'ember-inflector/lib/system/inflector':true,
        'ember-inflector/lib/system/string':true,
        'ember-inflector/lib/utils/make-helper':true,
        'ember-load-initializers/index':true,
        'ember-resolver/container-debug-adapter':true,
        'ember-resolver/index':true,
        'ember-resolver/resolver':true,
        'ember-resolver/utils/class-factory':true,
        'ember-resolver/utils/create':true,
        'ember-resolver/utils/make-dictionary':true,
        'ember-resolver/utils/module-registry':true
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
