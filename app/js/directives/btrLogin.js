'use strict';

bugTrackerApp.directive('btrLogin', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: function FmDeliverToController($scope, user) {
            $scope.user = user;
        },
        template:
            "<div class='btr-login'>" +
                "{{user.login}} | <a href='#/user'>Logout</a>" +
            "</div>"
    };
});
