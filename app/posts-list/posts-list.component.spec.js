'use strict';

describe('postsList', function() {
  beforeEach(module('userService'));
  beforeEach(module('postsList'));

  describe('PostsListController', function() {
    var httpBackend, ctrl, scope;

    beforeEach(inject(function($componentController, _$httpBackend_, $rootScope) {
      httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      ctrl = $componentController('postsList', { $scope: scope });
    }));

    it('should execute show post function', function() {
      expect(scope.showAddPost).toBeDefined();
      spyOn(scope, 'showAddPost').and.callThrough();
      scope.showAddPost();
      expect(scope.showAddPost).toHaveBeenCalled();
      expect(scope.showAddPostForm).toBeTruthy();
    });

    it('should set a default value for controller properties', function() {
      expect(scope.currentPage).toBe(0);
      expect(scope.showAddPostForm).toBeFalsy();
    });

  });

});
