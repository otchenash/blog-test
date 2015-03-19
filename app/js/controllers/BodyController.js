(function(global, ng) {
    'use strict';

    function BodyCtrl($scope){
        $scope.openModal = false;

        $scope.closeModal = function () {
            $scope.openModal = !$scope.openModal;
        };

        $scope.addNewPost = function(){
            $scope.openModal = true;
            $scope.edit({
                author : '',
                text: '',
                title: '',
                id: undefined,
                date: undefined
            })
        };



    }

  ng.module('blogApp').controller('BodyCtrl', ['$scope', BodyCtrl]);

}(this, this.angular));
