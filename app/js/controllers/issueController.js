'use strict';

bugTrackerApp.controller('issueCtrl', function ($scope, user, $location, issueResource) {
    if (!user.login) {
        $location.url('/user');
    }

    $scope.issues = issueResource.query();
});
