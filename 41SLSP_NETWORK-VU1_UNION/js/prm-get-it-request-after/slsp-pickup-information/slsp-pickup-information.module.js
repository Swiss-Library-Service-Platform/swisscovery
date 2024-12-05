
    import {slspPickupInformationController} from './slsp-pickup-information.controller';
    import {slspPickupInformationHtml} from './slsp-pickup-information.html';

    export const slspPickupInformationModule = angular
        .module('slspPickupInformationModule', [])
            .controller('slspPickupInformationController', slspPickupInformationController)
            .component('slspPickupInformationComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspPickupInformationController',
                template: slspPickupInformationHtml
            })