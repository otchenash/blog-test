describe('Filter: cutFilter', function () {
        'use strict';

        // load the service's module
        beforeEach(module('blogApp'));

        // instantiate service
        var catFilterFilter;
    beforeEach(inject(function ($injector) {
        catFilterFilter = $injector.get('$filter')('cut');
    }));

    it('should slice text', function(){
        var text = new Array(1100).join('text , text'),
            cuttedText = catFilterFilter(text, true, true, 100);
        expect(cuttedText.length).toBeLessThan(101);
    });
});