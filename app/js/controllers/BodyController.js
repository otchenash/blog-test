(function(global, ng) {
    'use strict';

    /**
     * Responsible for workflow all application
     * @constructor
     * @class blogApp.controller.BodyCtrl
     * @extends {controller}
     */
    function BodyCtrl($scope, MapperService, ArticleListFactory){
        $scope.openModal = false;

        // close modal
        $scope.closeModal = function () {
            $scope.openModal = !$scope.openModal;
        };

        // add new post
        $scope.addNewPost = function(){
            $scope.openModal = true;
            $scope.edit('');
        };

        // save or add post
        $scope.save = function(perm){
            if(perm){
                return false;
            }
            var dataJson = ng.toJson(MapperService.getArticle($scope.editModel).mapTo());
            if($scope.editModel.id){
                ArticleListFactory.edit($scope.editModel.id, dataJson);
            }
            ArticleListFactory.add(dataJson);
        };

        // edit post
        $scope.edit = function (article) {
            $scope.editModel = article;
            $scope.openModal = true;
        };
    }

  ng.module('blogApp').controller('BodyCtrl', ['$scope', 'MapperService', 'ArticleListFactory', BodyCtrl]);

}(this, this.angular));
