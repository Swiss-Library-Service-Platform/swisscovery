import { slspClosePickupAnywhereFormController } from './slsp-close-pickup-anywhere-form.controller';
import { slspClosePickupAnywhereFormHtml } from './slsp-close-pickup-anywhere-form.html';


export const slspClosePickupAnywhereFormModule = angular
    .module('slspClosePickupAnywhereFormModule', [])
    .controller('slspClosePickupAnywhereFormController', slspClosePickupAnywhereFormController)
    .component('slspClosePickupAnywhereFormComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspClosePickupAnywhereFormController',
        template: slspClosePickupAnywhereFormHtml
    })