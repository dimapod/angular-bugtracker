'use strict';

bugTrackerApp.controller('editCtrl', function ($scope, $routeParams, $location, issueService) {
    $scope.readonly = true;
    $scope.submitting = false;

    // todo: fetch from resource
    $scope.issue = issueService.get($routeParams.issueId);
    $scope.newComment = "";

    // todo: fetch from resource
    $scope.comments = [
        { id: 1, reporter: "ted", date: new Date(), comment: "Yes, the bug is confirmed", issue: 131 },
        { id: 2, reporter: "bob", date: new Date(), comment: "A problem is in core implementation", issue: 132 }
    ];

    $scope.edit = function () {
        if ($scope.submitting) return;
        $scope.submitting = true;

        issueService.edit($scope.issue);
        $location.url('/issue');
    }
});
