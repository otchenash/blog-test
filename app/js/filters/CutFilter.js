(function(global, ng) {

    'use strict';

    function CutFilter(){
        return function (value, permission, wordwise, max, tail) {
            if(!permission) return value;

            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }
            return value + (tail || ' …');
        };
    }

  ng.module('blogApp').filter('cut', [CutFilter]);

}(this, this.angular));
