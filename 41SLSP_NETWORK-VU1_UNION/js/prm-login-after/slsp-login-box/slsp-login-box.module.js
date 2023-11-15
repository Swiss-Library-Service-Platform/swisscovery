import { slspLoginBoxController } from './slsp-login-box.controller';
import { slspLoginBoxHtml } from './slsp-login-box.html';

export const slspLoginBoxModule = angular
    .module('slspLoginBoxModule', [])
    .controller('slspLoginBoxController', slspLoginBoxController)
    .component('slspLoginBoxComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspLoginBoxController',
        template: slspLoginBoxHtml

    })