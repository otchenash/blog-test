(function(global, ng) {

    'use strict';

    function BlogPost(){
        return {
            restrict: 'E',
            replace: true,
            template :  '<div ng-if="article.title && article.author && article.text && article.date" class="blog-post" ng-repeat="article in articles">' +
                            '<img ng-src="{{article.image}}" ng-if="article.image" alt=""/>' +
                            '<h2 ng-if="article.title" class="blog-post-title">{{article.title}}</h2>' +
                            '<p ng-if="article.author" class="blog-post-meta">{{article.author}}</p>' +
                            '<p ng-if="article.text">{{article.text | cut:(articles.length > 1):true:100}} <a href="#/article/{{article.id}}" ng-show="{{articles.length > 1}}" ng-click="openArticle(article)">reed more</a></p>' +
                            '<p ng-if="article.date">{{article.date}}</p>' +
                            '<div class="btn-toolbar">' +
                                '<a class="btn btn-default btn-lg" ng-hide="{{articles.length > 1}}" href="#/"><span class="glyphicon glyphicon-arrow-left"></span> Back</a>' +
                                '<button class="btn btn-default btn-lg" ng-click="edit(article)"><span class="glyphicon glyphicon-pencil"></span> Edit Post</button>' +
                                '<button class="btn btn-default btn-lg"" ng-click="del(article.id)"><span class="glyphicon glyphicon-shopping-cart"></span> Del Post</button>' +
                            '</div>'+
                        '</div>'

        }
    }

    ng.module('blogApp.controls').directive('blogPost', [BlogPost]);

}(this, this.angular));
