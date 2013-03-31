'use strict';

bugTrackerApp.controller('menuCtrl', function ($scope, $location) {

    $scope.routeIs = function (routeName) {
        // EXO-1.2 (verify route)
        return $location.path() === routeName;
    };

});
