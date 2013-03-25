'use strict';

bugTrackerApp.controller('addIssueCtrl', function ($scope, user, issueService, $location) {
    $scope.readonly = false;
    $scope.submitting = false;

    $scope.issue = { id: 123, date: new Date(), reporter: user.login, status: "new" }

    $scope.add = function () {
        if ($scope.submitting) return;
        $scope.submitting = true;

        issueService.save($scope.issue);
        $location.url('/issue');
    }

});
