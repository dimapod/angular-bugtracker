'use strict';

bugTrackerApp.factory('issueService', function (issueResource, commentResource) {


    function query() {
        return issueResource.query();;
    }

    function get(issueId) {
        return issueResource.get({id: issueId});
    }

    function save(issue) {
        console.log("POST new issue: " + issue);
        issueResource.save(issue);
    };

    function edit(issue, id) {
        commentResource.save(issue, {id: id});
    }

    function getComments(issueId) {
        commentResource.get({id: issueId});
    }

    // Public APIs
    return {
        query: query,
        get: get,
        save: save,
        edit: edit,
        getComments: getComments
    };
});
