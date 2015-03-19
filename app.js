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
]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

        /*$locationProvider.html5Mode({
            enable: true,
            requireBase: false
        });*/

        $routeProvider
            .when('/', {
              templateUrl : 'app/template/home.html'
            })
            .when('/article/:articleId', {
              templateUrl : 'app/template/article.html'
            })
            .otherwise({
              redirectTo : '/'
            });
  }]);

}(this, this.angular));