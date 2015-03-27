(function(global, ng) {

    'use strict';

    /**
     * Directive blog post.
     * @constructor
     * @class blogApp.controls.blogPost
     * @extends {directive}
     */
    function BlogPost(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl : 'app/templates/_post.html'
        }
    }

    ng.module('blogApp.controls').directive('blogPost', [BlogPost]);

}(this, this.angular));
