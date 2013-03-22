'use strict';

bugTrackerApp.factory('issueService', function (issueResource) {

    // Mock
    var nextId = 123;

    // Mock
    var issues = issueResource.query();

    function query() {
        //return issues
        return issueResource.query()
    }

    // Mock
    function get(issueId) {
        return issues[0];
    }

    // Mock
    function save(issue) {
        console.log("POST new issue: " + issue);
        issues.push(issue);
        //return future from resource;
    };

    // Mock
    function edit(issue) {
        issues[0] = issue
    }

    // Mock
    function getNextId() {
        return nextId ++;
    }

    // Public APIs
    return {
        query: query,
        get: get,
        save: save,
        edit: edit,
        getNextId: getNextId
    };
});
