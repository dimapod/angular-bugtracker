'use strict';

bugTrackerApp.controller('addIssueCtrl', function ($scope, user) {

    $scope.issue = { id: 123, date: new Date() }
    $scope.user = user;

    console.log()

    $scope.add = function () {
        console.log("Add new issue: " + $scope.issue);
    }

});
