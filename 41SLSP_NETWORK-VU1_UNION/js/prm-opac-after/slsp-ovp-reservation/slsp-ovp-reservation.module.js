import { slspOvpReservationController } from './slsp-ovp-reservation.controller';
import { slspOvpReservationHtml } from './slsp-ovp-reservation.html';


export const slspOvpReservationModule = angular
    .module('slspOvpReservationModule', [])
    .controller('slspOvpReservationController', slspOvpReservationController)
    .component('slspOvpReservationComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspOvpReservationController',
        template: slspOvpReservationHtml
    })