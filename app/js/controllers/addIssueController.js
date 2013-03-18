'use strict';

bugTrackerApp.controller('addIssueCtrl', function ($scope, user, issueService, $location) {

    $scope.issue = { id: 123, date: new Date(), reporter: user.login }
    $scope.submitting = false;

    $scope.add = function () {
        if ($scope.submitting) return;
        $scope.submitting = true;

        issueService.addIssue($scope.issue);
        $location.url('/issue');
    }

});
