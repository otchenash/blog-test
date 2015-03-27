(function(global, ng) {
    'use strict';

    /**
     * Responsible for workflow all posts
     * @constructor
     * @class blogApp.controller.ArticlesListCtrl
     * @extends {controller}
     */
    function ArticlesListCtrl($scope, ArticleListFactory, MapperService ){

        // get all posts
        ArticleListFactory.getAll()
            .then(function(result){
                 $scope.articles = result.data.map(function(item){
                    return MapperService.getArticle(item);
                });
            });

        // del one post
        $scope.del = function(id) {
            ArticleListFactory.del(id)
        };
    }

  ng.module('blogApp').controller('ArticlesListCtrl', ['$scope', 'ArticleListFactory', 'MapperService',  ArticlesListCtrl]);

}(this, this.angular));
