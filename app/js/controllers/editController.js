'use strict';

bugTrackerApp.controller('editCtrl', function ($scope, $routeParams, $location, issueService) {
    $scope.readonly = true;
    $scope.submitting = false;

    $scope.issue = issueService.get($routeParams.issueId);

    $scope.edit = function () {
        if ($scope.submitting) return;
        $scope.submitting = true;

        issueService.edit($scope.issue);
        $location.url('/issue');
    }
});
