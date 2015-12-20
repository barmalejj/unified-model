/**
 * Created by spaceman on 12/12/15.
 */

(function () {
    'use strict';

    angular
        .module('multiStore')
        .factory('NestedModelOne', NestedModelOne);

    NestedModelOne.$inject = [];

    function NestedModelOne() {

        var model = {};

        return model;
    }
})();
