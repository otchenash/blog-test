(function(global, ng) {

    'use strict';

    function modalBlock(){
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'app/templates/_modal.html'
        }
    }

    ng.module('blogApp.controls').directive('modalBlock', [modalBlock]);

}(this, this.angular));
