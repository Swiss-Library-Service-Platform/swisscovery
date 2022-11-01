import {bcuRapidoNoFurtherOptionsController} from './bcu-rapido-no-further-options.controller';
//import {slspIllSigninOrderLoggedOutService} from '../../prm-user-area-expandable-after/slsp-ill-signin-order-logged-out/slsp-ill-signin-order-logged-out.service';

export const bcuRapidoNoFurtherOptionsModule = angular
    .module('bcuRapidoNoFurtherOptionsModule', [])
        //.factory('slspIllSigninOrderLoggedOutService', slspIllSigninOrderLoggedOutService)
        .controller('bcuRapidoNoFurtherOptionsController', bcuRapidoNoFurtherOptionsController)
        .component('bcuRapidoNoFurtherOptions', {
            bindings: {afterCtrl: '<'},
            controller: 'bcuRapidoNoFurtherOptionsController'
        })