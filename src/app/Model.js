/**
 * Created by spaceman on 12/12/15.
 */

(function () {
    'use strict';

    angular
        .module('multiStore')
        .factory('Model', Model);

    Model.$inject = ['NestedModelOne', 'NestedModelTwo', 'NestedModelThree'];

    function Model(NestedModelOne, NestedModelTwo, NestedModelThree) {

        var model = {
            firstProperty: NestedModelOne,
            secondProperty: NestedModelTwo,
            thirdProperty: NestedModelThree
        };

        return model;
    }
})();
