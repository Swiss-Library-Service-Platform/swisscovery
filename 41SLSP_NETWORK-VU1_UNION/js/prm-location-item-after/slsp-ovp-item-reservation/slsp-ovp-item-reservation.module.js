import { slspOvpItemReservationController } from './slsp-ovp-item-reservation.controller';
import { slspOvpItemReservationHtml } from './slsp-ovp-item-reservation.html';


export const slspOvpItemReservationModule = angular
    .module('slspOvpItemReservationModule', [])
    .controller('slspOvpItemReservationController', slspOvpItemReservationController)
    .component('slspOvpItemReservationComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspOvpItemReservationController',
        template: slspOvpItemReservationHtml
    })