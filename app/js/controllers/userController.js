'use strict';

bugTrackerApp.controller('userCtrl', function CustomerController($scope, user, $location) {

    $scope.login = user.login;
    $scope.name = user.name;


    $scope.doLogin = function (login, name) {
        user.login = login;
        user.name = name;

        $location.url('/');
    };
});
