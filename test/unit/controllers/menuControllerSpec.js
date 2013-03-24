'use strict';

// -> use ddescribe(...) to execute only one given test suite
//    use xdescribe(...) to disable given test suite
describe('menu controller', function(){
    var $scope;

    beforeEach(function() {
        // $location service mock
        var $location = {
            path: function() { return "/path" }
        }

        module(function($provide) {
            $provide.value('$location', $location);
        });

        inject(function($injector, $controller, $rootScope) {
            $controller('menuCtrl', {$scope: $scope = $rootScope.$new()});
        });
    });

    // -> use iit(...) to execute only one given test
    //    use xit(...) to disable the given test
    it('should have routeIs() method defined', function() {
        expect($scope.routeIs).toBeDefined();
    });

    it('should verify actual path', function() {
        expect($scope.routeIs('/path')).toBeTruthy();
        expect($scope.routeIs('/strange')).toBeFalsy();
    });

});

