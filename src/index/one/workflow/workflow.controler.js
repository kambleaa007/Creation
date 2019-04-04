(function () {
    "use strict";
    
    angular.module('public')
    .controller('workflowController', workflowController);  

    
    function workflowController ($scope){
        var $vm = this;
        $vm.wf1 = "hello workflow";

    }

    workflowController.$inject = ['$scope'];
    })();
    