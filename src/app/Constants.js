/**
 * Created by spaceman on 13/12/15.
 */

(function () {
    'use strict';

    angular
        .module('multiStore')
        .constant('MODEL_MAPPINGS', {
            Model: {
                property: {
                    isFirst: 'firstProperty',
                    isSecond: 'secondProperty',
                    isThird: 'thirdProperty'
                },
                item: {
                    isFirst: 'firstItem',
                    isSecond: 'secondItem',
                    isThird: 'thirdItem'
                }
            },
            NestedModelOne: {
                property: {
                    isFirst: 'firstPropertyOne',
                    isSecond: 'secondPropertyOne',
                    isThird: 'thirdPropertyOne'
                },
                item: {
                    isFirst: 'firstItemOne',
                    isSecond: 'secondItemOne',
                    isThird: 'thirdItemOne'
                }
            },
            NestedModelTwo: {
                property: {
                    isFirst: 'firstPropertyTwo',
                    isSecond: 'secondPropertyTwo',
                    isThird: 'thirdPropertyTwo'
                },
                item: {
                    isFirst: 'firstItemTwo',
                    isSecond: 'secondItemTwo',
                    isThird: 'thirdItemTwo'
                }
            },
            NestedModelThree: {
                property: {
                    isFirst: 'firstPropertyThree',
                    isSecond: 'secondPropertyThree',
                    isThird: 'thirdPropertyThree'
                },
                item: {
                    isFirst: 'firstItemThree',
                    isSecond: 'secondItemThree',
                    isThird: 'thirdItemThree'
                }
            }
        });
})();
