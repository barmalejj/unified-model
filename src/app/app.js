/**
 * Created by spaceman on 11/12/15.
 */

(function () {
    'use strict';

    angular
        .module('multiStore', [
            'restangular'
        ])
        .value('Type', {
            isFirst: false,
            isSecond: false,
            isThird: false
        })
        .config(config);

    config.$inject = ['$provide', 'MODEL_MAPPINGS', 'RestangularProvider'];

    function config($provide, MODEL_MAPPINGS, RestangularProvider) {

        RestangularProvider.setBaseUrl('/');

        _.each(Object.keys(MODEL_MAPPINGS), function (key) {

            $provide.decorator(key, function ($delegate, Type) {

                var decorated = {};

                _.each(MODEL_MAPPINGS[key], function (properties, virtualProperty) {

                    decorated[virtualProperty] = {
                        get: function () {

                            return $delegate[_getCurrentProperty(virtualProperty)];
                        },
                        set: function (value) {
                            $delegate[_getCurrentProperty(virtualProperty)] = value;
                        }
                    };

                });

                Object.defineProperties($delegate, decorated);

                function _getCurrentProperty(virtualProperty) {
                    var statusKey = _.findKey(Type, function (value) {
                        return value;
                    });

                    return MODEL_MAPPINGS[key][virtualProperty][statusKey];
                }

                return $delegate;

            });

        });
    }
})();
