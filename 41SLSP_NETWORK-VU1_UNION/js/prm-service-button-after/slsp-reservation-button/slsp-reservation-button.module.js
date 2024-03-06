
    import {slspReservationButtonController} from './slsp-reservation-button.controller';
    import {slspReservationButtonHtml} from './slsp-reservation-button.html';

    export const slspReservationButtonModule = angular
        .module('slspReservationButtonModule', [])
            .controller('slspReservationButtonController', slspReservationButtonController)
            .component('slspReservationButtonComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspReservationButtonController',
                template: slspReservationButtonHtml
            })
            