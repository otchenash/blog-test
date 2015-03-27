(function(global, ng) {
    'use strict';

    /**
     * Responsible for workflow one post
     * @constructor
     * @class blogApp.controller.ArticleListCtrl
     * @extends {controller}
     */
    function ArticleListCtrl($scope, $location, ArticleListFactory, MapperService){

        // get id post
        var pathArr = $location.path().split('/'),
            idIndex = pathArr.length - 1,
            id = pathArr[idIndex];

        // get post
        ArticleListFactory.get(id)
             .then(function(result){
                $scope.articles = new Array(MapperService.getArticle(result.data));
         });

        //del post
        $scope.del = function(id) {
            $location.path('/');
            ArticleListFactory.del(id)
        };
    }

  ng.module('blogApp').controller('ArticleListCtrl', ['$scope', '$location', 'ArticleListFactory', 'MapperService', ArticleListCtrl]);

}(this, this.angular));
