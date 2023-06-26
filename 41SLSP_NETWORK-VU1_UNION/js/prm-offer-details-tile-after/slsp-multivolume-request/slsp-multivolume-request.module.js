import { slspMultivolumeRequestController } from './slsp-multivolume-request.controller';


export const slspMultivolumeRequestModule = angular
    .module('slspMultivolumeRequestModule', [])
    .controller('slspMultivolumeRequestController', slspMultivolumeRequestController)
    .component('slspMultivolumeRequestComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspMultivolumeRequestController',

    })