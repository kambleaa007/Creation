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
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'                     // <ui-view> `home.html` </ui-view> 
    })
    .state('index', {
      url:'/indexhome',
      templateUrl: 'src/index/indexhome.html'                     // <ui-view> `home.html` </ui-view> 
    })
    .state('page1',{
      url:'/page1',
      templateUrl: 'src/index/one/indexone.html',
      controller: 'calenderController' 
    })  

    .state('page1.one',{
      absract: true,
      templateUrl: 'src/index/one/one.html'
    })

    .state('page1.one.home',{
      url:'/one/home',
      templateUrl:'src/index/one/home/home.html' 
    })
    .state('page1.one.statistic',{
      url:'/one/statistic',
      templateUrl:'src/index/one/statistic/statistic.html' 
    })
    .state('page1.one.workflow',{
      url:'/one/workflow',
      templateUrl:'src/index/one/workflow/workflow.html' 
    })

    .state('page1.one.calender',{
      url:'/one/calender',
      templateUrl:'src/index/one/calender/calender.html',
      controller: 'calenderController',
      resolve: {                                                     // resolve holds sharable data for controllers
        data: ['AshishService', function (AshishService) {
          console.log( AshishService.getUser())
          return AshishService.getUser();
        }]
      }
      
    })
    
    .state('page1.one.users',{
      url:'/one/users',
      templateUrl:'src/index/one/users/users.html' 
    })
    .state('page1.one.settings',{
      url:'/one/settings',
      templateUrl:'src/index/one/settings/settings.html' 
    })





    .state('page2',{
      url:'/page2',
      templateUrl: 'src/index/two/indextwo.html'
    }) 
    .state('page3',{
      url:'/page3',
      templateUrl: 'src/index/three/indexthree.html'
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
