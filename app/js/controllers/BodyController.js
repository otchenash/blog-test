(function(global, ng) {
    'use strict';

    function BodyCtrl($scope, MapperService, BlogControlService){
        $scope.openModal = false;

        $scope.closeModal = function () {
            $scope.openModal = !$scope.openModal;
        };

        $scope.addNewPost = function(){
            $scope.openModal = true;
            $scope.edit('');
        };

        $scope.save = function(perm){
            if(perm){
                return false;
            }
            var dataJson = ng.toJson(MapperService.getArticle($scope.editModel).mapTo());
            if($scope.editModel.id){
                BlogControlService.editPost($scope.editModel.id, dataJson);
            }
            BlogControlService.addPost(dataJson);
        };

        $scope.edit = function (article) {
            $scope.editModel = article;
            $scope.openModal = true;
        };



    }

  ng.module('blogApp').controller('BodyCtrl', ['$scope', 'MapperService', 'BlogControlService', BodyCtrl]);

}(this, this.angular));
