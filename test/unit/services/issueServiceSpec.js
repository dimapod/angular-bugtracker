'use strict';

// -> use ddescribe(...) to execute only one given test suite
//    use xdescribe(...) to disable given test suite
xdescribe('issue service', function(){
    var issueService;

    beforeEach(function() {
        inject(function($injector) {
            issueService = $injector.get('issueService');
        });
    });

    // -> use iit(...) to execute only one given test
    //    use xit(...) to disable the given test
    it('should have issueService defined', function() {
        expect(issueService).toBeDefined();
    });

});

