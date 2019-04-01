(function () {
"use strict";

angular.module('public')      // <menu-category ng-repeat="menuCategory in menuCtrl.menuCategories" category="menuCategory"> </menu-category>
.component('menuCategory', {  // name must in CAMEL CASE (`menuCategory`)--------> name must in DASHES (`menu-category`)
  templateUrl: 'src/public/menu-category/menu-category.html',
  bindings: {                                                 // One-way (“<”) data bindings
    category: '<'                                             // Use angular.copy()
  }
});

})();


/* 
  menu-category.html

<div class="col-md-3 col-sm-4 col-xs-6 col-xxs-12">
  <a ui-sref="public.menuitems({category: $ctrl.category.short_name})">   // when click on anchor do This
    <div class="category-tile">
      <img width="200" height="200" ng-src="images/menu/{{$ctrl.category.short_name}}/{{$ctrl.category.short_name}}.jpg" alt="{{$ctrl.category.name}}">
      <span>{{$ctrl.category.name}}</span>
    </div>
  </a>
</div>


  menu.html

  // `MenuController` having `$ctrl.menuCategories`
  // here `$ctrl` having value controllerAs `menuCtrl`

  <menu-category ng-repeat="menuCategory in menuCtrl.menuCategories" category="menuCategory"> </menu-category>

Take each `menuCategory` from `MenuController` having DATA LIST `menuCategories`
Assign it to `category="menuCategory"`
So, 
  `menuCategory` component is set with `category`


  `menuCategories` get resolved `MenuService.getCategories()` then gets assigned in `MenuController` by `$ctrl.menuCategories = menuCategories`

  `home.html` having <a ui-sref="public.menu">
  `public.menu` routes to `/menu` shows `menu.html` having `MenuController as menuCtrl` resolves `menuCategories`

*/