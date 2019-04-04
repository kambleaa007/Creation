(function () {
    "use strict";
    
    angular.module('public')      
    .component('workflowComponent', { 
      templateUrl: 'src/index/one/workflow/workflow-component/workflow-component.html',
      bindings: {                                                
        wf1: '<'                                  
      }
    });
    
    })();