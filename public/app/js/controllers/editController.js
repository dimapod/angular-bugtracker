'use strict';

bugTrackerApp.controller('editCtrl', function ($scope, user, $routeParams, $location, issueResource, commentResource) {
    $scope.readonly = true;
    $scope.submitting = false;

    // todo: fetch from resource
    $scope.issue = issueResource.get({ id: $routeParams.issueId });
    $scope.newComment = { reporter: user.login, date: new Date(), comment: "" }

    // todo: fetch from resource
    $scope.comments = commentResource.query({ issueId: $routeParams.issueId });

    $scope.edit = function () {
        if ($scope.submitting) return;
        $scope.submitting = true;

        issueResource.save($scope.issue);
        commentResource.save({issueId: $scope.issue._id}, $scope.newComment);
        $location.url('/issue');
    }
});
