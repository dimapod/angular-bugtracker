'use strict';

bugTrackerApp.controller('addCtrl', function ($scope, user, $location, issueResource) {
    $scope.readonly = false;
    $scope.submitting = false;

    $scope.issue = { date: new Date(), reporter: user.login, status: "new" }

    $scope.add = function () {
        if ($scope.submitting) return;
        $scope.submitting = true;

        issueResource.save($scope.issue);
        $location.url('/issue');
    }

});
