'use strict';

bugTrackerApp.factory('issueService', function () {

    function addIssue(issue) {
        console.log("POST new issue: " + issue);

        //return future from resource;
    };

    // Public APIs
    return {
        addIssue: addIssue
    };
});
