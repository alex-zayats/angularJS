'use strict';

describe('login', function() {
  beforeEach(module('userService'));
  beforeEach(module('login'));

  describe('LoginController', function() {
    var httpBackend, ctrl, scope;

    beforeEach(inject(function($componentController, _$httpBackend_, $rootScope) {
      httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      ctrl = $componentController('login', { $scope: scope });
    }));

    it('should execute show post function', function() {
      scope.login = 'test';
      scope.password = 'testPassword';
      expect(scope.submitLogin).toBeDefined();
      spyOn(scope, 'submitLogin').and.callThrough();
      scope.submitLogin();
      expect(scope.submitLogin).toHaveBeenCalled();
    });

    it('should set a default value for controller properties', function() {
      expect(scope.login).toBe('');
      expect(scope.password).toBe('');
    });

  });

});
