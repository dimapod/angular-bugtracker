'use strict';

// -> use ddescribe(...) to execute only one given test suite
//    use xdescribe(...) to disable given test suite
describe('user controller', function(){
    var $scope, user, locationUrlMock

    beforeEach(function() {
        // $location service mock
        var $location = {
            url: function(url) { }
        }

        // user service mock
        user = { login: "testLogin", name: "Test User Name" }

        locationUrlMock = spyOn($location, 'url')

        module(function($provide) {
            $provide.value('$location', $location);
            $provide.value('user', user);
        });

        inject(function($injector, $controller, $rootScope) {
            $controller('userCtrl', {$scope: $scope = $rootScope.$new()});
        });
    });

    // -> use iit(...) to execute only one given test
    //    use xit(...) to disable the given test
    it('should set login and name to $scope from user service', function() {
        expect($scope.login).toBe('testLogin');
        expect($scope.name).toBe('Test User Name');
    });

    it('should have doLogin() method defined', function() {
        expect($scope.doLogin).toBeDefined();
    });

    it('should set login and name to user service from $scope', function() {
        $scope.doLogin("newLogin", "New User Name")

        expect(user.login).toBe('newLogin');
        expect(user.name).toBe('New User Name');
    });

    it('should call $location.url() when doLogin()', function() {
        $scope.doLogin("newLogin", "New User Name")
        expect(locationUrlMock).toHaveBeenCalledWith("/");
    });

});

