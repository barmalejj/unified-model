/**
 * Created by spaceman on 12/12/15.
 */

(function () {
    'use strict';

    angular
        .module('multiStore')
        .controller('Controller', Controller);

    Controller.$inject = ['Model', 'Type', 'Restangular'];

    function Controller(Model, Type, Restangular) {
        var vm = this;

        Type.isSecond = true;
        vm.model = Model;

        Restangular.all('data').one('model.json').get();
    }
})();
