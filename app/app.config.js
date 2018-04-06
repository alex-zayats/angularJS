'use strict';

angular.
  module('postsApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/posts', {
          template: '<posts-list></posts-list>'
        }).
        when('/login', {
          template: '<login></login>'
        }).
        otherwise('/posts');
    }
  ]);
