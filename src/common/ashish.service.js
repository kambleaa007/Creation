(function () {
    "use strict";
    
    angular.module('common')
    .service('AshishService', AshishService);
    
    
    AshishService.$inject = ['$http'];
    function AshishService($http) {
      var service = this;
      service.user = {};
    
      service.saveUser = function(user) {
        service.user = angular.copy(user);
        console.log(service.user);
      }
    
      service.getUser = function() {          
        return 100;
      }
      
      service.getCategories = function () {
        return $http.get('./temp/data.json').then(function (response) {
            service.user = response.data;
          return response.data;
        });
      };

    }
    
    
    
    })();
    