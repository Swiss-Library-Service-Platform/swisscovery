import { slspOvpReservationModule } from './slsp-ovp-reservation/slsp-ovp-reservation.module';

export const prmOpacAfterModule = angular
    .module('prmOpacAfterModule', [])
    .component('prmOpacAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-ovp-reservation-component after-ctrl="$ctrl"></slsp-ovp-reservation-component>
            <slsp-opac-after parent-ctrl="$parent.$ctrl"></<slsp-opac-after>`
    });


prmOpacAfterModule.requires.push(slspOvpReservationModule.name);