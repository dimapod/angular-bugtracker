'use strict';

bugTrackerApp.controller('menuCtrl', function ($scope, $location) {

    $scope.routeIs = function (routeName) {
        return $location.path() === routeName;
    };

});
