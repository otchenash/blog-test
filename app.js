(function(global, ng) {
  'use strict';

  ng.module('blogApp.controls', []);
  ng.module('blogApp.data', []);
  ng.module('blogApp.services', []);
  ng.module('blogApp', [
    'blogApp.controls',
    'blogApp.data',
    'blogApp.services',
    'ngRoute'
]).config(['$routeProvider', '$locationProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'app/template/_home.html',
                controller : 'ArticlesListCtrl'
            })
            .when('/article/:articleId', {
                templateUrl : 'app/template/_article.html',
                controller : 'ArticleListCtrl'
            })
            .otherwise({
                redirectTo : '/'
            });
  }]);

}(this, this.angular));