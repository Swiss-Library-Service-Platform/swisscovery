import { slspRapidoHideLibraryController } from './slsp-rapido-hide-library.controller';


export const slspRapidoHideLibraryModule = angular
    .module('slspRapidoHideLibraryModule', [])
    .controller('slspRapidoHideLibraryController', slspRapidoHideLibraryController)
    .component('slspRapidoHideLibraryComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspRapidoHideLibraryController',

    })