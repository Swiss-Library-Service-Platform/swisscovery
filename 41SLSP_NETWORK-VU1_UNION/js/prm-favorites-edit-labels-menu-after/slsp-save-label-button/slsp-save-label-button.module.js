import { slspSaveLabelButtonController } from './slsp-save-label-button.controller';
import { slspSaveLabelButtonHtml } from './slsp-save-label-button.html';

export const slspSaveLabelButtonModule = angular
    .module('slspSaveLabelButtonModule', [])
    .controller('slspSaveLabelButtonController', slspSaveLabelButtonController)
    .component('slspSaveLabelButtonComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspSaveLabelButtonController',
        template: slspSaveLabelButtonHtml

    })