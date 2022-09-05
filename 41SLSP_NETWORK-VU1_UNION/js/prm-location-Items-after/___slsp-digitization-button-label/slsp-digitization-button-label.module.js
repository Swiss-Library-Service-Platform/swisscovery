
    import {slspDigitizationButtonLabelController} from './slsp-digitization-button-label.controller';
    import {slspDigitizationButtonLabelHtml} from './slsp-digitization-button-label.html';

    export const slspDigitizationButtonLabelModule = angular
        .module('slspDigitizationButtonLabelModule', [])
            .controller('slspDigitizationButtonLabelController', slspDigitizationButtonLabelController)
            .component('slspDigitizationButtonLabelComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspDigitizationButtonLabelController',
                template: slspDigitizationButtonLabelHtml
            })