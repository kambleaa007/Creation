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
        $scope.masters = [
          "a","b"
        ];
        
        $scope.saved = false;

        $scope.reset = function() {
          $scope.user = angular.copy($scope.master);
        };

        $scope.save = function(user){
          $scope.saved = true;
          $scope.master = angular.copy(user);
          console.log($scope.master);
          console.log(masters);
          $scope.masters.push("c");
        }

        $scope.reset();

    }

    calenderController.$inject = ['$scope'];
    })();
    