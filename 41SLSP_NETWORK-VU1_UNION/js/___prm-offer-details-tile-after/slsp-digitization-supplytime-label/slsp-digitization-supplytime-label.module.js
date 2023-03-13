    import { slspDigitizationSupplytimeLabelController } from './slsp-digitization-supplytime-label.controller';
    import { slspDigitizationSupplytimeLabelHtml } from './slsp-digitization-supplytime-label.html';


    export const slspDigitizationSupplytimeLabelModule = angular
        .module('slspDigitizationSupplytimeLabelModule', [])
        .controller('slspDigitizationSupplytimeLabelController', slspDigitizationSupplytimeLabelController)
        .component('slspDigitizationSupplytimeLabelComponent', {
            bindings: { afterCtrl: '<' },
            controller: 'slspDigitizationSupplytimeLabelController',
            template: slspDigitizationSupplytimeLabelHtml
        })