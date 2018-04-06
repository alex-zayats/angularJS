'use strict';

angular.
  module('postsList').
  component('postsList', {
    templateUrl: 'posts-list/posts-list.template.html',
    controller: ['$http', '$scope', 'userService', function PostsListController($http, $scope, userService) {
      var MONGO_URL = 'http://127.0.0.1:8080';
      var self = this,
        postsOnPage = 10;

      $scope.currentPage = 0;
      $scope.userLogged = userService.userLogged;
      $scope.showAddPostForm = false;

      $scope.loadPosts = function() {
        getPosts($scope.currentPage);
      };

      function getPosts(page) {
        var offset = page * postsOnPage;
        $http.get(MONGO_URL + '/articles?offset=' + offset).then(function(response) {
          self.posts = response.data.posts;
          self.pagesCount = Math.ceil(response.data.totalCount / postsOnPage);
          self.pages = new Array(self.pagesCount);
        });
      }

      getPosts($scope.currentPage);

      $scope.deletePost = function($event, id) {
        $event.target.parentElement.style.display = 'none'; // better to use splice posts
        $http.delete(MONGO_URL + '/articles/' + id).then(function(response) {});
      }

      $scope.showAddPost = function() {
        $scope.showAddPostForm = true;
      }

      $scope.addPost = function($event) {
        if ($scope.addPostTitle && $scope.addPostAuthor && $scope.addPostContent && $scope.addPostSource) {
          event.preventDefault();
          $http.post(MONGO_URL + '/articles/', {
            title: $scope.addPostTitle,
            author: $scope.addPostAuthor,
            content: $scope.addPostContent,
            source: $scope.addPostSource
          }).then(function(response) {});
        }
      }

    }]
  });
