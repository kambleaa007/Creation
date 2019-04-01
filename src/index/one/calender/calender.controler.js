(function () {
    "use strict";
    
    angular.module('public')
    .controller('calenderController', calenderController);  
              


    
    function calenderController ($scope){
        var vm = this;
        vm.name = "kamble";
        vm.data = null;
        
        $scope.age = 24;

        $scope.master = {firstName: "John", lastName: "Doe"};
        $scope.reset = function() {
          $scope.user = angular.copy($scope.master);
        };
        $scope.reset();


    }

    calenderController.$inject = ['$scope'];
    })();
    