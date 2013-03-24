'use strict';

bugTrackerApp.controller('issueCtrl', function ($scope, user, $location, issueService) {
    if (!user.login) {
        $location.url('/user');
    }

    $scope.issues = issueService.query();
});
