'use strict';

// -> use ddescribe(...) to execute only one given test suite
//    use xdescribe(...) to disable given test suite
describe('addIssue controller', function(){
    var $scope, user, issueServiceMock, $location

    beforeEach(function() {
        // user service mock
        user = { login: "testLogin", name: "Test User Name" }

        // issueService mock
        var issueService = {
            save: function(issue) { }
        }
        issueServiceMock = spyOn(issueService, 'save')

        module(function($provide) {
            //$provide.value('$location', $location);
            $provide.value('issueService', issueService);
            $provide.value('user', user);
        });

        inject(function($injector, $controller, $rootScope, _$location_) {
            $controller('addIssueCtrl', {$scope: $scope = $rootScope.$new()});
            $location = _$location_
        });
    });

    // -> use iit(...) to execute only one given test
    //    use xit(...) to disable the given test
    it('should set default values to $scope', function() {
        expect($scope.readonly).toBe(false);
        expect($scope.submitting).toBe(false);

        expect($scope.issue.reporter).toBe("testLogin");
        expect($scope.issue.status).toBe("new");
    });

    it('should have add() method defined', function() {
        expect($scope.add).toBeDefined();
    });

    it('should not save new issue when submitting is already in progress', function() {
        $scope.submitting = true;
        $scope.add();
        expect(issueServiceMock).not.toHaveBeenCalled();
    });

    it('should save a new issue', function() {
        $scope.add();

        expect($scope.submitting).toBe(true);
        expect(issueServiceMock).toHaveBeenCalledWith($scope.issue);
    });

    it('should change location when issue is saved', function() {
        $scope.add();
        expect($location.url()).toEqual('/issue');
    });

});

