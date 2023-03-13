import { slspLoginBoxController } from './slsp-login-box.controller';


export const slspLoginBoxModule = angular
    .module('slspLoginBoxModule', [])
    .controller('slspLoginBoxController', slspLoginBoxController)
    .component('slspLoginBoxComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspLoginBoxController',

    })