'use strict';

bugTrackerApp.factory('issueService', function () {

    var issues =
        [
            { id: 131, date: new Date(), reporter: "ted", product: "Windows", version: "8", severity: "crash", priority: 1, summary: "Metro's buggy", description: "Crashes all the time. Please use only one interface for your products.", status: "new" },
            { id: 132, date: new Date(), reporter: "mflo", product: "Lotus Notes", version: "7.5.2", severity: "major", priority: 2, summary: "Problem to send mail with attachment", description: "Not possible to add any attachment to outgoing mail.", status: "resolved" },
            { id: 133, date: new Date(), reporter: "carabas", product: "Eclipse", version: "4.2.1", severity: "major", priority: 4, summary: "General slowness", description: "Very slow, when trying to compile big project.", status: "confirmed" },
            { id: 134, date: new Date(), reporter: "ted", product: "Eclipse", version: "4.x", severity: "major", priority: 5, summary: "No proper maven support", description: "Eclipse sucks when using multi-modules projects. M2 is not good enough.", status: "archived" }
        ];

    function addIssue(issue) {
        console.log("POST new issue: " + issue);
        issues.push(issue);
        //return future from resource;
    };

    function query() {
        return issues
    }

    // Public APIs
    return {
        addIssue: addIssue,
        query: query
    };
});
