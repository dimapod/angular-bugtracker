'use strict';

describe('userService', function() {
    var user, localStorage, $rootScope;

    beforeEach(module(function($provide) {
        localStorage = {
            configuration: '{"login":"init-login","name":"Init User Name"}'
        };

        $provide.value('localStorage', localStorage);
    }));

    beforeEach(inject(function(_user_, _$rootScope_) {
        user = _user_;
        $rootScope = _$rootScope_;
    }));

    it('should update any change to localStorage', function() {
        $rootScope.$apply(function() {
            user.login = 'asmith';
            user.name = 'Adam Smith';
        });

        expect(localStorage.configuration).toBe('{"login":"asmith",' +
            '"name":"Adam Smith"}');
    });

    it('should load initial value from localStorage', function() {
        expect(user.login).toBe('init-login');
        expect(user.name).toBe('Init User Name');
    });
});