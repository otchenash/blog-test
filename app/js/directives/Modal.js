(function(global, ng) {

    'use strict';

    /**
     * Directive responsible from add new posts and edit posts.
     * @constructor
     * @class blogApp.controls.modalBlock
     * @extends {directive}
     */
    function modalBlock(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/templates/_modal.html'
        }
    }

    ng.module('blogApp.controls').directive('modalBlock', [modalBlock]);

}(this, this.angular));
