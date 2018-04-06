'use strict';

angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.template.html',
    controller: ['$routeParams', '$scope', 'userService', function LoginController($routeParams, $scope, userService) {
      var self = this;

      $scope.login = '';
      $scope.password = '';
      $scope.userLogged = false;

      $scope.$watch(function () {
        return userService.userLogged;
      }, function (newVal, oldVal) {
        $scope.userLogged = newVal;
      });

      $scope.submitLogin = function() {
        userService.login($scope.login, $scope.password);
      };
    }]
  });