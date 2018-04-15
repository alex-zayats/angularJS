'use strict';

angular.module('userService', []);

angular.
  module('userService').
  service('userService', ['$http',  function userServiceController($http) {
    var MONGO_URL = 'http://127.0.0.1:8080';
    var self = this;
  	this.userLogged = false;

    this.login = function(login, password) {
      $http.get(MONGO_URL + '/users?login=' + login + '&password=' + password).then(function(response) {
        self.userLogged = response.data;
      });
    }
  }]
 );
