'use strict';

bugTrackerApp.controller('editCtrl', function ($scope, $routeParams, $location, issueService) {
    $scope.readonly = true;
    $scope.submitting = false;

    // todo: fetch from resource
    $scope.issue = issueService.get($routeParams.issueId);
    $scope.newComment = "";

    // todo: fetch from resource
    $scope.comments = issueService.getComments($routeParams.issueId);

    $scope.edit = function () {
        if ($scope.submitting) return;
        $scope.submitting = true;

        issueService.edit($scope.issue);
        $location.url('/issue');
    }
});
