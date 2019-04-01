(function() {
'use strict';

angular.module('public') // retrive existing `public` module
.config(routeConfig);

/**
 * Configures the routes and views
 */

 routeConfig.$inject = ['$stateProvider'];

function routeConfig ($stateProvider) { // StateProvider as a Provider Object (injectable during config time).
  // Routes
  $stateProvider
  .state('index', {
    url:'/indexhome',
    templateUrl: 'src/index/indexhome.html'                     // <ui-view> `home.html` </ui-view> 
  })  
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'                     // <ui-view> `home.html` </ui-view> 
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'                  // menu special map
    })
    .state('public.menu', {
      url: '/menu',                                              // need data from `menuCtrl.menuCategories` ----> so, `menuCategories` resolved haveing data in it ----> give it to menuCtrl
      templateUrl: 'src/public/menu/menu.html',                   // menu category <menu-category ng-repeat="menuCategory in menuCtrl.menuCategories" category="menuCategory"> </menu-category>
      controller: 'MenuController',                                // MenuController(menuCategories){ var $ctrl = this;  $ctrl.menuCategories = menuCategories; }
      controllerAs: 'menuCtrl',                                     // $ctrl gets defined here (`this of MenuController`) having `$ctrl.menuCategories`
      resolve: {                                                     // resolve holds sharable data for controllers
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',                                    // $ctrl gets defined here (`this of MenuItemsController`) having `$ctrl.menuItems`
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/signup/signup.html',
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    })
    .state('public.info', {
      url: '/info',
      templateUrl: 'src/public/info/info.html',
      controller: 'InfoController',
      controllerAs: 'infoCtrl'
    });
}
})();
