(function() {

  'use strict';

  angular.module('app')
    .factory('notify', function($window) {
     var msgs = [];
     return function(msg) {
       msgs.push(msg);
       if (msgs.length == 3) {
         $window.alert(msgs.join("\n"));
         msgs = [];
       }
     };
   })

}());
