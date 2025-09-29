import { slspHomeDeliveryLabelController } from './slsp-home-delivery-label.controller.js';
import { slspHomeDeliveryLabelHtml } from './slsp-home-delivery-label.html';


export const slspHomeDeliveryLabelModule = angular
    .module('slspHomeDeliveryLabelModule', [])
    .controller('slspHomeDeliveryLabelController', slspHomeDeliveryLabelController)
    .component('slspHomeDeliveryLabelComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspHomeDeliveryLabelController',
        template: slspHomeDeliveryLabelHtml
    })