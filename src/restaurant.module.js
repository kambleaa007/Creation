(function() {
"use strict";

/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('restaurant', ['public'])                                  // in public, angular.module('public', ['ui.router', 'common']);
.config(config);

// Injecting custom service into ui-router config

// Only providers and constants can be injected into configuration blocks
// $inject service
config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');                                     // Default URL if no matches
}

})();
