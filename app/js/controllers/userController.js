'use strict';

bugTrackerApp.controller('userCtrl', function CustomerController($scope, user, $location) {

    // EXO-2.2.1
    $scope.login = user.login;
    $scope.name = user.name;

    $scope.doLogin = function (login, name) {
        // EXO-2.2.2
        user.login = login;
        user.name = name;

        // EXO-2.2.3
        $location.url('/');
    };
});
