'use strict';

describe('userService', function() {
  beforeEach(module('userService'));

  describe('userServiceController', function() {
    var httpBackend, ctrl, scope, userService;

    beforeEach(inject(function($componentController, _$httpBackend_, $rootScope, _userService_) {
      userService = _userService_;
      httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      // ctrl = $componentController('userService', { $scope: scope });
    }));

    it('should execute show post function', function() {
      httpBackend.whenGET('http://127.0.0.1:8080/users?login=admin&password=admin').respond(true);

      expect(userService.login).toBeDefined();
      spyOn(userService, 'login').and.callThrough();
      userService.login('admin', 'admin');
      expect(userService.login).toHaveBeenCalledWith('admin', 'admin');
      httpBackend.flush();
      expect(userService.userLogged).toBeTruthy();
    });

    it('should set a default value for controller properties', function() {
      expect(userService.userLogged).toBeFalsy();
    });

  });

});
