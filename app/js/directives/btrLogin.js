'use strict';

bugTrackerApp.directive('btrLogin', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/btrLogin.html',
    scope: {},
    controller: function FmDeliverToController($scope, user) {
      $scope.user = user;
    }
  };
});
